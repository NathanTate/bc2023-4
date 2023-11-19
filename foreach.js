array = [2 , 4, 5, 1, 9]
  
  Array.prototype.myForEach = function(callback) {
    for(let i = 0; i < this.length; i++) 
    {
      callback(this[i]);
    }
  };

  Object.defineProperty(Array.prototype, 'myForEach1', {
    value: function(callback) {
      for(let i=0; i< this.length; i++) {
        callback(this[i]);
      }
    }
  });

  function myForEach2(array, callback) {
    for(let i =0; i < array.length; i++)
    {
      callback(array[i]);
    }
  };

  const arrayOfObjects = [{text: 'sometext', value: 546}, {text: 'hmSmthNew', value: 48446}];

  const result = {
    data: {
      indicators: []
    }
  }

myForEach2(array, (element) => {
    console.log(element)
  });

array.myForEach((element) => console.log(element + element + '!'));

arrayOfObjects.myForEach1((element) => {
  result.data.indicators.push(element);
});

console.log(result.data.indicators[1]);

