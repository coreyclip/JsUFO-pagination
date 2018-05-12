
let $tbody = document.querySelector("tbody");
let $stateInput = document.querySelector("#state");
let $dateInput = document.querySelector("#date");
let $cityInput = document.querySelector("#city");
let $countryInput = document.querySelector("#country");
let $shapeInput = document.querySelector("#shape");

let $searchBtn = document.querySelector("#search");



// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

let filteredRecords = data.slice(0,50)

function renderTable(){
    $tbody.innerHTML = "";
    let len = filteredRecords.length
    
    for (let i = 0; i < len; i++){
        
        //get records for row
        let record = filteredRecords[i]
        let fields = Object.keys(record)
        
        // make row in tbody
        let $row = $tbody.insertRow(i)
        
        for (var j = 0; j < fields.length; j++){
            //build out the row
            let field = fields[j]
            let $cell = $row.insertCell(j);
            console.log(record[field])
            $cell.innerText = record[field];
        }
    }
    
    let rows = d3.select("#table_id").selectAll("tr").data(filteredRecords)
        .enter()
        .append();
    
    let cells = rows.selectAll('td').data(function(d){return d;})
        .enter()
        .append("td")
        .text(function(d){return d;});

    d3.select("pager").datum({portion: 0});
    d3.select("pager").select("#next").on
    ("click", function(d){
        console.log("next button")
        d.portion += 25;
        redraw (d.portion);
    });
    d3.select("btn").select("#previous").on
    ('click', function(d){
        console.log('previous button')
        d.portion -= 25;
        redraw (d.portion)
    });
    function redraw (start) {
        d3.select("table").selectAll("tr")
          .style("display", function(d,i) {
            return i >= start && i < start + 25 ? null : "none";
        })
    }
    redraw(0);
}  


function handleSearchButtonClick() {
    // format user input
    let filterDate = $dateInput.value.trim().toLowerCase();
    let filterState = $stateInput.value.trim().toLowerCase();
    let filterCity = $cityInput.value.trim().toLowerCase();
    let filterCountry = $countryInput.value.trim().toLowerCase();
    let filterShape = $shapeInput.value.trim().toLowerCase();
    
    console.log("search for ", filterDate, filterState)
    
    filteredRecords = data.filter(function(record){
        
        let RecordsDate = record.datetime.toLowerCase();
        let RecordsState = record.state.toLowerCase();
        let RecordsCity = record.city.toLowerCase();
        let RecordsCountry = record.country.toLowerCase();
        let RecordsShape = record.shape.toLowerCase();
        

        //TO DO allow for one or more fields to be blank

        if (filterDate) {
            
        }
        

        return RecordsDate === filterDate 
        || RecordsState === filterState
        || RecordsCity === filterCity
        || RecordsCountry === filterCountry
        || RecordsShape === filterShape;
    });
    renderTable();
    



}



// render table for first time load
renderTable();


