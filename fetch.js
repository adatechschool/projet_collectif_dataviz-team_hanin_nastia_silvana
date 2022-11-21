fetch ('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs') 
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.facet_groups[0].facets[1].name);
    let annee = data.facet_groups[0].facets[1].name;
    document.getElementById("Annee").innerHTML = annee;
<<<<<<< HEAD
    console.log(data.facet_groups[13].facets[0].name); 
    let test = data.facet_groups[13].facets[0].name;
    document.getElementById("Journée internationale").innerHTML = test;


=======
    
>>>>>>> 5d9f6f1957adac5e594b73bcf6015a24d6f69486
    // const h1 = document.getElementById ("Annee"); 
    //
    

    //return donnees.map(function(a)) 
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

