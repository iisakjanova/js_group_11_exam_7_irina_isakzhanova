import {nanoid} from "nanoid";

import drinkImage from './assets/coffee.png';
import mealImage from './assets/spoon-knife.png';

export const ITEMS = [
    {name: 'Hamburger', price: 80, image: mealImage, id: nanoid(),},
    {name: 'Coffee', price: 70, image: drinkImage, id: nanoid(),},
    {name: 'Cheeseburger', price: 90, image: mealImage, id: nanoid(),},
    {name: 'Tea', price: 50, image: drinkImage, id: nanoid(),},
    {name: 'Fries', price: 45, image: mealImage, id: nanoid(),},
    {name: 'Cola', price: 40, image: drinkImage, id: nanoid(),},
];
