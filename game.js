$(function(){
    var height = $('body').height();
    var width = $('body').width();

    var cop = new Cop();
    var van = new Van();
    var taxi = new Taxi();
    var player = new Player();
    var dead = $('<h1 class="dead">DEAD!</h1>');
    var ride = $('<h1 class="ride">HIDE IN TAXI!</h1>');
    var coppers = $('<h1 class="popo">THE PO PO!!</h1>');
    var explosion = $('<img src="explosion.gif" class="explosion">');

    $('body').append(cop.$node, van.$node, taxi.$node, player.$node);

    $('body').keydown(function(e) {
      if(e.keyCode == 37) {
        player.left();
      } else if (e.keyCode == 39) {
        player.right();
      } else if (e.keyCode == 32) {

        if( Math.abs(taxi.$node.position().left - player.$node.position().left ) < 30){
            $('body').append(ride);
            player.$node.remove();
        }
      } else if (e.keyCode == 13) {
        if((player.$node.position().left - cop.$node.position().left) < 10){
            $('body').append(coppers);
            $('body').append(explosion);
        }
      }
    });


    setInterval( function(){
        if((player.$node.position().left - van.$node.position().left) < 10){
            $('body').append(dead);
            $('body').append(explosion);
        }
    }, 10);

});