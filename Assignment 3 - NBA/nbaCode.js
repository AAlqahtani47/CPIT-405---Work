function filterByTeam() {
    let input = document.getElementById("searchBox");
    let word = input.value.toLowerCase();
    let tables = document.querySelectorAll(".nbaSchedule");
    for (table of tables){
        let rows = document.querySelectorAll("tbody tr");
        doFilter(rows, 1, word);
    }
}

function doFilter(rows, column, word) {
    for (let i = 0; i < rows.length; i++) {
        let td = rows[i].getElementsByTagName("td")[column];
        let txtValue = td.innerText;
        if (txtValue.toLowerCase().indexOf(word) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}


//////New Code (Methods are called by clicking on their respective option.)//////
function filterByBroadcasterbein() {
    let tables = document.querySelectorAll(".nbaSchedule");
    let word = "bein sports";
    for (table of tables){
        let rows = document.querySelectorAll("tbody tr");
        doFilter2(rows, 2, word);
    }
}


function filterByBroadcasternbatv() {
    let tables = document.querySelectorAll(".nbaSchedule");
    let word = "nba tv";
    for (table of tables){
        let rows = document.querySelectorAll("tbody tr");
        doFilter2(rows, 2, word);
    }
}


function filterByBroadcasternbapass() {
    let tables = document.querySelectorAll(".nbaSchedule");
    let word = "nba league pass";
    for (table of tables){
        let rows = document.querySelectorAll("tbody tr");
        doFilter2(rows, 2, word);
    }
}

function doFilter2(rows, column, word) {
    for (let i = 0; i < rows.length; i++) {
        let td = rows[i].getElementsByTagName("td")[column];
        let txtValue = td.innerText;
        if (txtValue.toLowerCase().localeCompare(word) = 0) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}