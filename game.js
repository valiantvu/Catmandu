$(function(){
    var Player = function(){this.$node = $('<div class="player">PLAYER</div>');};
    Player.prototype.move = function(step){
        var styleSettings = {left: this.$node.position().left + step};
        this.$node.css(styleSettings);
    };
    var Taxi = function(timeBetweenSteps, speed, position){
        this.$node = $('<div class="taxi">TAXI</div>');
        this.width = $('body').width();
        this._timeBetweenSteps = timeBetweenSteps;
        this._speed = speed;
        this.position = position;
        this.step();
    };
    Taxi.prototype.step = function(){
        this.position += this._speed;
        this.setPosition(this.width * this.position);
        setTimeout(this.step.bind(this), this._timeBetweenSteps);
    };
    Taxi.prototype.setPosition = function(left){
        var styleSettings = {
            left: left
        };
        this.$node.css(styleSettings);
    };
    var Van = function(timeBetweenSteps, speed, position){
        Taxi.call(this, timeBetweenSteps, speed, position);
        this.$node = $('<div class="van">VAN</div>');
    };
    Van.prototype = Object.create(Taxi.prototype);
    Van.prototype.constructor = Van;
    var Cop = function(timeBetweenSteps, speed, position){
        Taxi.call(this, timeBetweenSteps, speed, position);
        this.$node = $('<div class="cop">Cop</div>');
    };
    Cop.prototype = Object.create(Taxi.prototype);
    Cop.prototype.constructor = Cop;
    var cop = new Cop(50, 0.01, 0.2);
    var van = new Van(100, 0.01, 0);
    var taxi = new Taxi(100, -0.01, 1);
    var player = new Player();
    var explosion = $('<img src="explosion.gif" class="explosion">');
    $('body').append(cop.$node, van.$node, taxi.$node, player.$node);
    $('body').append($('<h3>Hit Enter on Cop to alert the po po! Hit Space on Taxi to hitch a ride!</h3>'));
    $('body').keydown(function(e) {
      if(e.keyCode == 37) {
        player.move(-20);
      } else if (e.keyCode == 39) {
        player.move(20);
      } else if (e.keyCode == 32) {
        if( Math.abs(taxi.$node.position().left - player.$node.position().left ) < 30){
            $('body').append($('<h1 class="ride">HIDE IN TAXI!</h1>'));
            player.$node.remove();
            clearInterval(intervalID);
        }
      } else if (e.keyCode == 13) {
        if((player.$node.position().left - cop.$node.position().left) < 30){
            $('body').children().remove();
            $('body').append($('<h1 class="popo">THE PO PO!!</h1>'));
            clearInterval(intervalID);
        }
      }
    });
    var intervalID = setInterval( function(){
        if((player.$node.position().left - van.$node.position().left) < 10){
            $('body').children().remove();
            $('body').append($('<h1 class="dead">DEAD!</h1>'));
            $('body').append(explosion);
            clearInterval(intervalID);
        }
    }, 10);
});