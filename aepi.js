// ✅ ABSTRACTION (Abstract Class Concept)
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Abstract Method (must be overridden)
  makeSound() {
    throw new Error("makeSound() must be implemented by subclass");
  }
}

// ✅ INHERITANCE (Dog inherits Animal)
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calling parent constructor
    this.breed = breed;
  }

  // ✅ POLYMORPHISM (Overriding method)
  makeSound() {
    console.log(`${this.name} says: Woof Woof!`);
  }
}

// ✅ INHERITANCE (Cat inherits Animal)
class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  // ✅ POLYMORPHISM (Overriding method)
  makeSound() {
    console.log(`${this.name} says: Meow Meow!`);
  }
}

// ✅ ENCAPSULATION (Private Property Example)
class BankAccount {
  #balance = 0; // private variable

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ₹${amount}`);
  }

  getBalance() {
    console.log(`Current Balance: ₹${this.#balance}`);
  }
}

// ✅ Object Creation
let dog1 = new Dog("Buddy", "Labrador");
let cat1 = new Cat("Kitty", "White");

dog1.makeSound(); // Woof Woof
cat1.makeSound(); // Meow Meow

// ✅ Polymorphism in Action
let animals = [dog1, cat1];

animals.forEach(animal => animal.makeSound());

// ✅ Encapsulation Example
let account = new BankAccount();
account.deposit(500);
account.getBalance();
