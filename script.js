$(document).ready(function () {

    //declare variables, append to HTML

    var today = moment().format('MMMM Do YYYY');
    console.log(today)
    $(".currentDay").append(today);

    var now = parseInt(moment().format('HH'));
    console.log(now)

    var $9 = $("#9");
    var $10 = $("#10");
    var $11 = $("#11");
    var $12 = $("#12");
    var $13 = $("#13");
    var $14 = $("#14");
    var $15 = $("#15");
    var $16 = $("#16");
    var $17 = $("#17");

    //timeblock is color coded to indicate whether it is in the past, 
    //present, or future using a function and if then statements. 

    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < now) {
            $(this).attr("style", "background: #FAEBD7;");
        }

        if (name > now) {
            $(this).attr("style", "background: #FFE4E1;")
        }

        if (name === now) {
            $(this).attr("style", "background: #F0FFF0;");
        }
    })

    //button click function, save items to local storage
    //by using local storage syntax and calling the values
    //by using ID selector. 

    $("button").on("click", function () {

        localStorage.setItem("9AM", ($9.val()))
        localStorage.setItem("10AM", ($10.val()))
        localStorage.setItem("11AM", ($11.val()))
        localStorage.setItem("12AM", ($12.val()))
        localStorage.setItem("13PM", ($13.val()))
        localStorage.setItem("14PM", ($14.val()))
        localStorage.setItem("15PM", ($15.val()))
        localStorage.setItem("16PM", ($16.val()))
        localStorage.setItem("17PM", ($17.val()))

    })

    //get saved content that has been stored in the Local Storage 
    //and display it on the screen so that if the user 
    //refreshes the page, their content will still be displayed 
    //until local storage clears. localStorage.clear();

    $("#9").append(localStorage.getItem("9AM"));
    $("#10").append(localStorage.getItem("10AM"));
    $("#11").append(localStorage.getItem("11AM"));
    $("#12").append(localStorage.getItem("12AM"));
    $("#13").append(localStorage.getItem("13PM"));
    $("#14").append(localStorage.getItem("14PM"));
    $("#15").append(localStorage.getItem("15PM"));
    $("#16").append(localStorage.getItem("16PM"));
    $("#17").append(localStorage.getItem("17PM"));

})
