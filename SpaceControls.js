function SpaceControls() {	
	// Add listener on keyboard press
	document.addEventListener('keydown', onKeyDown, false);

	function onKeyDown(evt) {
		switch (evt.keyCode) {
			// Space key
			case 32:
				fall();
				break;

			// Left arrow key
			case 39:
				if(rotationDirection != "none") {
					return;
				}
				rotationDirection = "-y";
				cpt = 10;
				break;

			// Right arrow key
			case 37:
				if(rotationDirection != "none") {
					return;					
				}
				rotationDirection = "y";
				cpt = 10;
				break;
					
			// Up arrow key
			case 38:
				if(rotationDirection != "none") {
					return;					
				}
				rotationDirection = "x";
				cpt = 10;
				break;

			// Down arrow key
			case 40:
				if(rotationDirection != "none") {
					return;					
				}
				rotationDirection = "-x";
				cpt = 10;
				break;	
		}
	}

	// Function that reset sphere acceleration and score
	function fall() {
		sphereSpeed = 0.5;
		score = 0;
		falling = true;
	}
}