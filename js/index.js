const arrValues = [2,3,62,4,1,7,2,98,1,23,5,4,5,12];
let sum = 0;

for (let i = 0 ; i < arrValues.length;i++){

    
    //check if the number is even
    if(arrValues[i] % 2 == 0) {
        console.log(`The number ${arrValues[i]} is even.`);
        sum = sum+arrValues[i];        
    }

    else {
        continue; 
        console.log(`The number ${arrValues[i]} is odd.`);
    }

};

console.log(`The sum of even numbers is: ${sum}`);
