function changeSlider(image, id) {

	document.getElementById('imageSlider').src = "image/" + image;
	switch (id) {
		case 'degea':
					document.getElementById('degea').style.color = "red";
					document.getElementById('messi').style.color = "black";
					document.getElementById('kaka').style.color = "black";
					document.getElementById('ronaldo').style.color = "black";
					break;
			case 'messi':
					document.getElementById('messi').style.color = "red";
					document.getElementById('degea').style.color = "black";
					document.getElementById('kaka').style.color = "black";
					document.getElementById('ronaldo').style.color = "black";
					break;
			case 'kaka':
					document.getElementById('kaka').style.color = "red";
					document.getElementById('messi').style.color = "black";
					document.getElementById('degea').style.color = "black";
					document.getElementById('ronaldo').style.color = "black";
					break;
			case 'ronaldo':
					document.getElementById('ronaldo').style.color = "red";
					document.getElementById('messi').style.color = "black";
					document.getElementById('kaka').style.color = "black";
					document.getElementById('degea').style.color = "black";
					break;
	}

}