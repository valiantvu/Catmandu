var Van = function(){
    this.$node = $('<span class="van">VAN</span>');
    // this.$node = $('<img class="cop" src="explosion.gif">');
    this.step();
    this._timeBetweenSteps = 100;
    this.width = $('body').width();
    this.travel = 0.005;
};


Van.prototype.step = function(){
    this.travel += 0.005;
    this.setPosition(this.width * this.travel);
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Van.prototype.setPosition = function(left){
    var styleSettings = {
        left: left
    };

    this.$node.css(styleSettings);
};