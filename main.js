let a = 10;
let inRow = [];
let square = [];
let sum = 0;
let fm15To35 = [];
let fm1To500 = 0;

for (let i = 10; i <= 20; i++, a++){
    square.push(a*a)
};
console.log(`Row of numbers from 10-20 ${inRow.join()}`);

for (let i = 10; i<=20; i++){
    inRow.push(i);
};
console.log(`Square numbers from 10-20 ${square.join()}`);

for (let i = 1; i <= 10; i++){
    console.log(`${i} * 7 = ${i*7}`);
};

for (let i = 0; i <= 15; i++){
    sum += i;
};
console.log(`Sum of numbers 1-15 ${sum}`);

for (let i = 15; i <= 35; i++){
    fm15To35.push(i*(i+1))
};
console.log(`Multiplied numbers from 15-35: ${fm15To35.join()}.`)

let b = 0;
let count = 0
while (count<500){
    count++;
    b+=count;
}
console.log(b/500);

let counter = 100;
let store = []; 
while (counter <= 199){
    if (counter % 3 == 0){
            store.push(counter);
            console.log(counter)
    }
    counter++;
    
}
console.log(store.join(' '));

let num = prompt('Enter a number: ');
let delitely = [];
let c = 0;
while (c<num+1){
    if (num % c == 0){
        delitely.push(c);
    }
    c++;
}
console.log(`Делители натурального числа ${num}: ${delitely}`);

let summa = 0;
for (let i = 0; i<delitely.length; i++){
    summa = delitely[i]+summa
}
console.log(summa)

let table = ''
for (let i = 1; i < 11; i++){
    for (let j = 1; j<11; j++){
        table += (i*j) + ' ' 
    }
    table += '\n'
}
console.log(table)







