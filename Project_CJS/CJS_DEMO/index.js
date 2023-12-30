const {linearSearch:ls ,binarySearch:bs}=require('./searching');
const { bubblesort,insertionsort,mergesort,selectionSort}=require('./sorting');
const {quicksort}=require('./quicksort');

console.log(ls([3,2,5,1,4],2));
let arr=[3,4,1,5,2];
quicksort(arr);
console.log(arr);
