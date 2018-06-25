'use strict'

function main () {
    var container = null;
    var button = null;
    var canvas = null;
    var gameContainer = null;
    var reStartContainer = null;
    var reStartButton = null; 
    var ctx = null;
    var game = null;



    function buildSplash () {
        container = document.getElementById('main-container');
        button = document.createElement('button');
        button.setAttribute('id', 'btn-start');
        button.innerText = "START GAME";
        container.appendChild(button);
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
        game = new Game(ctx, canvas, endGame);
        window.addEventListener("keydown", playerMovements);
        // var gameTest = setTimeout(() => {
        //     endGame();
            
        // }, 10000);
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






    function endGame () {
        gameContainer.remove();
        buildGameOver();
    }


    function buildGameOver () {
        reStartContainer = document.createElement('div');
        reStartContainer.setAttribute('id','restart-container');
        document.body.appendChild(reStartContainer);
        reStartButton = document.createElement('button');
        reStartButton.setAttribute('id', 'btn-restart');
        reStartButton.innerText = "RESTART GAME";
        reStartContainer.appendChild(reStartButton);
        reStartButton.addEventListener('click', handleRestartClick);
    }


    function handleRestartClick () {
        destroyGameOver();
        buildGame();
    }


    function destroyGameOver () {
        reStartButton.removeEventListener('click', handleRestartClick);
        reStartContainer.remove();
    }

    buildSplash();
}

window.addEventListener('load', main)