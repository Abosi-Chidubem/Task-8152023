let arrays = [1,2,3,4,5,6,7,8,9,10]

let sum= 0;
for(a= 0; a< arrays.length; a++){
sum= sum + arrays[a];
}

console.log(sum)


// Using loops to return total sum of numbers in an array
// let array= [1,2,3,4,5,6,7,8,9,10];

// // const totalNumbersOfInArray = () =>{     (arrow function)
// function totalNumbersOfInArray (){          /* (regular function)  */
//     let numbers= 0;
//     for (let i= 0; i< array.length; i++) {
//         // numbers = numbers + array[i];
//         numbers += array[i];
//     }
//     return numbers;
// }

// const totalSumOfArray = totalNumbersOfInArray(array);
// console.log(totalSumOfArray)