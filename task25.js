const products = [
    { pid: 100, pName: 'Apple', brand: '5G', price: 120000, display: 'OLED' },
    { pid: 101, pName: 'Samsung', brand: '4G', price: 90000, display: 'AMOLED' },
    { pid: 102, pName: 'OnePlus', brand: '4G', price: 75000, display: 'Fluid AMOLED' },
    { pid: 103, pName: 'Pixel', brand: '3G', price: 85000, display: 'OLED' },
    { pid: 104, pName: 'Xiaomi', brand: '3G', price: 40000, display: 'Super AMOLED' },
    { pid: 104, pName: 'Xiaomi', brand: '3G', price: 40000, display: 'LCD' }
];

// print product name only

// products.forEach((a)=>
//     console.log(a['pName'])
    
// )



// print all mobile details whose display is lcd : 

// products.forEach((a)=>
//     a['display']=='LCD'?console.log(a):''
    
// )

// print 3g mobile phone names :

// products.forEach((a)=>
//     a['brand']=='3G'?
// console.log(a['pName']):''

    
// )

// sort mobile based on price

// console.log(products.sort((a,b)=>a['price']-b['price']));


// print costly mobile price

// let costlyMobilePrice = 0;

// for (let each in products) {
//     if (costlyMobilePrice < products[each]['price']) { 
//         costlyMobilePrice = products[each]['price']
//     }
// }

// console.log(costlyMobilePrice)


// print low cost mobile

// let lowMobilePrice = Infinity //Infinity is used as the initial value to ensure any mobile's price will be smaller on the first comparison.

// for (let each in products) {
//     if (lowMobilePrice > products[each]['price']) { 
//         lowMobilePrice = products[each]['price']; 
//     }
// }

// console.log(lowMobilePrice)

// Double the values of an object

// let obj = {
//     apple: 10,
//     orange: 20
// }


// for (let key in obj) {
//     obj[key] *= 2
// }

// console.log(obj)

// Count the number of properties in an object

// let obj = {
//     apple: 10,
//     orange: 20
// }

// console.log(Object.keys(obj).length);

// const company = {
//     name: "TechCorp",
//     employees: [
//       { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
//       { id: 2, name: "Bob", department: "Marketing", salary: 50000 },
//       { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
//       { id: 4, name: "Diana", department: "HR", salary: 60000 }
//     ],
//     location: "New York",
//     established: 2010
//   };
// //   How do you find the total salary of all employees in the "Engineering" department?

// let totalSalary = company['employees']
//     .filter((a) => a['department'] === 'Engineering') 
//     .reduce((a, b) => a + b['salary'], 0)

// console.log(totalSalary);

// Const sentence= "js python js python" 
// display the count of each word


// const sentence= "js python js python" 
// const splitWord = sentence.split(' ')
// output = {}
// for(let i of splitWord){
//     if(i in output){
//         output[i]+=1

//     }else{
//         output[i]= 1
//     }
// }
// console.log(output);

// Const sentence = "Hello world" 
// display the count of each wordㅤ

// const sentence= "Hello world" 
// const splitWord = sentence.split(' ')
// output = {}
// for(let i of splitWord){
//     if(i in output){
//         output[i]+=1

//     }else{
//         output[i]= 1
//     }
// }
// console.log(output);


// WAP to check if a specific key exists in the object using:
// The hasOwnProperty method

// let obj = {
//     apple: 10,
//     orange: 20
// }

// console.log(obj.hasOwnProperty('apple'));

// WAP to delete  a specific key from  an object

// let obj = {
//     apple: 10,
//     orange: 20
// };

// console.log(delete obj['apple'])
// console.log(obj);

