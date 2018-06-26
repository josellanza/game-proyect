'use strict'

function Seventhsquare (ctx, canvas, x) {

    this.ctx = ctx;
    this.size = {
        width: 10,
        height: (canvas.height)*7/8,
    }

    this.position = {
        x: x,
        y: 0,
    }
    
    this.speed = {
        x:0,
        y:2,
    }
}

Seventhsquare.prototype.draw = function () {
    var self = this;
    self.ctx.fillStyle = "grey";
    self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}


Seventhsquare.prototype.moveDown = function () {
    var self = this;
    self.position.y += self.speed.y;
}
