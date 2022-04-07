// Create a function called averageRating which calculate the average rating of a product

// DOM SELECT
const calcBtn = document.querySelector('.calc');
const resultEl = document.querySelector('.avg-result');

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
  console.log(products[0].ratings[1].rate)
  console.log(products[0].ratings)
  console.log(products.length)
  
//   const avgRating = (name) => {
//       let avg = 0;
//       let count = 0;
//       for (let i = 0; i < products.length; i++) {
//           if (name.toLowerCase() === products[i].name.toLowerCase()) {
//               products[i].ratings.rate.forEach(rating => {
//                   count++
//                   avg += rating
//               })
//           }
//       }
//       avg = avg / count
//   }

//   FUNCTION

function averageRating(rate){
// get ratings array
const ratings = products.map((product) => {
  return {
      //  id: product._id,
      ratings: product.ratings.map((rating) => rating.rate)
  }
});
   
console.log(ratings)

// use the array above to get the average ratings
const averageRatings = ratings.map((rating) => {
  return {
      // id: rating.id,
      averageRating: rating.ratings.length > 0 ? (rating.ratings.reduce((previous, current) => previous+current, 0)) / rating.ratings.length : 0
  }
});

const avgResult = averageRatings;
for(let i = 0; i < avgResult.length; i++){
  avgResult.forEach((result) => {
    // result += avgResult.averageRating;
    resultEl.innerHTML+=`The average ratings is ${result} <br>`;
  });
}

console.log(avgResult[0].averageRating)
}

//   EVENT LISTEN
calcBtn.addEventListener('click', averageRating())