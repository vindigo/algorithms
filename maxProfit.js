function maxProfit(pricesArr){
    var maxProfit = -1,
        buyPrice = 0,
        sellPrice = 0,
        changeBuyPrice = true;

    for (var i = 0; i < pricesArr.length; i++){
        if (changeBuyPrice) { 
            buyPrice = pricesArr[i]; 
        };
        sellPrice = pricesArr[i + 1];

        if (sellPrice < buyPrice){
            changeBuyPrice = true;
        } else {
            var tempProfit = sellPrice - buyPrice;
            if ( tempProfit > maxProfit){
                maxProfit = tempProfit;
            }
            changeBuyPrice = false;
        }
    }
    
    return maxProfit;
}

var arr = [32, 46, 26, 38, 40, 48, 42];

console.log( maxProfit(arr) );

// 22