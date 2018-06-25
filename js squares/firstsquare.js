function Firstsquare (ctx) {
    this.ctx = ctx;
    this.size = {
        width: canvas.width/3,
        height: (canvas.height)*3/8 + 50,
    }

    this.position = {
        x: 0,
        y: 0,
    }
    
}

Firstsquare.prototype.draw = function () {
    var self = this;
    self.ctx.fillStyle = "grey";
    self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}



