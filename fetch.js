fetch ('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs') 
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.facet_groups[0].facets[1].name);
    let annee = data.facet_groups[0].facets[1].name;
    document.getElementById("Annee").innerHTML = annee;
    
    // const h1 = document.getElementById ("Annee"); 
    

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

