//? Task 1

$(document).ready(function () {
    $("h2.head").css("background-color", "green");
    $("h2.head .inner").css("font-size", "35px");
});

//? Task 2

$(document).ready(function () {
    $('a[href^="https://"]').attr('target', '_blank');
});

//? Task 3

$("h3 + div").each(function () {
    $(this).insertBefore($(this).prev("h3"));
});

//? Task 4 

$(document).ready(function () {
    $("input[type='checkbox']").change(function () {
        var checkedBoxes = $("input[type='checkbox']:checked").length;

        if (checkedBoxes == 3) {
            $("input[type='checkbox']").attr("disabled", "disabled");
        }
    });
});