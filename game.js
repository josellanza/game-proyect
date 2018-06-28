'use strict'

// We build the constructor of the game and we define his properties

function Game (ctx, canvas, cb, wg) {
    this.ctx = ctx;
    this.callback = cb;
    this.isEnded = false;
    this.winGame = wg;

    this.size = {
        width: canvas.width,
        height: canvas.height,
    }
    
    this.player = null;
    this.squares = [];
    this.eventBox = [];
    
    this.start();

    // build the instances of the constructors
}
    Game.prototype.start = function () {
        var self = this;
        self.player = new Player (self.ctx);

        self.squares.push(new Square(self.ctx, 0, -300, canvas.width*4/11, canvas.height*6/10, 0, 0.3, true, true, true),
        new Square(self.ctx, 0, canvas.height*4/8, canvas.width*13/30, canvas.height*4/8, 0, 0, false, false, false),
        new Square(self.ctx, canvas.width*13/30, canvas.height*1/8, canvas.width*1/10, canvas.height*5/8, 0, -4, false, false, false),
        new Square(self.ctx, canvas.width*19/30, 1, canvas.width*1/10, canvas.height*5/8, 0, 4, false, false, false),
        new Square(self.ctx, 1, canvas.height*6/8, canvas.width*1/3, canvas.height*1/8, 4, 0, false, false, false),
        new Square(self.ctx, canvas.width*11/15, 0, canvas.width*4/15, canvas.height*7/8, 0, 0, false, false, false),
        new Square(self.ctx, 1220, canvas.height*2/10, 5, canvas.height/2, 0, 5, false, false, false),
        new Square(self.ctx, 1320, canvas.height*3/10, 5, canvas.height/2, 0, 5, false, false, false),
        new Square(self.ctx, 1420, canvas.height*1/10, 5, canvas.height/2, 0, 5, false, false, false)
        );

        self.eventBox.push(new EventBox(self.ctx, 570, 0, canvas.width*2/15, canvas.height*1/10, self.squares[2]),
        new EventBox(self.ctx, 800, 540, canvas.width*3/10, canvas.height*3/8, self.squares[3]),
        new EventBox(self.ctx, 800, 540, canvas.width*3/10, canvas.height*3/8, self.squares[4]),
        new EventBox(self.ctx, canvas.width*11/15, canvas.height*7/8, canvas.width*4/15, canvas.height*1/8, self.squares[6]),
        new EventBox(self.ctx, canvas.width*11/15, canvas.height*7/8, canvas.width*4/15, canvas.height*1/8, self.squares[7]),
        new EventBox(self.ctx, canvas.width*11/15, canvas.height*7/8, canvas.width*4/15, canvas.height*1/8, self.squares[8]),
        );

        self.doFrame();
    }

    // clear and draw the rectangles

    Game.prototype.clearCanvas = function () {
        var self = this;
        self.ctx.clearRect(0, 0, self.size.width, self.size.height);
    }

    Game.prototype.draw = function () {
        var self = this;
        self.player.draw();
        self.squares.forEach(function(square){
            square.draw();
        })
    }

    // Update move for the squares

    Game.prototype.update = function () {
        var self = this;
        self.squares.forEach(function(square){
            square.move();
        })
    }

    // COLLISION

    // Collision between player and squares

    Game.prototype.playerCollisions = function () {
        self = this;

        var playerLeft = self.player.position.x;
        var playerRight = self.player.position.x + self.player.size.width;
        var playerTop = self.player.position.y;
        var playerBottom = self.player.position.y + self.player.size.height;

        self.squares.forEach(function(square) {
            var squareLeft = square.position.x;
            var squareRight = square.position.x + square.size.width;
            var squareTop = square.position.y;
            var squareBottom = square.position.y + square.size.height;

            if (squareLeft <= playerRight && playerRight <= squareRight) {
                if (squareTop <= playerTop && playerTop <= squareBottom) {
                    self.player.lives --;
                } else if (squareTop <= playerBottom && playerBottom <= squareBottom) {
                    self.player.lives --;
                }
            } else if (squareLeft <= playerLeft && playerLeft <= squareRight) {
                if (squareTop <= playerTop && playerTop <= squareBottom) {
                    self.player.lives --;
                } else if (squareTop <= playerBottom && playerBottom <= squareBottom) {
                    self.player.lives --;
                }
            } 
        })

        // Collisions between the player and the event boxes

        self.eventBox.forEach(function(eventBox) {
            var boxLeft = eventBox.position.x;
            var boxRight = eventBox.position.x + eventBox.size.width;
            var boxTop = eventBox.position.y;
            var boxBottom = eventBox.position.y + eventBox.size.height;

            if (boxLeft <= playerRight && playerRight <= boxRight) {
                if (boxTop <= playerTop && playerTop <= boxBottom) {

                    eventBox.target.active = true;

                } else if (boxTop <= playerBottom && playerBottom <= boxBottom) {
                    eventBox.target.active = true;
                }

            } else if (boxLeft <= playerLeft && playerLeft <= boxRight) {
                if (boxTop <= playerTop && playerTop <= boxBottom) {

                    eventBox.target.active = true;

                } else if (boxTop <= playerBottom && playerBottom <= boxBottom) {
                    eventBox.target.active = true;
                }

            }
        })
    }

    // Collisions between the player and the canvas size

    Game.prototype.playerCollisionsCanvas = function () {
        var self = this;

        var playerLeft = self.player.position.x;
        var playerTop = self.player.position.y;
        // var playerRight = If player postion reach canvas size, you win, no collision here!
        var playerBottom = self.player.position.y + self.player.size.height;

        var canvasLeft = 0;
        // var canvasRight = If player postion reach canvas size, you win, no collision here!
        var canvasTop = 0;
        var canvasBottom = self.size.height;

        if (playerTop <= canvasTop) {
            self.player.position.y = 0;
        } else if (playerBottom >= canvasBottom) {
            self.player.position.y = self.size.height - self.player.size.height;
        } else if (playerLeft <= canvasLeft) {
            self.player.position.x = 0;
        } 
    }      

    // Collisions between the squares and the canvas size

    Game.prototype.squaresCollisionCanvas = function () {
        var self = this;

        var canvasLeft = 0;
        var canvasRight = self.size.width;
        var canvasTop = 0;
        var canvasBottom = self.size.height;


        self.squares.forEach(function(square) {
            var squareLeft = square.position.x;
            var squareRight = square.position.x + square.size.width;
            var squareTop = square.position.y;
            var squareBottom = square.position.y + square.size.height;

            if (squareRight >= canvasRight) {
                square.speed.x = -square.speed.x;
            } else if (squareLeft <= canvasLeft) {
                square.speed.x = -square.speed.x;
            } else if (squareTop <= canvasTop) {
                square.speed.y = -square.speed.y;
            } else if (squareBottom >= canvasBottom) {
                square.speed.y = -square.speed.y;
            }
          })
         }

        //  check if lose or win 

    Game.prototype.checkIfLose = function () {
        var self = this;
        if (self.player.lives <= 0) {
          this.isEnded = true;
          this.callback();
        }
      }
      
      Game.prototype.checkIfWin = function () {
        var self = this; 
        if (self.player.position.x + self.player.size.width >= self.size.width) {
            this.isEnded = true;
            this.callback();
        } 
    }

    // Refresh all of these functions each frame

    Game.prototype.doFrame = function () {
        var self = this;
        self.checkIfWin();
        self.checkIfLose();
        self.squaresCollisionCanvas();
        self.playerCollisions();
        self.update();
        self.playerCollisionsCanvas();
        self.clearCanvas();
        self.draw();
        window.requestAnimationFrame(function(){
          if(!self.isEnded){
            self.doFrame();
          }
        })
    }
