d3.selectAll("body").on("change", updatePage);

function updatePage() {
    var dropDownMenu = d3.selectAll("#selectOption").node();
    var dropDownId = dropDownMenu.id;
    var dropDownValue = dropDownMenu.value;

    console.log(dropDownId);
    console.log(dropDownValue);
};