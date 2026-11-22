class Account{
    constructor(name, accNo, balance){
        this.name = name
        this.account_number = accNo
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        if(amount>this.balance){
            console.log("Insufficient balance")
        }else {
            this.balance -=amount
        }
    }

    printDetails() {
        console.log(`${this.name} ${this.account_number} USD ${this.balance}`)
    }
}

let acc1 = new Account("Jane", "671", "13000")
let acc2 = new Account("Victor", "456", "12700")
acc1.deposit(67000)
acc1.printDetails()
acc1.withdraw(450)
acc1.printDetails()