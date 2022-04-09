// Create a function called averageRating which calculate the average rating of a product

// DOM SELECT
const calcBtn = document.querySelector('.calc');
const resultDisplay = document.querySelector('.avg-result');

const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]


  function augmentProductWithAverageRating(){
// 
    for(const product of products){
      // only run if there's data
        if(product && product.ratings && product.ratings.length){
            // take nested object and get [rate, rate, rate]
            const ratings = product.ratings.map(rating => rating.rate);
            console.log(`The rating for ${product.name} is ${ratings}`)

            // get the sum of ratings using reduce
    
            const sum = ratings.reduce((previous, current) => previous + current, 0); 
    
            console.log(`Total of ratings for ${product.name} is ${sum}`);

            // calculate average
            const average = sum / ratings.length;
            
            console.log(`Average rating for ${product.name} is ${average}`);

            // add the average rating back into the object
            product.averageRating = average;
        }

    }
  }

  function getAverageRatingTable(){
    const html = [`
    <table>
    <thead>
    <th> Name </th>
    <th> Average Rating </th>
    </thead>
    <tbody>` ];

    for(const product of products){
      html.push(`<tr>`);
      html.push(`<td> ${product.name} </td>`);
      html.push(`<td> ${product.averageRating ? product.averageRating : 'n/a'} </td>`);
      html.push(`</tr>`)
    }
    html.push('</tbody');
    html.push('</table>');

    return html.join(`\n`);
  }
  const displayAverageRatingResult = () => {
    augmentProductWithAverageRating();

    const html = getAverageRatingTable();
    resultDisplay.innerHTML = html;  
  }

//   ADD EVENT LISTENS
calcBtn.addEventListener('click', displayAverageRatingResult());


// ANOTHER WAY TO GO ABOUT FINDING THOSE AVERAGES

// let ratings = products.map((product) => {
//   return {
//       ratings: product.ratings.map((rating) => rating.rate)
//   }
// })

// which would give me this as a result:

// [
//     { "ratings": [5, 4.5] }, 
//     {  "ratings": [] }, 
//     { "ratings": [5] }
// ]

// Now we can use this simpler array to get the average ratings:

// let averageRatings = ratings.map((rating) => {
//     return {
//         averageRating: rating.ratings.length > 0 ? (rating.ratings.reduce((previous, current) => previous+current, 0)) / rating.ratings.length : 0
//     }
// })

// Don't worry about the long line of code above. It's literally just finding the total of the ratings and dividing it to find the average 🙂

// Here's the result:

// [
//     {
//         "averageRating": 4.75
//     },
//     {
//         "averageRating": 0
//     },
//     {
//         "averageRating": 5
//     }
// ]


// Change this 
// ['one', 'two', 'three']

// To this 
// {
// 'one': 'one',
// 'two': 'two',
// 'three': 'three'
// }
// Using reduce

const nums = ['one', 'two', 'three'];

// function reducer(acc, cur){
//   return {
//     acc, cur
//   };
// }

// const num = nums.reduce(reducer, {});
// const num = nums.reduce((acc, cur) => (
//   {
//      cur, acc
//   }
// ), {})

const num = nums.reduce((acc, cur) => ({
  ...acc, [cur]: cur
}), {})
console.log(num)

const no = nums.reduce((acc, cur) => ({
  ...acc, [cur]: cur
}), {})

console.log(no)


