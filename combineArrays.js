// Given two sorted integer arrays, return an array that combines both of them and is also sorted.


var combine = function(arr1, arr2) {
    let ans =[]

    let i = 0, j =0;

    while( i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            ans.push(arr1[i]);
            i++;
        }else{
            ans.push(arr2[j]);
            j++
        }
    }
    // make sure to exhaust both arrays // 
    while (i < arr1.length) {
        ans.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        ans.push(arr2[j]);
        j++;
    }
    
    return(ans);
}

//time complexity O(n)
