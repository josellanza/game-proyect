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
    
    this.speed = {
        x:0,
        y:4,
    }

}

Thirthsquare.prototype.draw = function () {
    var self = this;
    self.ctx.fillStyle = "grey";
    self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height)
}



Thirthsquare.prototype.moveUp = function () {
        var self = this;
        self.position.y -= self.speed.y;
    }
Thirthsquare.prototype.moveDown = function () {
    var self = this;
    self.position.y += (self.speed.y)*2;
}


 // function que se llame move
 // si posiscion de y llega al top +=
 // else si la posicion de y llega bottom -=

//  Thirthsquare.prototype.moveChange = function () {
//     var self = this;
//    console.log("SFVSFSFVSFCF")
//     // if (self.position.y = 0) {
//     //     console.log(self.position.y);
//     //     self.position.y = self.position.y + 4;
//     //     console.log(self.position.y);
//     // }
//     //  else if (self.position.y = 300) {
//     //     self.position.y -= self.speed.y;
//     // }
//  }

// Thirthsquare.prototype.moveUp = function () {
//     var self = this;
//     self.position.y -= self.speed.y;
//     if (self.position.y = 0) {
//         self.moveChange();
//     }
// }


// Thirthsquare.prototype.moveStop = function () {
//     var self = this;
//     self.position.y -= (self.speed.y);
// }





