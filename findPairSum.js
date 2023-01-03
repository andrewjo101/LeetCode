function findPair(array, target){
    let left = 0, right = array.length -1;
    pair = null;
    // get the element at each pointer and add to get pairSum
    // if pairSum is less than the target, increment the left pointer, else decrement the right pointer 
    // also if the if the pairSum = to the target, return it, if none adds to target return null
    while(left !== right){
        pairSum = array[left] + array[right]
        if(pairSum === target){
            pair = [array[left], array[right]]
            break;
        }
        else if(pairSum < target){
            left ++
        }else if(pairSum > target){
            right --
        }
    }

        return pair
}

/* test cases 
console.log( findPair([1,2,3,4,5], 7) ) // [2,5]
console.log( findPair([1,6,8,9,10], 14) ) // [6,8]
console.log(findPair([1,3,4,6,8,10], 12)) // [4,8]
console.log(findPair([1,2,3,4,5], 10)) // null
*/

