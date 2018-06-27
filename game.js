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
    this.thirdsquare = null;
    this.fourthsquare = null;
    this.fifthsquare = null;
    this.sixthsquare = null;
    this.seventhsquare1 = null;
    this.seventhsquare2 = null;
    this.seventhsquare3 = null;
    this.start();

}
    Game.prototype.start = function () {
        var self = this;
        self.player = new Player (self.ctx);
        self.firstsquare = new Firstsquare (self.ctx, self.size);
        self.secondsquare = new Secondsquare (self.ctx, self.size);
        self.thirdsquare = new Thirdsquare (self.ctx, self.size);
        self.fourthsquare = new Fourthsquare (self.ctx, self.size);
        self.fifthsquare = new Fifthsquare (self.ctx, self.size);
        self.sixthsquare = new Sixthsquare (self.ctx, self.size);
        self.seventhsquare1 = new Seventhsquare (self.ctx, self.size, 1260);
        self.seventhsquare2 = new Seventhsquare (self.ctx, self.size, 1320);
        self.seventhsquare3 = new Seventhsquare (self.ctx, self.size, 1380);
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
        self.thirdsquare.draw();
        self.fourthsquare.draw();
        self.fifthsquare.draw();
        self.sixthsquare.draw();
        self.seventhsquare1.draw();
        self.seventhsquare2.draw();
        self.seventhsquare3.draw();

    }


    Game.prototype.update = function () {
        var self = this;
        self.firstsquare.move();
        console.log(self.player.position.y, self.player.position.x);
    }


    Game.prototype.changeSquaresMove = function () {
        var self = this;
        var gameTest = setTimeout(() => {
                self.firstsquare.moveStop();
                
            }, 7000);
    }

    Game.prototype.startFirstMovement = function () {
        var self = this;
        if (self.player.position.y <= 90 && self.player.position.x >= 570) {
            self.thirdsquare.moveUp();

        } 
        
        if (self.player.position.y >= 480 && self.player.position.x >= 665) {
            
            self.fifthsquare.moveRight();
            self.fourthsquare.moveDown();

        }
         
        if (self.player.position.y >= 90 && self.player.position.x >= 400) {
           
            self.seventhsquare1.moveDown();
            self.seventhsquare2.moveDown();
            self.seventhsquare3.moveDown();
            
        }      
    }

    Game.prototype.checkCollisions = function () {
        var self = this;

        // Collision with the firstsquarew

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

        var thirdsquareData = {
            x: self.thirdsquare.position.x,
            y: self.thirdsquare.position.y,
            width: self.thirdsquare.size.width,
            height: self.thirdsquare.size.height,
            
            };
            
            var playerData = {
            x: self.player.position.x,
            y: self.player.position.y,
            width: self.player.size.width,
            height: self.player.size.height,
            }
            
            if (thirdsquareData.x < playerData.x + playerData.width &&
            thirdsquareData.x + thirdsquareData.width > playerData.x &&
            thirdsquareData.y < playerData.y + playerData.height &&
            thirdsquareData.height + thirdsquareData.y > playerData.y) {
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

            // Collision with the sixthsquare

        var sixthsquareData = {
            x: self.sixthsquare.position.x,
            y: self.sixthsquare.position.y,
            width: self.sixthsquare.size.width,
            height: self.sixthsquare.size.height,
            
            };
            
            var playerData = {
            x: self.player.position.x,
            y: self.player.position.y,
            width: self.player.size.width,
            height: self.player.size.height,
            }
            
            if (sixthsquareData.x < playerData.x + playerData.width &&
            sixthsquareData.x + sixthsquareData.width > playerData.x &&
            sixthsquareData.y < playerData.y + playerData.height &&
            sixthsquareData.height + sixthsquareData.y > playerData.y) {
                self.player = new Player(self.ctx);
            }

            // Collision with the seventhsquare1

        var seventhsquare1Data = {
            x: self.seventhsquare1.position.x,
            y: self.seventhsquare1.position.y,
            width: self.seventhsquare1.size.width,
            height: self.seventhsquare1.size.height,
            
            };
            
            var playerData = {
            x: self.player.position.x,
            y: self.player.position.y,
            width: self.player.size.width,
            height: self.player.size.height,
            }
            
            if (seventhsquare1Data.x < playerData.x + playerData.width &&
            seventhsquare1Data.x + seventhsquare1Data.width > playerData.x &&
            seventhsquare1Data.y < playerData.y + playerData.height &&
            seventhsquare1Data.height + seventhsquare1Data.y > playerData.y) {
                self.player = new Player(self.ctx);
            }

            // Collision with the seventhsquare2

        var seventhsquare2Data = {
            x: self.seventhsquare2.position.x,
            y: self.seventhsquare2.position.y,
            width: self.seventhsquare2.size.width,
            height: self.seventhsquare2.size.height,
            
            };
            
            var playerData = {
            x: self.player.position.x,
            y: self.player.position.y,
            width: self.player.size.width,
            height: self.player.size.height,
            }
            
            if (seventhsquare2Data.x < playerData.x + playerData.width &&
            seventhsquare2Data.x + seventhsquare2Data.width > playerData.x &&
            seventhsquare2Data.y < playerData.y + playerData.height &&
            seventhsquare2Data.height + seventhsquare2Data.y > playerData.y) {
                self.player = new Player(self.ctx);
            }

            // Collision with the seventhsquare3

        var seventhsquare3Data = {
            x: self.seventhsquare3.position.x,
            y: self.seventhsquare3.position.y,
            width: self.seventhsquare3.size.width,
            height: self.seventhsquare3.size.height,
            
            };
            
            var playerData = {
            x: self.player.position.x,
            y: self.player.position.y,
            width: self.player.size.width,
            height: self.player.size.height,
            }
            
            if (seventhsquare3Data.x < playerData.x + playerData.width &&
            seventhsquare3Data.x + seventhsquare3Data.width > playerData.x &&
            seventhsquare3Data.y < playerData.y + playerData.height &&
            seventhsquare3Data.height + seventhsquare3Data.y > playerData.y) {
                self.player = new Player(self.ctx);
            }



            // SQUARE COLLISIONS WITH THE CANVAS 

            // collision of the thirthsquare with the canvas border

            if (self.thirdsquare.position.y <= 0) {
              self.thirdsquare.speed.y = -self.thirdsquare.speed.y
            } else if (self.thirdsquare.position.y + self.thirdsquare.size.height >= self.size.height) {
                self.thirdsquare.speed.y = -self.thirdsquare.speed.y
            }
            
             // collision of the fourthsquare with the canvas border
             if (self.fourthsquare.position.y <= 0) {
                self.fourthsquare.speed.y = -self.fourthsquare.speed.y
              } else if (self.fourthsquare.position.y + self.fourthsquare.size.height >= self.size.height) {
                  self.fourthsquare.speed.y = -self.fourthsquare.speed.y
              }

              // collision of the fifthsquare with the canvas border

              if (self.fifthsquare.position.x <= 0) {
                self.fifthsquare.speed.x = -self.fifthsquare.speed.x
              } else if (self.fifthsquare.position.x + self.fifthsquare.size.width >= self.size.width) {
                  self.fifthsquare.speed.x = -self.fifthsquare.speed.x
              }

              // collision of the seventhsquare1 with the canvas border

              if (self.seventhsquare1.position.y <= 0) {
                self.seventhsquare1.speed.y = -self.seventhsquare1.speed.y
              } else if (self.seventhsquare1.position.x + self.seventhsquare1.size.height >= self.size.height) {
                  self.seventhsquare1.speed.y = -self.seventhsquare1.speed.y
              }

              // collision of the seventhsquare2 with the canvas border

              if (self.seventhsquare2.position.y <= 0) {
                self.seventhsquare2.speed.y = -self.seventhsquare2.speed.y
              } else if (self.seventhsquare2.position.x + self.seventhsquare2.size.height >= self.size.height) {
                  self.seventhsquare2.speed.y = -self.seventhsquare2.speed.y
              }

              // collision of the seventhsquare3 with the canvas border

              if (self.seventhsquare3.position.y <= 0) {
                self.seventhsquare3.speed.y = -self.seventhsquare3.speed.y
              } else if (self.seventhsquare3.position.x + self.seventhsquare3.size.height >= self.size.height) {
                  self.seventhsquare3.speed.y = -self.seventhsquare3.speed.y
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
        self.startFirstMovement();
        window.requestAnimationFrame(function(){
          if(!self.isEnded){
            self.doFrame();
          } 
          // else if (self.isEnded) {
          //   self.callback();
          // }
        })
    }
