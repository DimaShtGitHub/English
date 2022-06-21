'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Words', [{
      wordEnglish: 'Orange',
      img: '/img/Orange.png',
      wordRussian: 'Апельсин',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Lemon',
      img: '/img/Lemon.png',
      wordRussian: 'Лимон',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Banana',
      img: '/img/Banana.png',
      wordRussian: 'Банан',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Fish',
      img: '/img/Fish.png',
      wordRussian: 'Рыба',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Cheese',
      img: '/img/Cheese.png',
      wordRussian: 'Сыр',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Egg',
      img: '/img/Egg.png',
      wordRussian: 'Яйцо',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Hamburger',
      img: '/img/Hamburger.png',
      wordRussian: 'Гамбургер',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Carrot',
      img: '/img/Carrot.png',
      wordRussian: 'Морковь',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Chicken',
      img: '/img/Chicken.png',
      wordRussian: 'Курица',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Butter',
      img: '/img/Butter.png',
      wordRussian: 'Масло',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Kiwi',
      img: '/img/Kiwi.png',
      wordRussian: 'Киви',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Cake',
      img: '/img/Cake.png',
      wordRussian: 'Торт',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Chocolate',
      img: '/img/Chocolate.png',
      wordRussian: 'Шоколад',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Cucumber',
      img: '/img/Cucumber.png',
      wordRussian: 'Огурец',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Ice cream',
      img: '/img/Icecream.png',
      wordRussian: 'Мороженое',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Flowers',
      img: '/img/Flowers.png',
      wordRussian: 'Цветы',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Donut',
      img: '/img/Donut.png',
      wordRussian: 'Пончик',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Meat',
      img: '/img/Meat.png',
      wordRussian: 'Мясо',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Apple',
      img: '/img/Apple.png',
      wordRussian: 'Яблоко',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Tea',
      img: '/img/Tea.png',
      wordRussian: 'Чай',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      wordEnglish: 'Fox',
      img: '/img/Fox.png',
      wordRussian: 'Лиса',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Rabbit',
      img: '/img/Rabbit.png',
      wordRussian: 'Кролик',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Dog',
      img: '/img/Dog.png',
      wordRussian: 'Собака',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Crocodile',
      img: '/img/Crocodile.png',
      wordRussian: 'Крокодил',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Elephant',
      img: '/img/Elephant.png',
      wordRussian: 'Слон',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Bicycle',
      img: '/img/Bicycle.png',
      wordRussian: 'Велосипед',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Cat',
      img: '/img/Cat.png',
      wordRussian: 'Кошка',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Snake',
      img: '/img/Snake.png',
      wordRussian: 'Змея',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Milk',
      img: '/img/Milk.png',
      wordRussian: 'Молоко',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Red',
      img: '/img/Red.png',
      wordRussian: 'Красный',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Sun',
      img: '/img/Sun.png',
      wordRussian: 'Солнце',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {});
  }
};
