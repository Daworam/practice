// const array = [1,2,3,4,5,6,7,8,9];
// const squareArray = [];

// function sortedSquaredArray(array) {
//   for(let i = 0; i < array.length; i++){
//     const number = array[i];
//     squareNum = number * number;
//     squareArray.push(squareNum);
//   }
//   return squareArray.sort();
// }

// console.log(array)
// console.log(sortedSquaredArray(array));
// -------------------------------------------------------------------------
// function wordSearch(query, seq){
//   const result = [];
//   const lQuery = query.toLowerCase();

//   seq.forEach((item)=>{
//     const lItem = item.toLowerCase();
    
//     if(lItem.includes(lQuery)){
//       result.push(item);
//     }
//     if(result.length === 0){
//     result.push("Empty")
//   }
//   })
// }
// -------------------------------------------------------------------------
// num = 12345

// function squareDigits(num){
//   const strNum = num.toString();
//   console.log(strNum)
// }

// squareDigits();
//--------------------------------------------------------------------------
// function twoNumberSum(array, targetSum, startIndex = 0) {
//   // Base case: if startIndex is at the last element or beyond
//   if (startIndex >= array.length - 1) {
//     return [];
//   }

//   // Check pairs starting from startIndex + 1
//   for (let i = startIndex + 1; i < array.length; i++) {
//     if (array[startIndex] + array[i] === targetSum) {
//       return [array[startIndex], array[i]];
//     }
//   }

//   // Recurse with the next startIndex
//   return twoNumberSum(array, targetSum, startIndex + 1);
// }

// const x = 2; 
// let y = 4; 
// function update(arg) { 
//   return Math.random() + y * arg; 
// } 
// y = 2;
// y="3";
// const result = update(x)

// parseInt()

// function isItLetter(input) {
//   if(typeof parseInt(input) === number){
//     return false
//   }else{
//     return true
//   }
//   }

// console.log(isItLetter("1"))
// console.log(isItLetter("a"))

//-----------------------------------------

// const divisible = (num, dividedBy)  => {
//   let remainder = num % dividedBy;
//   console.log(remainder)
//   switch(remainder) {
//     case 0:
//       console.log(num + " divisble by "  +dividedBy);
//       break;
//     case 1:
//       console.log(num + " is not divisble by " + dividedBy);
//       break;
//     default:
//       console.log("oops!");
//   }
// }

// console.log(divisible(103, 5));

//--------------------------------------------------

