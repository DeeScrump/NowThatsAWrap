const mongoose = require('mongoose');
const db = require('../models');
//const { Category } = require('../models/Category');

mongoose.connect('mongodb://localhost/nowthatsawrap', {
  useNewUrlParser: true,
 // useFindAndModify: false,
  useUnifiedTopology: true,
});

const menu = [
    {
        
        title: 'Veggie Medley Wrap',
        description:
          'Sauteed Mushrooms, sauteed bell peppers, sauteed onions, shredded carrots, mixed greens, two eggs, shredded cheese and chipotle ranch sauce served in a 12" tortilla wrap.',
        image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
        price: 13.00,
        category: 'breakfast',
        reviews: " asdfghhdh",
        //alcohol: false,
       // vegan: true, 
      },
      {
          
        title: 'Coffee',
        description:
          'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
        image: 'canned-coffee.jpg',
        price: 2.99,
        category: 'drink',
        //alcohol: false,
        //vegan: true
      },
      {
          
        title: 'Brownie with Icecream',
        description:
          'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
        image: 'brownie-icecream.jpg',
        price: 7.99,
        category: 'dessert',
        //alcohol: false,
        //vegan: false
      },
      {
        
        title: 'Chicken, Egg and Cheese',
        description:
          'Chopped Chicken Breast, two eggs, shredded cheese and chipotle ranch sauce served in a 12" tortilla wrap.',
        image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
        price: 8.00,
        category: 'breakfast',
        //alcohol: false,
        //vegan: false
      },
      {
          
        title: 'Shrimp, Egg and Cheese',
        description:
          'Grilled Jumbo Shrimp, scrambled eggs, shredded cheese and chipotle ranch sauce served in a 12" tortilla wrap.',
        image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
        price: 12.99,
        category: 'breakfast',
        //alcohol: false,
        //vegan: false
      },
      {
          
        title: 'Caesar Seafood',
        description:
          'Jumbo Shrimp & Imitation Crab Meat, Lettuce, Grated Parmesan Cheese and Caesar Dressing.',
        image: '/client/public/assets/images/IMG-20211122-WA0035.jpg',
        price: 14.99,
        category: "brunch",
        //alcohol: false,
        //vegan: false
      },
      {
          
        title: 'Fancy Hot Chocolate',
        description:
          'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
        image: 'hotchocolate.jpg',
        price: 3.99,
        category: 'drink',
       // alcohol: false,
       // vegan: true
      },
      {
          
        title: 'Breakfast Potatoes',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
        image: 'bedtime-book.jpg',
        price: 3.99,
       // alcohol: false,
        //vegan: true
      },
      {
        
        title: 'Peach Basil Iced Tea',
        description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
        image: 'spinning-top.jpg',
        price: 3.99,
        category: 'drink',
       // alcohol: false,
       // vegan: true
      },
      {
        title: 'Brunch Cocktail',
        description:
          'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
        image: 'cocktail.jpg',
        price: 5.99,
        category: 'cocktails'
       // alcohol: true,
       // vegan: false
      },
      {
        title: 'Pineapple Upside Down French Toast',
        description:
          'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
        image: 'teddy-bear.jpg',
        price: 12.99,
        category: 'breakfast',
      //  alcohol: false,
      //  vegan: true
      },
      {
        title: 'Black Bean Burger',
        description:
          'Grilled Black Bean Burger, Lettuce, Sweet Onions, Bell Peppers, Shredded Carrots and Chipotle Ranch.',
        image: '/client/public/assets/images/IMG-20211122-WA0035.jpg',
        price: 14.99,
        category: 'brunch',
       // alcohol: false,
       // vegan: false
      },
      {
        title: "Philly Veggie",
        description: 'Sauteed Mushrooms, Sauteed Bell Peppers, Sauteed Onions, Lettuce, Shredded Carrots and Chipotle Ranch',
        image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
        price: 14.99,
        category: "brunch",
      },
      {
        title: "Philly SeeFruit",
      description: 'Sliced Strawberries, Sun-dried Cranberries, Crumbled Walnuts, Lettuce, Shredded Carrots, Banana Peppers, Raspberry Vinaigrette and Honey Mustard Dressing',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 18.99,
      category: "brunch",
    }, 
    {
      title: "Beyond Burger",
      description: 'Grilled Meatless Burger, Lettuce, Diced Tomatoes, Sweet Onions, Pickles, Ketchup and Honey Mustard Dressing',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 14.99,
      category: "brunch",
      }, 
      {
      title: "Grilled Jumbo Shrimp",
      description: 'Grilled Jumbo Shrimp, Lettuce, Grated Parmesan Cheese and Chipotle Ranch.',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 14.99,
      category: "brunch",
    },
    {
      title: "Grilled Salmon Burger",
      description: 'Grilled Salmon Burger, Lettuce, Grated Parmesan Cheese and Chipotle Ranch',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 14.99,
      category: "brunch",
      
    },
    {
      title: "Surf & Turf",
      description: 'USDA Choice Steak, Grilled Jumbo Shrimp, Lettuce, Grated Parmesan Cheese and Chipotle Ranch',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 19.99,
      category: "brunch",
    },
    {
      title: "Philly Seafood",
      description: 'Jumbo Shrimp & Imitation Crab Meat, Sauteed Bell Peppers, Mushrooms, Onions, Mozzarella Cheese and Chipotle Ranch',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 19.99,
      category: "brunch",
    },
    {
      title: "Caesar Chicken",
      description: 'Chicken Breast, Lettuce, Grated Parmesan Cheese and Caesar Dressing.',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 10.00,
      category: "brunch",
    },
    {
      title: "Buffalo Chicken",
      description: 'Chicken breast, lettuce, grated parmesan cheese and Buffalo Sauce with ranch dressing',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 10.00,
      category: "brunch",
    },
    {
      title: "Jerk Chicken",
      description: 'Chicken Breast, Lettuce, Grated Parmesan Cheese, Shredded Carrots, Jalapeno Peppers and Jerk Seasoning with Chipotle Ranch Dressing',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 10.00,
      category: "brunch",
    },
    {
      title: "Lemon Pepper Chicken",
      description: 'Chicken Breast, Lettuce, Grated Parmesan Cheese and Lemon Pepper Seasoning with Ranch Dressing',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 10.00,
      category: "brunch",
    },
    {
      title: "Sweet Chili Thai Chicken",
      description: 'Chicken Breast, Lettuce, Grated Parmesan Cheese, Shredded Carrots, Jalapeno Peppers and Sweet Chili Thai Sauce',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 10.00,
      category: "brunch",
    },
    {
      title: "Sweet Teriyaki Chicken",
      description: 'Chicken Breast, Sauteed Onions, Shredded Cheese and Sweet Teriyaki Sauce',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 10.00,
      category: "brunch",
    },
    {
      title: "Philly Chicken",
      description: 'Chicken Breast, Sauteed Bell Peppers, Sauteed Mushrooms, Sauteed Onions, Mozzarella Cheese and Chipotle Ranch',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 15.00,
      category: "brunch",
    },
    {
      title: "Philly Cheesesteak",
      description: 'USDA Choice Steak, Sauteed Bell Peppers, Mushrooms, Sauteed Onions, Mozzarella Cheese and Chipotle Ranch',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 16.99,
      category: "brunch",
    },
    {
      title: "Very Berry Chicken",
      description: 'Grilled Chicken, Sliced Strawberries, Sundried Cranberries, Glazed Walnuts, Lettuce, Shredded Carrots, Banana Peppers, Raspberry Vinaigrette and Honey Mustard Dressing',
      image: "/client/public/assets/images/IMG-20211122-WA0035.jpg",
      price: 16.99,
      category: "brunch",
    },
    {
      title: 'Bacon Omelet',
      description: 'Bacon Slices and Bacon Crumbles, sauteed onions, sauteed pepper, diced tomatoes and shredded cheese',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 9.99,
      category: 'breakfast',
    },
    {
      title: 'Chicken Omelet',
      description: 'Chopped Chicken Breast, sauteed onions, peppers and mushrooms with shredded cheese',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 9.99,
      category: 'breakfast',
    },
    {
      title: 'Turkey Sausage Omelet',
      description: 'Turkey Pan Sausage, sauteed onions, sauteed peppers and shredded cheese',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 9.99,
      category: 'breakfast',
    },
    {
      title: 'Seafood Omelet',
      description: 'Grilled Jumbo Shrimp and Imitation Crab Meat, sauteed onions, sauteed peppers and shredded cheese',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 14.99,
      category: 'breakfast',
    },
    {
      title: 'Veggie Medley Omelet',
      description: 'Sauteed Mushrooms, Sauteed Bell Peppers, Sauteed Onions, shredded carrots, mixed greens and shredded cheese',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 14.99,
      category: 'breakfast',
    },
    {
      title: 'Philly Cheesesteak Omelet',
      description: 'USDA Choice Steak, sauteed onions, peppers, and mushrooms with mozzarella cheese',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 16.99,
      category: 'breakfast',
    },
    {
      title: 'Surf & Turf Omelet',
      description: 'USDA Choice Steak and Grilled Jumbo Shrimp, sauteed onions and shredded cheese',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 16.99,
      category: 'breakfast',
    },
    {
      title: 'Bacon, Egg and Cheese',
      description: 'Crispy Bacon Slices, two eggs, shredded cheese and chipotle ranch sauce served in a 12" tortilla wrap',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 8.00,
      category: 'breakfast',
    },
    {
      title: 'Chicken, Egg and Cheese',
      description: 'Chopped Chicken Breast, two eggs, shredded cheese and chipotle ranch sauce served in a 12" tortilla wrap',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 8.00,
      category: 'breakfast',
    },
    {
      title: 'Turkey Sausage, Egg and Cheese',
      description: 'Turkey Pan Sausage, scrambled eggs, shredded cheese and chipotle ranch sauce served in a 12" tortilla wrap',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 8.00,
      category: 'breakfast',
    },
    {
      title: 'Steak, Egg and Cheese Wrap',
      description: 'USDA Choice Steak, scrambled eggs, shredded cheese and chipotle ranch sauce served in a 12" tortilla wrap',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 15.00,
      category: 'breakfast',
    },
    {
      title: 'Breakfast Surf & Turf',
      description: 'USDA Choice Steak, scrambled eggs, shredded cheese and chipotle ranch sauce served in a 12" tortilla wrap',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 15.00,
      category: 'breakfast',
    },
    {
      title: 'Bacon, Egg and Cheese Quesadilla',
      description: 'Crispy Bacon Slices, shredded Provolone & Mozzarella cheese, Scrambled Eggs and Chipotle Ranch Sauce',
      image: '../../assets/images/IMG-20211122-WA0037.jpg',
      price: 13.00,
      category: 'breakfast',
    },
    {
      title: 'Chicken, Egg and Cheese Quesadilla',
      description: 'Grilled Chicken Breast, shredded Provolone & Mozzarella cheese, Scrambled Eggs and Chipotle Ranch Sauce',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 13.00,
      category: 'breakfast',
    },
    {
      title: 'Sausage, Egg and Cheese Quesadilla',
      description: 'Turkey Pan Sausage, shredded Provolone & Mozzarella cheese, Scrambled Eggs and Chipotle Ranch Sauce',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 13.00,
      category: 'breakfast',
    },
    {
      title: 'Veggie Medley Quesadilla',
      description: 'Sauteed Mushrooms, Sauteed Bell Peppers, Sauteed Onions, shredded carrots, and shredded Provolone & Mozzarella cheese, Scrambled eggs and Chipotle Ranch Sauce',
      image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 15.00,
      category: 'breakfast',
    },
    {
      title: 'Philly Cheesesteak Quesadilla',
      description: 'USDA Choice Steak, sauteed onions, peppers and mushrooms with shredded Provolone & Mozzarella cheese, Scrambled Eggs and Chipotle Ranch Sauce',
     image: '/client/public/assets/images/IMG-20211122-WA0037.jpg',
      price: 17.00,
      category: 'breakfast',
    },
      
    
],

 category = [
  { name: 'breakfast' },
  { name: 'brunch' },
  { name: 'drink' },
  { name: 'cocktails' },
  { name: 'dessert' }
]

db.Menu.deleteMany({})
  .then(() => db.Menu.collection.insertMany(menu))
  .then((data) => {
    console.log(' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

  // db.once('open', async () => {
     db.Category.deleteMany()

    .then(() => db.Category.collection.insertMany(category))
    .then((data) => {
      console.log('categories seeded');
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
  // })

