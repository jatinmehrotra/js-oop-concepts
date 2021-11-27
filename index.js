const createCirle = (radius) => {
  return {
    radius,
    draw: function () {
      console.log('draw');
      console.log('radius', radius);
    },
  };
};

circle = createCirle(2);
console.log(circle);
circle.draw();
