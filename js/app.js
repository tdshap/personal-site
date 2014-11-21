function aboutPage(){
	var div = document.createElement("div")
	div.addClass("about")
	div
}


$( document ).ready(function() {
    

	var about = $("li.nav-item")[0]
	var portfolio = $("li.nav-item")[1]
	var contact = $("li.nav-item")[2]
	about.addEventListener("click", aboutPage() )
	portfolio.addEventListener("click", portfolioPage() )
	contact.addEventListener("click", contactPage() )





});