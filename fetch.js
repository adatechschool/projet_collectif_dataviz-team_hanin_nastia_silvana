fetch ('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs') 
.then(function(response) {
    return response.json();
})
.then(function(data) {
    //console.log(data.facet_groups[0].facets[1].name);
    //let annee = data.facet_groups[0].facets[1].name;
    //document.getElementById("Annee").innerHTML = annee;
    //console.log(data.facet_groups[13].facets[0].name); 
    // let test = data.facet_groups[13].facets[0].name;
    // let URL = "https://www.paris.fr/evenements/journee-internationale-de-lutte-contre-les-violences-faites-aux-femmes-27631"
    // document.getElementById("Journée internationale").innerHTML = test.link(URL);
    console.log(data); 
    //console.log(records[0].fields.address_name)


    // const h1 = document.getElementById ("Annee"); 

    // return donnees.map(data.facet_groups[13]); 
})
.catch(function(error) {

}); 
// const url = 'https://...'; ce qu'on veut afficher 

function createNode(element) {
	return document.createElement(element);
}
function append(parent, el) {
	return parent.appendChild(el);
}


// let img = document.createElement("img");
// img.src = "Pic2.jpeg";

// document.getElementById("pic_spectacle").appendChild(img);
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  } 
