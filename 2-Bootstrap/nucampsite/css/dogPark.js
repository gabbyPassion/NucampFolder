//Dog park
//DOgs
//Register dogs
//List Dogs
//
// Dog class constructor with name breed and email
//Park class constructor with name location and dogArray[]
//Register Dogs
//Check for name and emails (validation)
//check if the dog already exist in the park
//add the dog to the park
//list the dogs

class Dog {
    constructor(name, breed, email) {
    this.name = name;
    this.breed = breed;
    this.email = email;

}
}

//park class constructor
class DogPark {
    constructor(name, location, dogs = []) {
    this.name = name;
    this.location = location;
    this.dogs = dogs;

}

//registration
registerDog(dogToRegister) {
if (!dogToRegister.name || !dogToRegister.email) {
    console.log("Invalid name or email");
    return false;
}

for (const d of this.dogs) {
    if (d.email === dogToRegister.email) {
        console.log(`This email address, ${dogToRegister} is already registered`)
    }
    return false;
}
    this.dogs.push(dogToRegister);
    console.log(`Registered ${dogToRegister.name}!`);
    return true;
}
listDogs() {
    for(const d of this.dogs) {
        console.log(`Name: ${d.name}, Email: ${d.email}`);
    }
    if (this.dogs.length === 0) {
        console.log(`No dogs registered to ${this.name}!`);
    }
}
}
