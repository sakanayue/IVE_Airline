let airport = ["Airport HKG", "Airport JP", "Airport UK", "Airport US", "Airport TW"];

let input = document.getElementById("from-flight-input-autocomplete");
let input2 = document.getElementById("to-flight-input-autocomplete");

input.addEventListener("keyup", (e) => {
    // loop through airport array
    removeElement();
    for (let i of airport) {
        //    console.log(i) :test uses ;

        if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != "") {
            //creat autocomplete list
            let listitem = document.createElement("li");
            listitem.classList.add("list-items");
            listitem.style.cursor = "pointer";
            listitem.setAttribute("onclick", "displayDepartureAirport('" + i + "')");

            // display matched word in bold
            let word = "<b>" + i.substring(0, input.value.length) + "</b>"
            word += i.substring(input.value.length);

            //console.log(word) : testing only
            listitem.innerHTML = word;
            document.querySelector("#fromlist").appendChild(listitem);


        }
    }

});

input2.addEventListener("keyup", (e) => {
    // loop through airport array
    removeElement();
    for (let i of airport) {
        //    console.log(i) :test uses ;
        if (i.toLowerCase().startsWith(input2.value.toLowerCase()) && input2.value != "") {
            //creat autocomplete list
            let listitem = document.createElement("li");
            listitem.classList.add("list-items");
            listitem.style.cursor = "pointer";
            listitem.setAttribute("onclick", "displayArrivalAirport('" + i + "')");

            // display matched word in bold
            let word = "<b>" + i.substring(0, input2.value.length) + "</b>"
            word += i.substring(input2.value.length);

            //console.log(word) : testing only
            listitem.innerHTML = word;
            document.querySelector("#tolist").appendChild(listitem);


        }
    }

});

function displayDepartureAirport(value) {
    input.value = value;
    removeElement();
}

function displayArrivalAirport(value) {
    input2.value = value;
    removeElement();

}

function removeElement() {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
};

