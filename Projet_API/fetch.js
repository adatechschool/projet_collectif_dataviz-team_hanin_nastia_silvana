// fetch que-faire-a-Paris API/Culture/Theatre
const url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs&refine.tags=Th%C3%A9%C3%A2tre';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // data.records -> array of events, data.records[0].fields.cover_url

        const $slider = jQuery('.splide .splide__list');
        for (let i = 0; i < 10; i++) {
            $slider
                .append(`<li class="splide__slide">
            <a href= ${data.records[i].fields.access_link} >
                <img class="carousel" src="${data.records[i].fields.cover_url}"/></a>
                <p style = "background-color: noir; text-align:center"> ${data.records[i].fields.title}</p>
          </li>`);
        }
        var splide = new Splide('.splide', {
            type: 'loop',
            perPage: 1,
            autoplay: true,
        });

        splide.mount();

    });

// filtering fetch with recents events
let myUrl = "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&rows=5&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs&refine.tags=Th%C3%A9%C3%A2tre&refine.date_start=2023"

fetch(myUrl)
    .then(response => response.json())
    .then(data => {
        const $card = jQuery('.mycontainer .event');
        for (let i = 0; i < 3; i++) {
            $card
                .append(`
                <div class="column" style ="float:left; padding: 0 10px; width:33%">
                        <div class="card" style="padding:16px; text-align:center; backgroung-color:#2E3336">
                            <a href=${data.records[i].fields.access_link}>
                             <img src="${data.records[i].fields.cover_url}" style="width:70%;"/>
                            </a>
                            <div class="container">
                             <h3 id="event_Title">${data.records[i].fields.title}</h3>
                             <p id="event_place">${data.records[i].fields.address_name}</p>
                        </div>
                </div>`)

        }

    })

// fetching the weather
meteoUrl = "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&daily=temperature_2m_max,rain_sum,snowfall_sum&current_weather=true&timezone=Europe%2FBerlin"
fetch(meteoUrl)
    .then(response => response.json())
    .then(jsonResp => {
        //current day description
        let d = new Date(jsonResp.daily.time[0]).toDateString()
        console.log(d)
        const dArr = d.split(" ")
        let mymonth = dArr[1]
        let myday = dArr[2]
        const $weather = jQuery('.weatherData');
        $weather
            .append(
                `<h1 class="temperature"> ${jsonResp.current_weather.temperature}&deg C</h1>
                <h2 class="rain">Rain ${jsonResp.daily.rain_sum[0]} mm</h2>
                <h3 class="city">Paris</h3>
                <div class="date">
                    <h4 class="description"> ${myday} <br><br> ${mymonth}</h4>
                </div>`
            )
    })

//search Events
function searchEvents(data) {
    const capitalized = data.charAt(0).toUpperCase() + data.slice(1);
    //const start= date_start

    const url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=date_start&facet=date_end&facet=date
    _start&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs&refine.tags=${capitalized}`

    fetch(url)
        .then((response) => response.json())
        .then(jsonData => {
            console.log(jsonData)
            let results = jsonData.records.map(element => element.fields.title);
            console.log(results);
            renderResults(results)
            document.getElementById("errorMessage").innerHTML = "";
        })
        .catch((error) => {
            document.getElementById("errorMessage").innerHTML = error;
            renderResults([]);
        });
}

//searchEvents("atelier")
function renderResults(myResults) {
    const list = document.getElementById("resultsList")
    list.innerHTML = "";
    myResults.map(result => {
        let element = document.createElement("li")
        element.innerText = result;
        list.appendChild(element);
    });
}

window.onload = () => {
    const searchBarElement = document.getElementById("searchBar")
    console.log(searchBarElement)
    searchBarElement.onkeyup = (event) => {
        if (searchBarElement.value.trim().length === 0) {
            return;
        }
        searchEvents(searchBarElement.value)
    }
};