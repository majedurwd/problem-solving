/**
 * Find the smallest and largest number in the array 
 * let exampleArray = [4, -76, 56, 3,7, -5, 9, -8, 90, 98, 67 ,45, -65, 32, -13, 5, 4, 6, -7,]
*/
function findLowerAndLargNumOfArr(arr = []) {
    // define a lower variable
    let lower = arr[0]

    // define a higher variable
    let higher = arr[0]

    // iterate the whole array
    for (let i = 0; i < arr.length; i++){
        // let's check is there has any error
        if (typeof arr[i] !== "number") {
            console.log(`There has Error index is: ${i}`);
            continue
        }
        
        // conditionaly check lower number
        if (lower > arr[i]) {
            lower = arr[i]
        }

        // conditionaly check bigger number
        if (higher < arr[i]) {
            higher = arr[i]
        }
    }

    // return our lower and higher variable
    return {lower, higher}
}

const result1 = findLowerAndLargNumOfArr([ -111, 4, 3, 7, 6, 9, "majed", 6, 8, 7, false, 6, -76, 56, "error", 43, 23, 1, 3, 4, true, 57, 6])
console.log(result1);


