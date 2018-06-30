'use strict'

// We build the constructor of the player and we define his properties

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
    this.image.src = 'images/player1.png';
}

// We build the methods of the constructor (draw and move)

Player.prototype.draw = function () {
    var self = this;
    self.ctx.drawImage(self.image, self.position.x, self.position.y, self.size.width, self.size.height);
    // self.ctx.fillStyle = "red";
    // self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}

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

