const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 300 },
    { id: 2, title: '1984', author: 'George Orwell', price: 200 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 400 },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', price: 150 },
    { id: 5, title: 'War and Peace', author: 'Leo Tolstoy', price: 600 },
];
// 1.Print all book titles.

titleOfBook = books.map((bookTitle)=> bookTitle.title)
console.log(`The title of given books :  ${titleOfBook}`)

// 2.Find all books priced above 300.

pricedAbove300 = books.filter((amountAbove)=>amountAbove.price > 300)
console.log(pricedAbove300);

// 3.Get a list of authors of books priced below 250.

AuthorsBooks = books.filter((Authors)=> Authors.price < 250).map((books)=> books.author)
console.log(AuthorsBooks);

// 4.count the total no of book priced above 200


countOfBooks = books.filter((count) => count.price > 200).length

console.log(countOfBooks);


const cars = [
    { id: 1, model: 'Tesla Model 3', manufacturer: 'Tesla', price: 40000 },
    { id: 2, model: 'Ford Mustang', manufacturer: 'Ford', price: 55000 },
    { id: 3, model: 'Chevrolet Camaro', manufacturer: 'Chevrolet', price: 45000 },
    { id: 4, model: 'Toyota Corolla', manufacturer: 'Toyota', price: 20000 },
    { id: 5, model: 'Honda Civic', manufacturer: 'Honda', price: 25000 },
];

// Print all car models.

allModels = cars.map((allmodel)=> allmodel.model)
console.log(allModels);


// Find all cars priced above 30000.

above3000 = cars.filter((amounts)=> amounts.price > 30000).map((a)=> a.model)
console.log(`The cars that are amount above 30000 are : ${above3000}`);


// Get a list of manufacturers of cars priced below 30000.

above3000 = cars.filter((amounts)=> amounts.price < 30000).map((a)=> a.manufacturer)
console.log(`The cars that are amount above 30000 are : ${above3000}`);

// Count the total number of cars manufactured by Tesla.

teslaMan = cars.filter((teslaa)=> teslaa.manufacturer == 'Tesla').length

console.log(`The total number of cars mnufactured by tesla is : ${teslaMan}`);


const players = [
    { id: 1, name: 'John', sport: 'Basketball', age: 25, score: 30 },
    { id: 2, name: 'Emily', sport: 'Tennis', age: 23, score: 18 },
    { id: 3, name: 'Chris', sport: 'Football', age: 28, score: 12 },
    { id: 4, name: 'Anna', sport: 'Basketball', age: 24, score: 25 },
    { id: 5, name: 'Mike', sport: 'Football', age: 26, score: 15 },
];


// 1. Print all player names.

allPlayer = players.map((names)=> names.name)
console.log(allPlayer);



// 2. Find all players who scored above 20.

above20 = players.filter((above)=> above.score > 20).map((a)=>a.name)
console.log(above20);



// 3. Get a list of players who play Basketball.

basketBall = players.filter((basket)=> basket.sport == 'Basketball')

console.log(basketBall);



// 4. Count the total number of Football players.

footBall = players.filter((foot)=> foot.sport == 'Football').length
console.log(footBall);



// 5. Find the player with the highest score and print their details

higherScore = players.reduce((a,b)=> a['score'] + b['score']?a:b)

console.log(higherScore);
