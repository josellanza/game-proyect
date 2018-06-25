function Thirthsquare (ctx) {
    this.ctx = ctx;
    this.size = {
        width: 150,
        height: (canvas.height)*7/8,
    }

    this.position = {
        x: (canvas.width/3) + 150,
        y: (canvas.height)*1/8,
    }
    
}

Thirthsquare.prototype.draw = function () {
    var self = this;
    self.ctx.fillStyle = "grey";
    self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}
