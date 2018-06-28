'use strict'

function Square (ctx, x, y, width, height, speedX, speedY, active, avoidSquares, avoidCanvas) {

    this.ctx = ctx;
    this.size = {
        width: width,
        height: height,
    }

    this.position = {
        x: x,
        y: y,
    }
    
    this.speed = {
        x: speedX,
        y: speedY,
    }
    
    this.active = active;

    this.avoidSquares = avoidSquares;
    this.avoidCanvas = avoidCanvas
    this.image = new Image(); 
    this.image.src = 'https://files.slack.com/files-pri/T02CQ4EN4-FBEUJ7JDN/rock-jose_copia2.png';
}




Square.prototype.draw = function () {
    var self = this;
    self.ctx.drawImage(self.image, self.position.x, self.position.y, self.size.width, self.size.height);
    self.ctx.fillStyle = 'rgb(145, 93, 42)';
    // self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}



Square.prototype.move = function () {
    var self  = this;

    if (self.active) {
        self.moveY ();
        self.moveX ();
    }
}
Square.prototype.moveY = function () {
    var self = this
    self.position.y += self.speed.y;

}


Square.prototype.moveX = function () {
    var self = this
    self.position.x += self.speed.x;
}
