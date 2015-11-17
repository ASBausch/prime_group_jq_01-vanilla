$(function(){
	/*random number function*/
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}
/*Customer total cash available*/
	var totalCash = 100;
/*Variables for current price of fruits*/
	var applesPrice = 300;
	var bananas = 300;
	var oranges = 300;
	var grapes = 300;

	var bananas = 300;
	var oranges = 300;
	var grapes = 300;

	var totalCashApples =0;
	var avgApplePrice=0;
	var countApple=0;

	var totalOrange =0;
	var avgOrange=0;
	var countOrange=0;


/*Interval function for updating the price of Apples*/
	setInterval( function() {
		
		function updateFruit (fruit) {
			/* boolean for true or false add or subtract*/
			var addSubtract = randomNumber(1,2); 
			/*value to be added or subtracted*/
			var priceChange = randomNumber(1,50);
			/*function to update price of fruit*/
			if (addSubtract === 1) {
				/*Taking priceChange and making it into cents by dividing by 100*/
				return fruit+priceChange;
			} else {
				return fruit-priceChange;
			}
		}
		/*Function to insure max price 9.99 and min of .50*/
		function priceCheck (price)  {
			if (price > 999) {
				return 999;
			} else if (price < 50) {
				return 50;
			} else {
				return price;
			}
		}	
		/*calls function and sets value of apples*/
		applesPrice = priceCheck(updateFruit(applesPrice));
		bananas = priceCheck(updateFruit(bananas));
		oranges = priceCheck(updateFruit(oranges));
		grapes = priceCheck(updateFruit(grapes));

		/*console.log(apples/100);
		console.log(bananas/100);
		console.log(oranges/100);
		console.log(grapes/100);*/

	}, 1500);

	/*purchases apple, removes money from current cash*/
	$('.buyApple').on('click', function(){
		totalCash -= applesPrice;
		/* increases apple count */
		countApple ++;
		/* total cash spent on apples */
		totalCashApples += applesPrice;
		/* setting average price of purchased apples */
		avgApplePrice = (totalCashApples/countApple);
		console.log(totalCashApples, avgApplePrice, countApple);
	});

	
	
	
}); 

