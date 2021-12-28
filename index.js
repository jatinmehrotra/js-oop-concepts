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
circ;

// behind the scenes of creating function
// const CIrcle1 = new Function(
//   'radius',
//   `
// this.radius = radius;
//   this.draw = function () {
//     console.log('draw with constructor');
//     console.log('radius', radius);
//   };
// `
// );
// const cirlce = new CIrcle1(5);

// Circle.call({},1)
// Circle.call(window,1)
// Circle.apply({},[1,2,3])
