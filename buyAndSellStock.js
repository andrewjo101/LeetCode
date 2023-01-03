/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Ex: 
Input: prices = [7,1,5,3,6,4]
Output: 5
*/


let maxProfit = (prices) => {
    //store max, create buying and selling pointers
    let max = 0, l = 0, r = 1;

    //iterate over the array, buying is less than the sell b = s; move over 1, store the max 
    while(r < prices.length){
        if(prices[l] > prices[r]){
            l = r; 
        }
        max = Math.max(max, prices[r] - prices[l]);
        r++;
    }
    return max;
}