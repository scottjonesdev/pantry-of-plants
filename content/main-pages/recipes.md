<div id="recipe-search">
	<h1>Recipes</h1>
	<input type="text" id="searchInput" onkeyup="search()" placeholder="Search recipes...">
</div>

<div id="recipe">
	
</div>
<script>
	//setup arrays for recipe data
	var names = [];
	var images = [];
	var links = [];

	//recipe names
	names[0] = "<p>Banana Loaf / Muffins</p>";
	names[1] = "<p>Maple Bread</p>";
	names[2] = "<p>Maple Bread</p>";
	names[3] = "<p>Maple Bread</p>";

	//recipe image links
	images[0] = '<img src="../images/recipe-images/banana-muffin.JPG">';
	images[1] = '<img src="../images/recipe-images/bread-3.JPG">';
	images[2] = '<img src="../images/recipe-images/bread-3.JPG">';
	images[3] = '<img src="../images/recipe-images/bread-3.JPG">';

	//recipe hrefs
	links[0] = '<a href="banana-muffins.md.html"</a>';
	links[1] = '<a href="maple-bread.md.html"</a>';
	links[2] = '<a href="maple-bread.md.html"</a>';
	links[3] = '<a href="maple-bread.md.html"</a>';

	//show arrays in console
	console.log(names, images, links);

	var box;

	//loop through recpie names, images, and links to display on page
	for (var i = 0; i < names.length; i++) {
		box = document.createElement('div');
		box.className = 'boxes';
		box.innerHTML = links[i] + names[i] + images[i];
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

