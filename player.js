var Player = function(){
    this.$node = $('<span class="player">PLAYER</span>');
    // this.$node = $('<img class="cop" src="mouse.gif">');
    this._timeBetweenSteps = 50;
};

Player.prototype.ride = function(){
    this.$node.remove();
};


Player.prototype.left = function(){
    var position = this.$node.position().left;
    var styleSettings = {
        left: position - 20
    };

    this.$node.css(styleSettings);
};

Player.prototype.right = function(){
    var position = this.$node.position().left;
    var styleSettings = {
        left: position + 20
    };

    this.$node.css(styleSettings);
};
