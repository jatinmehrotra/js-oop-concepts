//factory function
const createCirle = (radius) => {
  return {
    radius,
    draw: function () {
      console.log('draw');
      console.log('radius', radius);
    },
  };
};

const circle = createCirle(2);
console.log(circle);
circle.draw();

// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw with constructor');
    console.log('radius', radius);
  };
}

const circle2 = new Circle(4);
console.log(circle2);
circle2.draw();
