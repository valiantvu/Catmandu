var Taxi = function(){
    this.$node = $('<span class="taxi">TAXI</span>');
    // this.$node = $('<img class="cop" src="giphy.gif">');
    this.step();
    this._timeBetweenSteps = 50;
    this.width = $('body').width();
    this.travel = 1;
};


Taxi.prototype.step = function(){
    this.travel -= 0.005;
    this.setPosition(this.width * this.travel);
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Taxi.prototype.setPosition = function(left){
    var styleSettings = {
        left: left
    };

    this.$node.css(styleSettings);
};