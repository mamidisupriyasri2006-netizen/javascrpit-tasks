class CoffeeMachine {
  makeCoffee() {
    this.boilWater();
    this.addCoffee();
    console.log("Coffee is ready ");
  }

  boilWater() {
    console.log("Boiling water");
  }

  addCoffee() {
    console.log("Adding coffee powder");
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee();
