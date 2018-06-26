'use strict'

function Game (ctx, canvas, cb) {
    this.ctx = ctx;
    this.size = {
        width: canvas.width,
        height: canvas.height,
    }
    
    this.player = null;
    this.gameLoose = false;
    this.callback = cb;
    this.firstsquare = null;
    this.secondsquare = null;
    this.thirthsquare = null;
    this.fourthsquare = null;
    this.fifthsquare = null;
    this.start();

}
    Game.prototype.start = function () {
        var self = this;
        self.player = new Player (self.ctx);
        self.firstsquare = new Firstsquare (self.ctx, self.size);
        self.secondsquare = new Secondsquare (self.ctx, self.size);
        self.thirthsquare = new Thirthsquare (self.ctx, self.size);
        self.fourthsquare = new Fourthsquare (self.ctx, self.size);
        self.fifthsquare = new Fifthsquare (self.ctx, self.size);
        self.doFrame();
    }


    Game.prototype.checkIfEnded = function () {
        var self = this;
        if (self.player.lives = 0){
            this.gameLoose = true; 
            this.callback();
        }
    }

    Game.prototype.clearCanvas = function () {
        var self = this;
        self.ctx.clearRect(0, 0, self.size.width, self.size.height);
    }

    Game.prototype.draw = function () {
        var self = this;
        self.player.draw();
        self.firstsquare.draw();
        self.secondsquare.draw();
        self.thirthsquare.draw();
        self.fourthsquare.draw();
        self.fifthsquare.draw();
    }


    Game.prototype.update = function () {
        var self = this;
        self.firstsquare.move();
        // console.log(self.player.position.y);
    }


    Game.prototype.changeSquaresMove = function () {
        var self = this;
        var gameTest = setTimeout(() => {
                self.firstsquare.moveStop();
                
            }, 7000);

        // var gameTest = setTimeout(() => {
        //     self.thirthsquare.moveUp();
            
        // }, 6500);

        // var gameTest = setTimeout(() => {
        //     self.thirthsquare.moveDown();
            
        // }, 8000);

        // var gameTest = setTimeout(() => {
        //     self.thirthsquare.moveStop();
            
        // }, 9500);

        // var gameTest = setTimeout(() => {
        //     self.fourthsquare.move();
            
        // }, 15000);

        // var gameTest = setTimeout(() => {
        //     self.fifthsquare.move();
            
        // }, 15000);
    }

    Game.prototype.startMovements = function () {
        var self = this;
        if (self.player.position.y <= 70 && self.player.position.x <= 550) {
            self.thirthsquare.moveUp();

        }
    }

    Game.prototype.checkCollisions = function () {
        var self = this;

        // Collision with the firstsquare

        var firstsquareData = {
            x: self.firstsquare.position.x,
            y: self.firstsquare.position.y,
            width: self.firstsquare.size.width,
            height: self.firstsquare.size.height,
         
          };
         
          var playerData = {
            x: self.player.position.x,
            y: self.player.position.y,
            width: self.player.size.width,
            height: self.player.size.height,
          }
         
          if (firstsquareData.x < playerData.x + playerData.width &&
            firstsquareData.x + firstsquareData.width > playerData.x &&
            firstsquareData.y < playerData.y + playerData.height &&
            firstsquareData.height + firstsquareData.y > playerData.y) {
                self.player = new Player(self.ctx);
            }
        

            // collision with secondsquare

        var secondsquareData = {
            x: self.secondsquare.position.x,
            y: self.secondsquare.position.y,
            width: self.secondsquare.size.width,
            height: self.secondsquare.size.height,
            
            };
            
            var playerData = {
            x: self.player.position.x,
            y: self.player.position.y,
            width: self.player.size.width,
            height: self.player.size.height,
            }
            
            if (secondsquareData.x < playerData.x + playerData.width &&
            secondsquareData.x + secondsquareData.width > playerData.x &&
            secondsquareData.y < playerData.y + playerData.height &&
            secondsquareData.height + secondsquareData.y > playerData.y) {
                self.player = new Player(self.ctx);
            }


            // Collision with the thirthsquare

        var thirthsquareData = {
            x: self.thirthsquare.position.x,
            y: self.thirthsquare.position.y,
            width: self.thirthsquare.size.width,
            height: self.thirthsquare.size.height,
            
            };
            
            var playerData = {
            x: self.player.position.x,
            y: self.player.position.y,
            width: self.player.size.width,
            height: self.player.size.height,
            }
            
            if (thirthsquareData.x < playerData.x + playerData.width &&
            thirthsquareData.x + thirthsquareData.width > playerData.x &&
            thirthsquareData.y < playerData.y + playerData.height &&
            thirthsquareData.height + thirthsquareData.y > playerData.y) {
                self.player = new Player(self.ctx);
            }
    
            // Collision with the fourthsquare

        var fourthsquareData = {
            x: self.fourthsquare.position.x,
            y: self.fourthsquare.position.y,
            width: self.fourthsquare.size.width,
            height: self.fourthsquare.size.height,
            
            };
            
            var playerData = {
            x: self.player.position.x,
            y: self.player.position.y,
            width: self.player.size.width,
            height: self.player.size.height,
            }
            
            if (fourthsquareData.x < playerData.x + playerData.width &&
            fourthsquareData.x + fourthsquareData.width > playerData.x &&
            fourthsquareData.y < playerData.y + playerData.height &&
            fourthsquareData.height + fourthsquareData.y > playerData.y) {
                self.player = new Player(self.ctx);
            }

            // Collision with the fifthsquare

        var fifthsquareData = {
            x: self.fifthsquare.position.x,
            y: self.fifthsquare.position.y,
            width: self.fifthsquare.size.width,
            height: self.fifthsquare.size.height,
            
            };
            
            var playerData = {
            x: self.player.position.x,
            y: self.player.position.y,
            width: self.player.size.width,
            height: self.player.size.height,
            }
            
            if (fifthsquareData.x < playerData.x + playerData.width &&
            fifthsquareData.x + fifthsquareData.width > playerData.x &&
            fifthsquareData.y < playerData.y + playerData.height &&
            fifthsquareData.height + fifthsquareData.y > playerData.y) {
                self.player = new Player(self.ctx);
            }



    }
      

    Game.prototype.doFrame = function () {
        var self = this;//change everything to self in the methods
        self.checkIfEnded();
        self.checkCollisions();
        self.clearCanvas();
        self.update();
        self.changeSquaresMove();
        self.draw();
        self.startMovements();
        window.requestAnimationFrame(function(){
          if(!self.isEnded){
            self.doFrame();
          } 
          // else if (self.isEnded) {
          //   self.callback();
          // }
        })
    }
