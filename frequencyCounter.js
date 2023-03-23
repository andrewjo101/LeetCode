//write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same. 
//input: same([1,2,3], [4,1,9]) output: true
//input: same([1,2,3], [1,9]) output: false
//input: same([1,2,1], [4,4,1]) output: false (must be same frequency)

function same(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    //loop through the first array and create an object to set a key for the number and value for frequency
    // do the same for the second arr
    // third loop to see if the first key squared matches second key in the second array
    // check if the frequency is same too 
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 
    }

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
\