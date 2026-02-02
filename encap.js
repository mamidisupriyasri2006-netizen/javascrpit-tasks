class BankAccount {
  #balance; // private field

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Alex", 1000);

account.deposit(500);
console.log(account.getBalance()); // 1500

// ❌ Not accessible
// console.log(account.#balance);
