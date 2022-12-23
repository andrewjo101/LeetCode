/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Ex: 
Input: prices = [7,1,5,3,6,4]
Output: 5
*/


let maxProfit = function(prices){
    //create a variable to store max profit 
    let max = 0;
    //use a two pointer to search for lowest price to buy and highest price to sell 
    let l = 0, r = 1; 
    while (r < prices.length){
        //finds lowest price
        if(prices[l] < prices[r]){
            l = r; 
        }
        //calculate max profit 
        max = Math.max(max, prices[r] - prices[l])
        r++;
    }
    return max;

}