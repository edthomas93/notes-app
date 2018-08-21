function expect(actual){
  function toEqual(expected){
    if(expected != actual){
      throw new Error(`Test failed: expected ${actual} to equal ${expected}`)
    }
  };
  function toBe(expected){          //toBe is more exact than toEqual, to equal has no type conversion
    if(expected !== actual){
      throw new Error(`Test failed: expected ${actual} to equal ${expected}`)
    }
  };
  return {
    toEqual,
    toBe
  };
  // function toThrowError(message){
  // }
};

function it(description, callBack){
  console.log(description);
  try {
    callBack();
    console.log("test passes");
  } catch(error){
    console.log(error.message)
  };
};

function describe(description, callBack){
  console.log(description);
  callBack();
};
