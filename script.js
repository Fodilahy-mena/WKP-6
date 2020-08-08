console.log('weekend project 6');

// Add the object from readme

const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta',
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
		title: 'Rice and Leaves',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy',
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
        <span>${item.price}</span>
        <button>Add</button>
    </li>`
).join('');

    




