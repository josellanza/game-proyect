'use strict'

function createHtml(html) {
    var div = document.createElement("div");
    div.innerHTML = html;
    return div.children[0];
  } 

  var introScreen = createHtml(`<div id='intro'>
  <h1 class='intro-title'> Save the whale</h1>
  </div>`);

  var gameOver = createHtml(`<div id='game-over'>
  <h1 class='game-over-title'> You lose!</h1>
  </div>`);

  var youWin = createHtml(`<div id='you-win'>
  <h1 class='you-win-title'>You win!</h1>
  </div>`);

function main () {
    var container = null;
    var button = null;
    var canvas = null;
    var gameContainer = null;
    var reStartContainer = null;
    var reStartButton = null; 
    var ctx = null;
    var game = null;
    var winContainer = null;
    var winButton = null;

    function buildSplash () {
        container = document.getElementById('main-container');
        button = document.createElement('button');
        button.setAttribute('id', 'btn-start');
        button.innerText = "START GAME";
        container.appendChild(introScreen);
        introScreen.appendChild(button);
        button.addEventListener('click', handleStartClick);
    }

    function handleStartClick () {
        destroySplash();
        buildGame();
    }

    function destroySplash () {
        button.removeEventListener('click', handleStartClick);
        container.remove();
    }

    function buildGame () {
        gameContainer = document.createElement('div');
        gameContainer.setAttribute('id','game-container');
        document.body.appendChild(gameContainer);
        canvas = document.createElement('canvas');
        canvas.setAttribute('width', '1500');
        canvas.setAttribute('height', '800');
        canvas.setAttribute('id', 'canvas');
        gameContainer.appendChild(canvas);
        playGame();
    }

    function playGame () {
        ctx = canvas.getContext('2d');
        game = new Game(ctx, canvas, looseGame);
        window.addEventListener("keydown", playerMovements);
    }

    // we conect the move methods of the player constructor to the event

    function playerMovements (event) {
        if (event.key === "w") {
            game.player.moveUp();
        } else if (event.key === "s") {
            game.player.moveDown();
        } else if (event.key === "a") {
            game.player.moveLeft();
        } else if (event.key === "d") {
            game.player.moveRight();
        }
    }

    function looseGame () {
       var self = this;
        gameContainer.remove();

       if (self.player.lives <= 0) { 
           buildGameOver();
         } else if (self.player.position.x + self.player.size.width >= self.size.width){
             buildYouWin();
         }
    }

    function buildGameOver () {
        reStartContainer = document.createElement('div');
        reStartContainer.setAttribute('id','restart-container');
        document.body.appendChild(reStartContainer);
        reStartButton = document.createElement('button');
        reStartButton.setAttribute('id', 'btn-restart');
        reStartButton.innerText = "PLAY AGAIN";
        reStartContainer.appendChild(gameOver);
        gameOver.appendChild(reStartButton);
        reStartButton.addEventListener('click', handleRestartClick);
    }


    function handleRestartClick () {
        destroyGameOver();
        buildGame();
    }

    function destroyGameOver () {
        reStartButton.removeEventListener('click', handleRestartClick);
        reStartContainer.remove();
        reStartButton.remove();
    }

    function buildYouWin(){
        winContainer = document.createElement('div');
        winContainer.setAttribute('id', 'win-container');
        document.body.appendChild(winContainer);
        winButton = document.createElement('button');
        winButton.setAttribute('id', 'btn-win');
        winButton.innerText = "PLAY AGAIN";
        winContainer.appendChild(youWin);
        youWin.appendChild(winButton);
        winButton.addEventListener('click', handleWinClick);
    }

    function handleWinClick () {
        destroyWinGame();
        buildGame();
    }

    function destroyWinGame () {
        winButton.removeEventListener('click', handleWinClick)
        winContainer.remove();
        winButton.remove();
    }


    buildSplash();
}

window.addEventListener('load', main)