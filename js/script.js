var cat1 = "https://placebear.com/100/100";
var cat2 = "https://placebear.com/200/200";
var cat3 = "https://placebear.com/300/300";
var cat4 = "https://placebear.com/400/400";
var cat5 = "https://placebear.com/500/500";


var cats = [cat1,cat2,cat3,cat4,cat5];

var clicks = function createVariables(){
  var counts = [];

  for (var i = 0; i <= 20; ++i) {
      counts[i] = 0;
  }

  return counts;
}();

console.log(clicks);

// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var cat = cats[i];
    console.log(cat);

    // We're creating a DOM element for the pic and counter
    var pic = document.createElement('div');
    var img = `<img alt="bear${(i+1)}" src="${cat}"/>`;
    console.log(img);

    $(pic).prepend(img);

    var h1 = '<h1 id="counter'+[i+1]+'"'+'>'+'</h1>';
    $(pic).prepend(h1);

    // ... and when we click, increment click num
    //TO-DO add IF
    pic.addEventListener('click', (function() {
        clicks[i]+=1;
        $('#counter'+[i]).text("BEAR COUNT:"+clicks[i]);
    }));

    // finally, let's add this element to the document
    document.body.appendChild(pic);

};




