describe("basic maths", function(){
  it('2 equals 3', function(){
    expect(2).toBe(3);
  });
  it('6 equals 6', function(){
    expect(6).toEqual(6);
  });
  it('7 is divisible by 5'), function(){
    remainder = 7%5;
    expect(remainder).toEqual(0);
  }
});
