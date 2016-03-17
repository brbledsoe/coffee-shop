var coffeeShop = {
  money: 100,

  beans: {
    amount: 40,
    cost: 2
  },

  drinkRequirements: {
    latte: {
      cost: 10,
      beanRequirement: 5
    },

    americano: {
      cost: 5,
      beanRequirement: 2
    },

    doubleShot: {
      cost: 15,
      beanRequirement: 7
    },

    frenchPress: {
      cost: 12,
      beanRequirement: 6
    }

  },

  buyDrink: function (drink) {
    if (this.makeDrink(drink)) {
   this.money += this.drinkRequirements[drink].cost;
   this.makeDrink(drink);
    }
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType] && (this.beans.amount - this.drinkRequirements[drinkType].cost) < 0) {
        alert("Sorry, we're all out of beans!");
        return false;   
    }else if (this.drinkRequirements[drinkType]) {
        this.beans.amount -= this.drinkRequirements[drinkType];
        console.log(this.beans.amount);
        return true;
    }else{
        alert("Sorry, we don't make " + drinkType);
        return false;
      }
  },

  buySupplies: function (beans_to_purchase) {
   if (this.money < (beans_to_purchase * this.beans.cost)) {
        alert("You don't have enough money to make this purchase");
   }else{
      this.beans.amount += beans_to_purchase;
      this.money -= (beans_to_purchase * this.beans.cost);
      alert("You now have " + coffeeShop.money + " in your money property.");
    }
    
  }

};

// console.log(coffeeShop.drinkRequirements.latte);
console.log("First you have " + coffeeShop.money);

coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
// coffeeShop.buyDrink("doubleShot");
// coffeeShop.buySupplies(5);
// coffeeShop.buyDrink("frenchPress");
// alert("You now have " + coffeeShop.beans.amount + " beans");

// console.log("Now you have " + coffeeShop.money);






