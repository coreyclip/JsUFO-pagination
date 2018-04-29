
let $tbody = document.querySelector("tbody");
let $CountryInput = document.querySelector("#country");
let $dateInput = document.querySelector("#date");
let $searchBtn = document.querySelector("#search");
// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

function handleSearchButtonClick() {
    
    //let filterdate = $dateInput.value.trim().toLowerCase();

    filteredDate = data.filter(function(date){
        var addressState = address.state.toLowerCase();

        return addressState === filterState;
    });
        renderTable();
}