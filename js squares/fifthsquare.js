'use strict'

function Fifthsquare (ctx) {
    this.ctx = ctx;
    this.size = {
        width: canvas.width/3,
        height: (canvas.height)*1/8,
    }

    this.position = {
        x: 1,
        y: (canvas.height)*6/8,
    }
    this.speed = {
        x:4,
        y:0,
    }
    
}

Fifthsquare.prototype.draw = function () {
    var self = this;
    self.ctx.fillStyle = "grey";
    self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}

Fifthsquare.prototype.moveRight = function () {
    var self = this;
    self.position.x += self.speed.x;
}
