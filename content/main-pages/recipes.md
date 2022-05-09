<div id="recipe-search">
	<h1>Recipes</h1>
	<input type="text" id="searchInput" onkeyup="search()" placeholder="Search recipes...">
</div>

<div id="recipe">
	
</div>
<script>
	//js object to hold recipe names, images, links
	const recipes = 
	[
		{
			name: '<p>Banana Loaf / Muffins</p>', 
			image: '<img src="images/thumbnails/banana-muffin.JPG" alt="Banana Muffins">',
			link: '<a href="banana-muffins.md.html"</a>'
		},
		{
			name: '<p>Maple Bread</p>', 
			image: '<img src="images/thumbnails/bread-3.JPG" alt="Maple Bread">',
			link: '<a href="maple-bread.md.html"</a>'
		},
		{
			name: '<p>Croutons</p>', 
			image: '<img src="images/thumbnails/croutons-2.JPG" alt="Croutons">',
			link: '<a href="croutons.md.html"</a>'
		},
		{
			name: '<p>Chocolate Chip Muffins</p>', 
			image: '<img src="images/thumbnails/chocolate-chip-muffins.JPG" alt="Chocolate Chip Muffins">',
			link: '<a href="chocolate-chip-muffins.md.html"</a>'
		},
		{
			name: '<p>Pizza Dough</p>', 
			image: '<img src="images/thumbnails/pizza.JPG" alt="Pizza">',
			link: '<a href="pizza-dough.md.html"</a>'
		},
		{
			name: '<p>Kale Salad</p>', 
			image: '<img src="images/thumbnails/kale-salad.JPG" alt="Kale Salad">',
			link: '<a href="kale-salad.md.html"</a>'
		},
		{
			name: '<p>Apple Pie</p>', 
			image: '<img src="images/thumbnails/apple-pie.JPG" alt="Apple Pie">',
			link: '<a href="apple-pie.md.html"</a>'
		},
		{
			name: '<p>Cinnamon Buns</p>', 
			image: '<img src="images/thumbnails/cinnamon-buns.JPG" alt="Cinnamon Buns">',
			link: '<a href="cinnamon-buns.md.html"</a>'
		},
		{
			name: '<p>Ginger Cookies</p>', 
			image: '<img src="images/thumbnails/ginger-cookies.JPG" alt="Ginger Cookies">',
			link: '<a href="ginger-cookies.md.html"</a>'
		},
		{
			name: '<p>Brownies</p>', 
			image: '<img src="images/thumbnails/brownies.JPG" alt="Brownies">',
			link: '<a href="brownies.md.html"</a>'
		},
		{
			name: '<p>Focaccia</p>', 
			image: '<img src="images/thumbnails/quick-focaccia.JPG" alt="focaccia">',
			link: '<a href="focaccia.md.html"</a>'
		},
		{
			name: '<p>Squash Soup</p>', 
			image: '<img src="images/thumbnails/squash-soup.JPG" alt="Squash Soup">',
			link: '<a href="squash-soup.md.html"</a>'
		}
	];

	var box;

	//loop through recpie names, images, and links to display on page
	for (var i = 0; i < recipes.length; i++) {
		box = document.createElement('div');
		box.className = 'boxes';
		box.innerHTML = recipes[i].link + recipes[i].name + recipes[i].image;
		document.getElementById('recipe').appendChild(box);
	}

	//function to search recipes
	function search() {
		// Declare variables
		var input, filter, div, boxes, a, i, txtValue;
		input = document.getElementById('searchInput');
		filter = input.value.toUpperCase();
		div = document.getElementById("recipe");
		boxes = document.getElementsByClassName('boxes');

		// Loop through all boxesst items, and hide those who don't match the search query
		for (i = 0; i < boxes.length; i++) {
			a = boxes[i].getElementsByTagName("a")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				boxes[i].style.display = "";
			} else {
				boxes[i].style.display = "none";
			}
		}
	}
</script>

