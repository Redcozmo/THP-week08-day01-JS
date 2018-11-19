let arrayNumber = [1, 4, 2, 8, 3];
let max = 0;
console.log(arrayNumber);
console.log(arrayNumber.length);
for (let i = 0; i < arrayNumber.length - 1; i++){
  console.log("dans le if");
  if (arrayNumber[i] > max) {
    max = arrayNumber[i];
  }
}
console.log(max);
