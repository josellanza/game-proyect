'use strict'

function Player (ctx) {
    this.ctx = ctx;
    this.size = {
        width: 75,
        height: 50,
    }

    this.position = {
        x: 20,
        y: canvas.height/2 -110,
    }
    this.speed = 5;
    this.lives = 1;
    this.image = new Image(); 
    this.image.src = 'https://i.pinimg.com/originals/20/63/9c/20639ca30d96bf3ed227f88b3ea26569.png';
}

// We set the position, the size and the color of the player

Player.prototype.draw = function () {
    var self = this;
    self.ctx.drawImage(self.image, self.position.x, self.position.y, self.size.width, self.size.height);
    // self.ctx.fillStyle = "red";
    // self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}

// We set the movements of the player

Player.prototype.moveUp = function () {
    var self = this;
    self.position.y -= self.speed;
}

Player.prototype.moveDown = function () {
    var self = this;
    self.position.y += self.speed;
}

Player.prototype.moveLeft = function () {
    var self = this;
    self.position.x -= self.speed;
}

Player.prototype.moveRight = function () {
    var self = this;
    self.position.x += self.speed;
}

