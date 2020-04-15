// display in the console the numbers from 1 to 20
var i= 1;
while (i < 21) {
   console.log(i);
    i++;
}

//display in the console the odd numbers from 1 to 20


for(i=1; i<21 ; i++){
    if(i%2 !=0){
console.log(i);
    }
}

//compute the sum of the elements of an array and display it in the console
var ElementOfArray = [5,10,200,14,80,60];

function SumOfElements(list) {
    var i = 0;
    sum = 0;
    while (i < list.length) {
    sum= sum + list[i];
    i++;
    }
    return sum;
}


console.log(SumOfElements(ElementOfArray));

//compute the maximum of the elements of an array and display it in the console 

var arr = [5,10,200,14,80,60];

var max=arr[0];

for (var i=0; i<arr.length; i++){
    if (arr[i]>=max){
        max=arr[i];
    }

}

console.log(max);

//compute how many times a certain element appears in an array


var list = [ 1, 1, 1, 3, 5, 8, 3, 4, 4, 1, 1, 1];
var num = 1;

var count = function count(num) {
    var a = 0;
    for (var i=0; i < list.length; i++) {
        if (list[i] === num){
        a = a + 1;
        }
    }
    return a;
}

console.log(count(num));

