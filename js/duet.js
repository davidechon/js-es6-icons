// alert('Hello World!');

//////////////////////////////////////////////////


const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//------------------------------------------------
// <div class="icons ${element.type}">
        //   <i class="${element.family} ${element.prefix + element.name} ${element.color}"></i>
        //   <p class="etichetta">${element.name.toUpperCase()}</p>
// </div>

//<li>
//	<i class="${icons.family} ${icons.prefix + icons.name} ${icons.color}"></i>
//  <span class="icon-name">${icons.name}</span>
//</li>
				



// Crea un template per l'icona
const iconTemplate = `
		<li>
			<i class="${icons.family} ${icons.prefix + icons.name} ${icons.color}"></i>
		</li>
		`;

		iconsId.innerHTML += iconTemplate;

//------------------------------------------------
// filtro solo animal
// const type = "animal";
//------------------------------------------------

// Filtra le icone in base al tipo
const filteredIcons = filterIconsByType(icons, "vegetable");
// let iconeFiltrate = icons.filter(icon => icon.type <= "animal")

// Popola l'elenco con le icone filtrate
const iconsList = document.getElementById('iconsId');
iconsList.innerHTML = filteredIcons.map(i => iconTemplate).join('');
console.log(filteredIcons);
console.log(iconTemplate);

// Filtra le icone in base al tipo
// const filteredIcons = filterIconsByType(icons, type);
// const filteredAnimalIcons = filterIconsByType(icons, 'animal');
// const filteredVegetableIcons = filterIconsByType(icons, 'vegetable');
// const filteredUserIcons = filterIconsByType(icons, 'user');

// Popola l'elenco con le icone filtrate
// const iconsList = document.getElementById('icons');
// iconsList.innerHTML = filteredIcons.map(icon => iconTemplate).join('');
// console.log(filteredIcons);

//------------------------------------------------
function filterIconsByType(icons, type) {
  const filteredIcons = [];
  for (const icon of icons) {
    if (icon.type === type) {
      filteredIcons.push(icon);
    }
  }
	return filteredIcons;
}

// Esempio di utilizzo:
// const filteredAnimalIcons = filterIconsByType(icons, 'animal');
// const filteredVegetableIcons = filterIconsByType(icons, 'vegetable');
// const filteredUserIcons = filterIconsByType(icons, 'user');

// filteredAnimalIcons conterrà le icone cat, crow, dog, dove, dragon, horse, hippo, fish
// filteredVegetableIcons conterrà le icone carrot, apple-alt, lemon, pepper-hot
// filteredUserIcons conterrà le icone user-astronaut, user-graduate, user-ninja, user-secret
//------------------------------------------------