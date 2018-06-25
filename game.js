// Defino el Game constructor

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
    this.start();

}
    Game.prototype.start = function () {
        var self = this;
        self.player = new Player (self.ctx);
        self.firstsquare = new Firstsquare (self.ctx, self.size);
        self.secondsquare = new Secondsquare (self.ctx, self.size);
        self.thirthsquare = new Thirthsquare (self.ctx, self.size);
        self.fourthsquare = new Fourthsquare (self.ctx, self.size);
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
    }



    Game.prototype.checkCollisions = function () {
        var self = this;
        if (self.player.position.y <= self.firstsquare.size.height - 5) {
           
            self.player = new Player (self.ctx);
        } 
        
    }
      

    Game.prototype.doFrame = function () {
        var self = this;//change everything to self in the methods
        self.checkIfEnded();
        self.checkCollisions();
        self.clearCanvas();
        // self.update();
        self.draw();
        window.requestAnimationFrame(function(){
          if(!self.isEnded){
            self.doFrame();
          } 
          // else if (self.isEnded) {
          //   self.callback();
          // }
        })
    }


    // Game.addEventListener ('keydown', playerMovements) 

