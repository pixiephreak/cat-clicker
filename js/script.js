// console.log("linked");


var clicks = 0;
console.log(clicks);

$('#cat').click(function() {
	clicks +=1;
	$('#counter').text('CAT CLICK:'+clicks);
	// console.log('clicked');

});
