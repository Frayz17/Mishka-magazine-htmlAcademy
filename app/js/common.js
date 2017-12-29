function navToogleFunction() {
    var toogleNav = document.getElementById("navigationPanel-nav_id");
    if (toogleNav.className === "navigationPanel-navigation") {
        toogleNav.className += " hidden";
    } else {
        toogleNav.className = "navigationPanel-navigation";
    }

		var toogleHamb = document.getElementById("hamburger-barBox_id");
		if (toogleHamb.className === "hamburger-barBox") {
		    toogleHamb.className += " open";
		} else {
		    toogleHamb.className = "hamburger-barBox";
		}    
}


document.getElementById("hamburger_id").addEventListener("click", function() {
	navToogleFunction();
});