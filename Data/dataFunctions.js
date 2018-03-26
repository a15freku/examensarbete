// Creates more data from existing data
function applyOffset(input, quantity) {
  var orgDataLen = input.length;

  // Set how many graphs should be used
  for(var i = 0; i < (quantity - 50); i++) {

    // Create more data
    var src = input[i % orgDataLen];
    var o = new Object();
    o.name = src.name + i;
    o.value = [];
    input[orgDataLen + i] = o;

    // Apply Offset
    for(var j = 0; j < 251; j++) {

      var max = 1.01;
      var min = 0.99;
      var r = Math.random() * (max - min) + min;
      o.value[j] = src.value[j] * r;

    }
  }

  return input;
}

// New Normalize data function
function normalize(input){
  for(var i = 0; i < input.length; i++) {

    var length = input[i].value.length;
    var min = input[i].value[0];
    var max = min;

    for(var j = 1; j < length; j++) {

      var val = input[i].value[j];
      min = Math.min(min, val);
      max = Math.max(max, val);

    }
    var range = max - min;

    var normArray = [];
    for(var k = 0; k < length; k++) {

      normArray.push((input[i].value[k] - min) / range);
      
    }
    input[i].value = normArray;
  }

  return input;
}
