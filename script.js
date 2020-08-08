console.log('weekend project 6');

// Add the object from readme

const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto 🔥',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta 🔥 🍃',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 'burger',
		price: 5000,
		title: 'Burger',
		spicy: false,
		vegetarian: false,
	},
	{
		id: 'rice',
		price: 2000,
		title: 'Rice and Leaves 🍃',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy 🥯',
		spicy: false,
		vegetarian: false,
	},
];

// Get access to the ul element that has list class
const list = document.querySelector('.card1_list');

// Map through the food lists and insert it into html 
list.innerHTML = foods.map(item => 
    `<li class="list-item" id="${item.id}">
        <h3>${item.title}</h3>
        <span>${item.price} AR</span>
        <button class="add-btn">Add</button>
    </li>`
).join('');

// Action click with all Checkboxes

const checkSpicy = document.querySelector('.spicy_checkbox');
const checkVeg = document.querySelector('.veg_checkbox');

const allCheckboxes = document.querySelectorAll(`input[type="checkbox"`);


allCheckboxes.forEach(checkbox => checkbox.addEventListener('change', e => {
    // if vegetarian key and the spicy key are true, then show the food that is spicy and without meat

     if(checkSpicy.checked && checkVeg.checked) {
        const foodForVegetarianSpicy = foods.filter(food => food.spicy === true && food.vegetarian === true);
        const bothFood = foodForVegetarianSpicy.map(food => `
        <li class="list-item" id="${food.id}">
            <h3>${food.title}</h3>
            <span>${food.price} AR</span>
            <button class="add-btn">Add</button>
        </li>
        `).join('');
        list.innerHTML = bothFood;
    } else if(checkSpicy.checked) { 
        // if the food is spicy wether it is with meat or not, show the food

        const foodForHot = foods.filter(food => food.spicy === true);
        const hotFood = foodForHot.map(food =>`
        <li class="list-item" id="${food.id}">
            <h3>${food.title}</h3>
            <span>${food.price} AR</span>
            <button class="add-btn">Add</button>
        </li>
        `).join('');
        list.innerHTML = hotFood;
    } else if (checkVeg.checked) {
        // only show me the food that is without meat

        const foodForVegetarian = foods.filter(food => food.vegetarian === true);
        const vegetFood = foodForVegetarian.map(food => `
        <li class="list-item" id="${food.id}">
            <h3>${food.title}</h3>
            <span>${food.price} AR</span>
            <button class="add-btn">Add</button>
        </li>
        `).join('');
        list.innerHTML = vegetFood;
    } else {

        // Otherwise you like spicy food and you're not a vegetarian
        list.innerHTML = foods.map(item => 
            `<li class="list-item" id="${item.id}">
                <h3>${item.title}</h3>
                <span>${item.price} AR</span>
                <button class="add-btn">Add</button>
            </li>`
        ).join(''); 
    }
}));

// Add the choice to the order

const secondCard = document.querySelector('.card2_list');
const addBtns = document.querySelectorAll('.add-btn');

const handleBtnClick = e => {
    const button = e.currentTarget;
    // select the closest parent with .list-item class
    const listItem = button.closest('.list-item');
    const id = listItem.querySelector('.list-item');
    const title = listItem.querySelector('h3').textContent;
    const totalPrice = listItem.querySelector('span').textContent;
    secondCard.innerHTML =`
    <li class="list-item" id="${id}">
        <h3>${title}</h3>
        <span>X1</span>
        <span>${totalPrice}</span>
	</li>`
};

addBtns.forEach(button => button.addEventListener('click', handleBtnClick));
    


