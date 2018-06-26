'use strict'

function Firstsquare (ctx) {
    this.ctx = ctx;
    this.size = {
        width: canvas.width/3,
        height: (canvas.height)*3/8 + 125,
    }

    this.position = {
        x: -100,
        y: -100,
    }
    this.speed = {
        x:0,
        y:0.1,
    }
    
}

Firstsquare.prototype.draw = function () {
    var self = this;
    self.ctx.fillStyle = "grey";
    self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}

Firstsquare.prototype.move = function () {
    var self = this;
    self.position.y += self.speed.y;
}

Firstsquare.prototype.moveStop = function () {
    var self = this;
    self.position.y -= self.speed.y;
}

  


