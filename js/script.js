// console.log("linked");
var cat1 = "kitty";
var cat2 = "cat";

$(function() {
    $( "#cat1" ).text(cat1);
  });
$(function() {
    $( "#cat2" ).text(cat2);
  });

var clicks = 0;
console.log(clicks);

$('.cat').click(function() {
	clicks +=1;
	$('#counter').text('CAT CLICK:'+clicks);
	// console.log('clicked');

});
