//---------------
// reference type
//---------------
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// object1 === object2 -> true
// object1 === object3 -> false

// ----------------
// context vs scope
//-----------------
//this refers to the object is inside of
function a() {
  console.log(this);
}
a(); // Window

const obj4 = {
  a: function() {
    console.log(this);
  }
};
obj4.a(); // {a: ƒ}

// ----------------
// instantiation
//-----------------
class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`hi, i am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WEEE I am a ${this.type}`);
  }
}

const wizard1 = new Wizard("john", "Healer");
const wizard2 = new Wizard("Shawn", "Dark magic");
