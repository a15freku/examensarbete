function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Create seed
var randomSeed = [];
var seedLength = 30;

function makeSeed() {
  for(var i = 0; i < seedLength; i++){
    var r = getRandomInt(20);
    randomSeed.push(r);  
  }
  console.log(randomSeed);
}

// Print out random seed
function getSeed() {
  for(var i = 0; i < seedLength; i++){
      var ele = randomSeed[i];  
      console.log(ele);
  }
  return ele;
}
