var Character = function(){
    this.$node = $('<span class="character">character</span>');
    this.step();
    this._timeBetweenSteps = 50;
    this.width = $('body').width();
    this.travel = 0.005;
};

Character.prototype.step = function(){
    this.travel += 0.005;
    this.setPosition(this.width * this.travel);
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Character.prototype.setPosition = function(left){
    var styleSettings = {
        left: left
    };

    this.$node.css(styleSettings);
};