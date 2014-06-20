var Cop = function(){
    this.$node = $('<span class="cop">COP</span>');
    // this.$node = $('<img class="cop" src="dog.gif">');
    this.step();
    this._timeBetweenSteps = 50;
    this.width = $('body').width();
    this.travel = 0.005;
};


Cop.prototype.step = function(){
    this.travel += 0.005;
    this.setPosition(this.width * this.travel);
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Cop.prototype.setPosition = function(left){
    var styleSettings = {
        left: left
    };

    this.$node.css(styleSettings);
};