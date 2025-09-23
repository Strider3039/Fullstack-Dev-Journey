// Objects
// key-value pairs in curly braces
// const myObj = { name: "Dave" };

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    }
};

console.log(anotherObj.action());

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrroooom!";
    }
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);      // inheritance
console.log(truck.engine());
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () { return "Whoooosh!"};     // overridden function
console.log(car.engine());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}

// destructuring object into individual elems
const {vocals, guitar, bass, drums} = band;

// deleting obj elem
delete band.drums;
console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(`On ${job}, its ${band[job]}`);
}