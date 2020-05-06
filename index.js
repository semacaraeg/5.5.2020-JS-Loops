let fruits = ['apple', 'orange', 'kiwi', 'mango', 'banana']

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

let trees = ['maple', 'redwood', 'sequoia', 'cypress', 'pine']

for (i = 0; i < trees.length; i++) {
	console.log(trees[i]);
}


let challengeArray = ['nope', 'no dice', 'yahtzee', 'JACKPOT!'];

for(let i=0; i < challengeArray.length; i++){
  challengeArray[i] === "JACKPOT!" ? console.log("Success!") : console.log("Not Found!");
}

//bonus
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(let i=0;i < numbers.length; i++){
   sum += numbers[i];
}
console.log(sum);

