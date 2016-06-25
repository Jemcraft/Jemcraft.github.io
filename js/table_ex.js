window.onload = function() {
    editableGrid = new EditableGrid("Assignments"); 
    editableGrid.tableLoaded = function() { this.renderGrid("tablecontent", "testgrid table table-hover table-bordered"); };
    editableGrid.loadJSON("data/example.json");
}
