
let $tbody = document.querySelector("tbody");
let $CountryInput = document.querySelector("#country");
let $dateInput = document.querySelector("#date");
let $searchBtn = document.querySelector("#search");
// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

let filteredRecords = data.slice(0,20)

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
}


function handleSearchButtonClick() {
    // format user input
    let filterDate = $dateInput.value.trim();
    let filterCountry = $CountryInput.value.trim().toLowerCase();
    
    
    console.log("search for ", filterDate, filterCountry)
    
    filteredRecords = data.filter(function(record){
        var RecordsDate = record.datetime.value.trim();
        let RecordsCountry = record.country.value.trim().toLowerCase();

        return RecordsDate === filterDate &&
               RecordsCountry === filterCountry;
    });
    renderTable();

}

// render table for first time load
renderTable();