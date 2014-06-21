var Taxi = function(timeBetweenSteps){
    this.$node = $('<span class="taxi">TAXI</span>');
    this.step();
    this._timeBetweenSteps = timeBetweenSteps;
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