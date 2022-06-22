'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Words', [
      {wordEnglish: 'Orange',
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
    {
      wordEnglish: 'Pineapple',
      img: '/img/Pineapple.png',
      wordRussian: 'Ананас',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Watermelon',
      img: '/img/Watermelon.png',
      wordRussian: 'Арбуз',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Bus',
      img: '/img/Bus.png',
      wordRussian: 'Автобус',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Car',
      img: '/img/Car.png',
      wordRussian: 'Машина',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Train',
      img: '/img/Train.png',
      wordRussian: 'Поезд',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Tomato',
      img: '/img/Tomato.png',
      wordRussian: 'Помидор',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Parrot',
      img: '/img/Parrot.png',
      wordRussian: 'Попугай',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      wordEnglish: 'Cow',
      img: '/img/Cow.png',
      wordRussian: 'Корова',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Tiger',
      img: '/img/Tiger.png',
      wordRussian: 'Тигр',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Tree',
      img: '/img/Tree.png',
      wordRussian: 'Дерево',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Strawberry',
      img: '/img/Strawberry.png',
      wordRussian: 'Клубника',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Duck',
      img: '/img/Duck.png',
      wordRussian: 'Утка',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Ball',
      img: '/img/Ball.png',
      wordRussian: 'Мяч',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      wordEnglish: 'Girl',
      img: '/img/Girl.png',
      wordRussian: 'Девочка',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Melon',
      img: '/img/Melon.png',
      wordRussian: 'Дыня',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'One',
      img: '/img/One.png',
      wordRussian: 'Один',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Two',
      img: '/img/Two.png',
      wordRussian: 'Два',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Three',
      img: '/img/Three.png',
      wordRussian: 'Три',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Four',
      img: '/img/Four.png',
      wordRussian: 'Четыре',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Five',
      img: '/img/Five.png',
      wordRussian: 'Пять',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Six',
      img: '/img/Six.png',
      wordRussian: 'Шесть',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      wordEnglish: 'Bread',
      img: '/img/Bread.png',
      wordRussian: 'Хлеб',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Seven',
      img: '/img/Seven.png',
      wordRussian: 'Семь',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      wordEnglish: 'Eight',
      img: '/img/Eight.png',
      wordRussian: 'Восемь',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Nine',
      img: '/img/Nine.png',
      wordRussian: 'Девять',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Zero',
      img: '/img/Zero.png',
      wordRussian: 'Ноль',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Sugar',
      img: '/img/Sugar.png',
      wordRussian: 'Сахар',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Salt',
      img: '/img/Salt.png',
      wordRussian: 'Соль',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Coffee',
      img: '/img/Coffee.png',
      wordRussian: 'Кофе',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Boat',
      img: '/img/Boat.png',
      wordRussian: 'Лодка',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      wordEnglish: 'Bed',
      img: '/img/Bed.png',
      wordRussian: 'Кровать',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Frog',
      img: '/img/Frog.png',
      wordRussian: 'Лягушка',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Table',
      img: '/img/Table.png',
      wordRussian: 'Стол',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Airplane',
      img: '/img/Airplane.png',
      wordRussian: 'Самолет',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Blue',
      img: '/img/Blue.png',
      wordRussian: 'Синий',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Computer',
      img: '/img/Computer.png',
      wordRussian: 'Копмьютер',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      wordEnglish: 'Water',
      img: '/img/Water.png',
      wordRussian: 'Вода',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Grape',
      img: '/img/Grape.png',
      wordRussian: 'Виноград',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Peach',
      img: '/img/Peach.png',
      wordRussian: 'Персик',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Pear',
      img: '/img/Pear.png',
      wordRussian: 'Груша',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Pig',
      img: '/img/Pig.png',
      wordRussian: 'Поросёнок',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Potato',
      img: '/img/Potato.png',
      wordRussian: 'Картофель',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Onion',
      img: '/img/Onion.png',
      wordRussian: 'Лук',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Lion',
      img: '/img/Lion.png',
      wordRussian: 'Лев',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      wordEnglish: 'Horse',
      img: '/img/Horse.png',
      wordRussian: 'Лошадь',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Turtle',
      img: '/img/Turtle.png',
      wordRussian: 'Черепаха',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Sheep',
      img: '/img/Sheep.png',
      wordRussian: 'Овца',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Juice',
      img: '/img/Juice.png',
      wordRussian: 'Сок',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Crisps',
      img: '/img/Crisps.png',
      wordRussian: 'Чипсы',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Cookie',
      img: '/img/Cookie.png',
      wordRussian: 'Печенье',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Ship',
      img: '/img/Ship.png',
      wordRussian: 'Корабль',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      wordEnglish: 'Snowman',
      img: '/img/Snowman.png',
      wordRussian: 'Снеговик',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Mirror',
      img: '/img/Mirror.png',
      wordRussian: 'Зеркало',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Pepper',
      img: '/img/Pepper.png',
      wordRussian: 'Перец',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Green',
      img: '/img/Green.png',
      wordRussian: 'Зеленый',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Guitar',
      img: '/img/Guitar.png',
      wordRussian: 'Гитара',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Bird',
      img: '/img/Bird.png',
      wordRussian: 'Птица',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      wordEnglish: 'Zebra',
      img: '/img/Zebra.png',
      wordRussian: 'Зебра',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Sofa',
      img: '/img/Sofa.png',
      wordRussian: 'Диван',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Clock',
      img: '/img/Clock.png',
      wordRussian: 'Часы',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Lamp',
      img: '/img/Lamp.png',
      wordRussian: 'Лампа',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Bear',
      img: '/img/Bear.png',
      wordRussian: 'Медведь',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      wordEnglish: 'Mouse',
      img: '/img/Mouse.png',
      wordRussian: 'Мышь',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {});
  }
};
