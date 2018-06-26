'use strict'

function Thirdsquare (ctx) {
    this.ctx = ctx;

    this.size = {
        width: 150,
        height: (canvas.height)*5/8,
    }

    this.position = {
        x: (canvas.width/3) + 150,
        y: (canvas.height)*1/8,
    }
    
    this.speed = {
        x:0,
        y:4,
    }

}

Thirdsquare.prototype.draw = function () {
    var self = this;
    self.ctx.fillStyle = "grey";
    self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}



Thirdsquare.prototype.moveUp = function () {
        var self = this;
        self.position.y -= self.speed.y;
    }



