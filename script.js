
let $tbody = document.querySelector("tbody");
let $CountryInput = document.querySelector("#country");
let $dateInput = document.querySelector("#date");
let $searchBtn = document.querySelector("#search");
// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

let filteredRecords = data

function renderTable(){
    $tbody.innerHTML = "";
    let len = filteredRecords.length
    //let len = 100 //lets just do 100 rows for now
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
            $cell.innnerText = record[field];
        }
    }
}


function handleSearchButtonClick() {
    // format user input
    let filterDate = $dateInput.value.trim();
    console.log("search for ", filterDate)
    filteredDate = data.filter(function(date){
        var RecordsDate = data.datetime.value;

        return filterDate === RecordsDate;
    });
        renderTable();

}

// render table for first time load
renderTable();