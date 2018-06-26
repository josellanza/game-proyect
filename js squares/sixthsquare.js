'use strict'

function Sixthsquare (ctx) {

    this.ctx = ctx;
    this.size = {
        width: canvas.width - (canvas.width/3) + 420 + 150,
        height: (canvas.height)*7/8,
    }

    this.position = {
        x: (canvas.width/3) + 420 + 150,
        y: 0,
    }
    this.speed = {
        x:0,
        y:0,
    }
}

Sixthsquare.prototype.draw = function () {
    var self = this;
    self.ctx.fillStyle = "grey";
    self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}


// Fourthsquare.prototype.moveDown = function () {
//     var self = this;
//     self.position.y += self.speed.y;
// }
