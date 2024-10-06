function mangoDiscount(price, quantity, month) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var mangoSeason = [3, 4, 5, 6]; // Mango season: April to July
    var discountPercentage = 0;
    
    for (var i = 0; i < months.length; i++) {
      if (month === months[i]) {
        var currentMonth = i + 1;
        if (mangoSeason.includes(currentMonth)) {
          discountPercentage = 50;
        }
      }
    }
    
    if (discountPercentage > 0) {
      var discountAmount = (price * quantity * discountPercentage) / 100;
      var discountPrice = (price * quantity) - discountAmount;
      console.log("Total Price: ", price * quantity);
      console.log("Discount Percentage: ", discountPercentage + "%");
      console.log("Discount Price: ", discountPrice);
    } else {
      console.log("No discount available for this month.");
    }
  }
  
  // Function call
  mangoDiscount(100, 5, "May");






  
  
  
  