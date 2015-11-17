$(function(){
	/*random number function*/
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}
/*Customer total cash available*/
	var totalCash = 10000;
/*Variables for current price of fruits*/
	var applesPrice = 300;
	var bananasPrice = 300;
	var orangesPrice = 300;
	var grapesPrice = 300;

	var totalCashApples =0;
	var avgApplesPrice=0;
	var countApples=0;

	var totalCashOranges =0;
	var avgOrangesPrice=0;
	var countOranges=0;

	var totalCashBananas =0;
	var avgBananasPrice=0;
	var countBananas=0;

	var totalCashGrapes =0;
	var avgGrapesPrice=0;
	var countGrapes=0;


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
		bananasPrice = priceCheck(updateFruit(bananasPrice));
		orangesPrice = priceCheck(updateFruit(orangesPrice));
		grapesPrice = priceCheck(updateFruit(grapesPrice));
		$('p.apples').text('Current Price = $' + (applesPrice / 100).toFixed(2));
		$('p.oranges').text('Current Price = $' + (orangesPrice / 100).toFixed(2));
		$('p.bananas').text('Current Price = $' + (bananasPrice / 100).toFixed(2));
		$('p.grapes').text('Current Price = $' + (grapesPrice / 100).toFixed(2));

		/*console.log(apples/100);
		console.log(bananas/100);
		console.log(oranges/100);
		console.log(grapes/100);*/

	}, 15000);

	/*purchases apple, removes money from current cash*/
	$('.buyApple').on('click', function(){
		if(totalCash - applesPrice < 0){
			alert('NO FRUIT LOSER!');
		} else
		{
			totalCash -= applesPrice;
			/* increases apple count */
			countApples ++;
			/* total cash spent on apples */
			totalCashApples += applesPrice;
			/* setting average price of purchased apples */
			avgApplesPrice = (totalCashApples/countApples);
			/* Updates total cash available after every click*/
			$('span').text((totalCash / 100).toFixed(2));
			/*Updates average apple price after every click*/
			$('.avgApplesPrice').text("Average Price $" + (avgApplesPrice/ 100).toFixed(2));
			/*Updates number of apples purchased*/
			$('.applesCount').text("Apple Count: " + countApples);
		}
	});
	/*purchases orange, removes money from current cash*/
	$('.buyOrange').on('click', function(){
		if(totalCash - orangesPrice < 0) {
			alert('NO FRUIT LOSER!');
		} else
		{
			totalCash -= orangesPrice;
			/* increases apple count */
			countOranges ++;
			/* total cash spent on apples */
			totalCashOranges += orangesPrice;
			/* setting average price of purchased apples */
			avgOrangesPrice = (totalCashOranges/countOranges);
			/* Updates total cash available after every click*/
			$('span').text((totalCash / 100).toFixed(2));
			/*Updates average apple price after every click*/
			$('.avgOrangesPrice').text("Average Price $" + (avgOrangesPrice/ 100).toFixed(2));
			/*Updates number of apples purchased*/
			$('.orangesCount').text("Orange Count: " + countOranges);
		}
	});
	/*purchases banana, removes money from current cash*/
	$('.buyBanana').on('click', function(){
		if(totalCash - bananasPrice < 0) {
			alert('NO FRUIT LOSER!');
		} else 
		{
			totalCash -= bananasPrice;
			/* increases apple count */
			countBananas ++;
			/* total cash spent on apples */
			totalCashBananas += bananasPrice;
			/* setting average price of purchased apples */
			avgBananasPrice = (totalCashBananas/countBananas);
			/* Updates total cash available after every click*/
			$('span').text((totalCash / 100).toFixed(2));
			/*Updates average apple price after every click*/
			$('.avgBananasPrice').text("Average Price $" + (avgBananasPrice/ 100).toFixed(2));
			/*Updates number of apples purchased*/
			$('.bananasCount').text("Banana Count: " + countBananas);
		}

	});
	/*purchases grapes, removes money from current cash*/
	$('.buyGrapes').on('click', function(){
		if(totalCash - grapesPrice < 0) {
			alert('NO FRUIT LOSER!');
		} else
		 {
			totalCash -= grapesPrice;
			/* increases apple count */
			countGrapes ++;
			/* total cash spent on apples */
			totalCashGrapes += grapesPrice;
			/* setting average price of purchased apples */
			avgGrapesPrice = (totalCashGrapes/countGrapes);
			/* Updates total cash available after every click*/
			$('span').text((totalCash / 100).toFixed(2));
			/*Updates average apple price after every click*/
			$('.avgGrapesPrice').text("Average Price $" + (avgGrapesPrice/ 100).toFixed(2));
			/*Updates number of apples purchased*/
			$('.grapesCount').text("Grapes Count: " + countGrapes);
		}
	});
	
}); 

