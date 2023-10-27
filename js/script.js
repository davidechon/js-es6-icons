// alert('Hello World!');
// cartella/repo:   js-es6-icons
// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.


//////////////////////////////////////////////////
// Milestone 1 
// + 
// Milestone 2


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



let litTemplate = "";
icons.forEach((element) =>{
  litTemplate =`
        <div class="icons ${element.type}">
          <i class="${element.family} ${element.prefix + element.name} ${element.color}"></i>
          <p class="etichetta">${element.name.toUpperCase()}</p>
        </div>
				`;
      // app.innerHTML += litTemplate;
      myBtnContainer.innerHTML += litTemplate;
      // console.log(litTemplate);
});

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
const filteredAnimalIcons = filterIconsByType(icons, 'animal');
const filteredVegetableIcons = filterIconsByType(icons, 'vegetable');
const filteredUserIcons = filterIconsByType(icons, 'user');

// filteredAnimalIcons conterrà le icone cat, crow, dog, dove, dragon, horse, hippo, fish
// filteredVegetableIcons conterrà le icone carrot, apple-alt, lemon, pepper-hot
// filteredUserIcons conterrà le icone user-astronaut, user-graduate, user-ninja, user-secret
//------------------------------------------------

// filterSelection("all")
// function filterSelection(c) {
// 	let x, i;
// 	x = document.getElementsByClassName("icons");
// 	if (c === "all") c = " ";
// 	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
// 	for (i = 0; i < x.length; i++) {
// 		myRemoveClass(x[i], "show");
// 		if (x[i].className.indexOf(c) > -1) myAddClass(x[i], "show");
// 	}
// }

// // Show filtered elements
// function myAddClass(element, name) {
// 	let i, arr1, arr2;
// 	arr1 = element.className.split(" ");
// 	arr2 = name.split(" ");
// 	for (i = 0; i < arr2.length; i++) {
// 		if (arr1.indexOf(arr2[i]) == -1) {
// 			element.className += " " + arr2[i];
			
// 		}
// 	}
// }

// // Hide elements that are not selected
// function myRemoveClass(element, name) {
// 	let i, arr1, arr2;
// 	arr1 = element.className.split(" ");
// 	arr2 = name.split(" ");
// 	for (i = 0; i < arr2.length; i++) {
// 		while (arr1.indexOf(arr2[i]) > -1) {
// 			arr1.splice(arr1.indexOf(arr2[i]), 1);
// 		}
// 	}
// 	element.className = arr1.join(" ");
// 	console.log(arr1);
// }


// // Add active class to the current control button (highlight it)
// // var btnContainer = document.getElementById("app");
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
// 	});
// }
