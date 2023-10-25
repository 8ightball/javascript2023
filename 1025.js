// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, delection, copy
// push: add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to benigging
fruits.unshift('딸기', '레몬');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '사과', '수박');
console.log(fruits);

// combine two arrays
const fruits2 = ['배', '코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// index0f: find the index
console.clear();
console.log(fruits);
console.log(fruits.index0f('사과'));
console.log(fruits.index0f('수박'));
console.log(fruits.index0f('코코넛')); 

// includes
console.log(fruits.includes('수박'));
console.log(fruits.includes('코코넛'));

//lastIndex0f
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.index0f('사과'));
console.log(fruits.lastIndex0f('사과'));

// Q1. make a string out of an array
{
   const fruits = ['apple', 'banana', 'orange'];
   const result = fruits.join(',');
   console.log(result);
}

// Q2. make an array out of a string
{
   const fruits = '사과, 키위, 바나나, 체리';
   const result = fruits.split(',');
   console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
   const array = [1, 2, 3, 4, 5];
   const result = array.reverse();
   console.log(result);
   console.log(array);
}

// Q4. make new array without the first two elements
{
   const array = [1, 2, 3, 4, 5];
   const result = array.slice(2, 5);
   console.log(result);
   console.log(array);
}

// Q5. find a student with the score 90
{
   const result = students.find((student) => student.score === 90);
   console.log(result);
}

// Q6. make an array of enrolled students
{
   const result = students.filter((student) => student.enrolled);
   console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}