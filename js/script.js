var model = {
  //is it neccessary to define it here?
  currentBear: null,
  bears:[
    {
      name: 'bear1',
      imgSrc: "https://placebear.com/100/100",
      clickCount: 0
    },
    {
      name: 'bear2',
      imgSrc: "https://placebear.com/200/200",
      clickCount: 0
    },
    {
      name: 'bear3',
      imgSrc: "https://placebear.com/300/300",
      clickCount: 0
    },
    {
      name: 'bear4',
      imgSrc: "https://placebear.com/400/400",
      clickCount: 0
    },
    {
      name: 'bear5',
      imgSrc: "https://placebear.com/500/500",
      clickCount: 0
    }
  ]
};

var controller = {
  init: function(){
    model.currentBear = model.bears[0];

    bearListView.init();
    bearView.init();
  },

  getCurrentBear: function(){
    return model.currentBear;
  },
  getBears: function(){
    return model.bears;
  },
  //set cat to the one clicked
  setCurrentBear: function(bear){
    model.currentBear = bear;
  },
  incrementCounter: function(){
    model.currentBear.clickCount++;
    bearView.render();
  }

};

var bearView ={
  init: function(){
    this.bearElem = document.getElementById('bear');
    this.bearNameElem = document.getElementById('bear-name');
    this.bearImageElem = document.getElementById('bear-img');
    this.countElem = document.getElementById('bear-count');

    this.bearImageElem.addEventListener('click', function(){
      controller.incrementCounter();
    });

    this.render();
  },

  render: function(){
    var currentBear = controller.getCurrentBear();
    this.countElem.textContent = currentBear.clickCount;
    this.bearNameElem.textContent = currentBear.name;
    this.bearImageElem.src = currentBear.imgSrc;

  }

};

var bearListView = {
  init:function(){
    this.bearListElem= document.getElementById('bear-list');

    this.render();
  },

  render: function(){
    var bear, elem, i;
    var bears = controller.getBears();

    this.bearListElem.innerHTML = '';

    for(i=0; i< bears.length; i++){
      bear = bears[i];

      elem = document.createElement('li');
      elem.textContent = bear.name;

      elem.addEventListener('click',(function(bearCopy){
        return function(){
          controller.setCurrentBear(bearCopy);
          bearView.render();
        };
      })(bear));

      this.bearListElem.appendChild(elem);

    }
  }
};

controller.init();
/* my crappy broken spaghetti code


var cats = [cat1,cat2,cat3,cat4,cat5];

var clicks = function createVariables(){
  var counts = [];

  for (var i = 0; i <= cats.length; ++i) {
      counts[i] = 0;
  }

  return counts;
}();
console.log(clicks);

// We're creating a DOM element for the pic and counter
var pic = document.createElement('div');



// Let's loop over the numbers in our array
for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var cat = cats[i];
    console.log(cat);

    var img = `<img alt="bear${(i+1)}" src="${cat}"/>`;
    console.log(img);
    var link = `<button> cat ${i+1} </button>`;
    $(pic).append(link);

    var h1 = '<h1 id="counter'+[i+1]+'"'+'>'+'</h1>';
    $(pic).append(h1);

     // ... and when we click, increment click num
    pic.addEventListener('click', (function(clickCopy) {

        console.log("clickCopy:"+ clickCopy);
        clicks[clickCopy]+=1;
        // console.log(clicks);
        $('#counter'+[i]).text("BEAR COUNT:"+clicks[clickCopy]);
        $(pic).prepend(img);

    })(clicks[i]));

    // finally, let's add this element to the document
    document.body.appendChild(pic);

};

//display area just change src attr
//write with numbers
//write with <p> change
//move on to cat clicker

// // clear the screen for testing
// document.body.innerHTML = '';

// var nums = [1,2,3];

// // Let's loop over the numbers in our array
// for (var i = 0; i < nums.length; i++) {

//     // This is the number we're on...
//     var num = nums[i];

//     // We're creating a DOM element for the number
//     var elem = document.createElement('div');
//     elem.textContent = num;

//     // ... and when we click, alert the value of `num`
//     elem.addEventListener('click', (function(numCopy) {
           // console.log(numCopy);
//         return function() {
//             alert(numCopy);
//         };
//     })(num));

//     document.body.appendChild(elem);
// };
 */

