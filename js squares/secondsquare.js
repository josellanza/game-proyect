function Secondsquare (ctx) {
    this.ctx = ctx;
    this.size = {
        width: (canvas.width/3) + 150,
        height: (canvas.height)*4/8,
    }

    this.position = {
        x: 0,
        y: (canvas.height)*4/8,
    }
    
}

Secondsquare.prototype.draw = function () {
    var self = this;
    self.ctx.fillStyle = "grey";
    self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}
