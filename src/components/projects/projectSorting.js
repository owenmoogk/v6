// function that filters by the type of entry
export function filterProjects(filterBy) {

	// set the all to active, all else to not active
	var current = document.getElementsByClassName("active");
	current[0].className = current[0].className.replace(" active", "");
	var currentButtonClass = "sort_"+filterBy
	var chosenButton = document.getElementsByClassName(currentButtonClass)[0]
	chosenButton.className += ' active'

    // pulls all entries
    var entries = document.getElementsByClassName("content");

    // loops thru them all
    for (var i = 0; i < entries.length; i++) {

        // if we're filtering by "all" we need to show all
        if (filterBy === "all") {
            entries[i].style.display = "";
        }

        // if we're filtering anything else, then ...
        else {
            // gets the p element holding the type
            var type = entries[i].getElementsByClassName("type")[0];

            // if it matchs what we are filtering by it stays
            if (type.innerHTML.toString().toLowerCase() === filterBy) {
                entries[i].style.display = "";
            }
            // else it will just be gone
            else {
                entries[i].style.display = "none";
            }
        }
    }
}

// sorts by the dropdown
export function sortProjects() {

    // pulls the value we're soring by
    var sortValue = document.getElementById("mySort").value;

    var sortBy; // old what we're soring by
    var order; // hold sort order

    // based on the value of sort, we can make an order and sortby
    if (sortValue === "alpha-desc") {
        sortBy = "alpha";
        order = "asc";
    }
    else if (sortValue === "alpha-asc") {
        sortBy = "alpha";
        order = "desc";
    }

    // some varibles we'll need
    var entries = document.getElementsByClassName("content"); // pulls all entries
    var switching = true; // shows that we're still running through the entries
    var shouldSwitch; // this var will hold whether or not a switch between two rows needs to be made
    var entryNum; // will store what entry number we're at
    var currentEntry; // will hold the current entry plain "text"
    var nextEntry; // will hold the next entry plain "text"

    while (switching) {
        // set it that there is no switching done, this may be changed later
        switching = false;
        // run through all the entries, except last, as at that point we wont be able to compare it to the next
        for (entryNum = 0; entryNum < entries.length - 1; entryNum++) {
            // state that there is need for switching at the moment
            shouldSwitch  = false;
            
            // if date
            if (sortBy === "alpha" || sortBy === 'alpha') {
                currentEntry = entries[entryNum].getElementsByClassName("content-title")[0].innerHTML;
                nextEntry = entries[entryNum + 1].getElementsByClassName("content-title")[0].innerHTML;
            }

            // if we're doing ascending order
            if (order === "asc") {
                if (currentEntry > nextEntry) {
                    // if this is true, means we need to to place the current one above the next one
                    shouldSwitch = true;
                    break;
                }
            }
            if (order === "desc") {
                if (currentEntry < nextEntry) {
                    // if this is true, means we need to to place the current one above the next one
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            entries[entryNum].parentNode.insertBefore(entries[entryNum + 1], entries[entryNum]);
            switching = true;
        }
    }
}