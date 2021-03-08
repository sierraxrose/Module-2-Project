$(document).ready( function () {

    //num bones constant
    const NUM_BONES = 5;

    //container for grid
    const container = document.getElementById("container");

    function makeRows(rows, cols) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        for (i = 0; i < (rows * cols); i++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
        }
}
    makeRows(NUM_BONES, NUM_BONES);


    // get a random number to use to distribute bones

    //let bones = Math.floor(Math.random () * 25);


    //create a loop to generate five bone locations



    // change the color of the tile to brown

    $(".grid-item").click( function () {
            $(this).addClass("brown");

    // increase danger meter & update remaining bones (i tried to do this with a while loop but my page wouldn't load when i did this, it only loads when it's an if statement)
             if ($(this).hasClass("brown")) {
                $("#bar").addClass("danger");
                document.getElementById("remaining").innerHTML = "Remaining Bones: 4";
            }
    })


        if ($("#bar").hasClass("danger")) {
            $("#bar").addClass("danger2");
            document.getElementById("remaining").innerHTML = "Remaining Bones: 3";
        }



        if ($("#bar").hasClass("danger2")) {
            $("#bar").addClass("danger3");
            document.getElementById("remaining").innerHTML = "Remaining Bones: 2";
        }


        if ($("#bar").hasClass("danger3")) {
            $("#bar").addClass("danger4");
            document.getElementById("remaining").innerHTML = "Remaining Bones: 1";
        }


        if ($("#bar").hasClass("danger4")) {
            $("#bar").addClass("danger5");
            document.getElementById("remaining").innerHTML = "Remaining Bones: 0";
        }



    // if you click on a bone, a bone image pops up


    // if all bones have been found, a happy message is displayed, make all squares unclickable

    // if the danger meter reaches 100%, a sad message is displayed, make all squares unclickable

    $(".grid-item").click( function () {
        if ($("#bar").hasClass("danger5")) {
            alert("You have lost.");
        }
    })


})