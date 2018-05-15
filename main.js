const companies = [
    {name: "Company 1", category: "Finance", start: 1981, end: 2003},
    {name: "Company 2", category: "Finance", start: 1981, end: 2003},
    {name: "Company 3", category: "Finance", start: 1981, end: 2003},
    {name: "Company 4", category: "Finance", start: 1981, end: 2003},
    {name: "Company 5", category: "Finance", start: 1981, end: 2003},
    {name: "Company 6", category: "Finance", start: 1981, end: 2003},
    {name: "Company 7", category: "Finance", start: 1981, end: 2003},
    {name: "Company 8", category: "Finance", start: 1981, end: 2003},
];

const ages = [33, 12, 20, 16 , 5, 54, 21, 44, 61, 13, 15, 45 ];
/* 
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i])
} */
//forEach

/* companies.forEach(function(company){
    console.log(company.name);
})
ages.forEach(function(age){
    console.log(age);
})
 */
//filter
 /* let canDrink =[];
 for(let i=0; i < ages.length; i++){
     if(ages[i] >= 20){
         canDrink.push(ages[i]);
     }
 }
 console.log(canDrink);
 */

/*  const canDrink = ages.filter(age => age >= 21);
 console.log(canDrink); */

/*  const retailCompanies = companies.filter(function(company){
     if(company.category === 'Finance'){
         console.log(company.category + 'asf');
         console.log('anshul');
         return true;
     }
 } ); */

//Get 80s companies

/* const eightiesCompanies = companies.filter(company => (company.start  >= 1980 && company.start < 1990) );

console.log(eightiesCompanies);
 */


//map

//Create array of Company name
/* const companyNames = companies.map(function(company){
    return company.name;
}); */
/* const testMap = companies.map(function(company){
    return `${company.name}`;
});
console.log(testMap); */
//sort

//reduce

//Determine overlapping numbers in ranges

var arr = [10, 20, 4, 14, 4];
let rangeOne = [];
let rangeTwo = [];

for(var i = arr[0]; i <= arr[1]; i++ ){
    rangeOne.push(i);
}
console.log(rangeOne);
for(var i = arr[2]; i<= arr[3]; i++){
    rangeTwo.push(i);
}
console.log(rangeTwo);
var numbers = [];
for(var i =0; i< rangeOne.length; i++){
    console.log(rangeOne[i]);
    for(var j=0; j< rangeTwo.length; j++){
        if(rangeOne[i]===rangeTwo[j]){
            numbers.push(rangeOne[i]);
         console.log('anshul')
            
        }
    }
}
console.log(numbers);
/* var rangeOne =  */
