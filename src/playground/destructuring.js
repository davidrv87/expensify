//
// OBJECT DESTRUCTURING
//
const person = {
    name: 'David',
    age: 30,
    location: {
        city: 'Auckland',
        temp: 22
    }
};

// Default objProperty = defaultValue
const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age} year(s) old`);

// Rename using objProperty: newName
const { city, temp: temperature } = person.location;
console.log(`It is ${temperature} Celsius in ${city}`);

//
// ARRAY DESTRUCTURING
//
const address = ['76 Wakefield Street', 'Auckland', '1010', 'New Zealand'];

// We can skip some values but we need to leave the comma
// Set default using item = defaultValue
const [, arrayCity, , country = 'Default Country'] = address;
console.log(`You are in ${arrayCity} ${country}`);

