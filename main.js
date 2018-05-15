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

