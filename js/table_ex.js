function load_tables() {

    editableGrid1 = new EditableGrid("Assignments"); 
    editableGrid1.tableLoaded = function() { this.renderGrid("assigns", "testgrid grid-assigns table table-bordered"); };
    editableGrid1.loadJSON("data/example_assign.json");

    editableGrid2 = new EditableGrid("Jobs"); 
    editableGrid2.tableLoaded = function() { this.renderGrid("jobs", "testgrid grid-jobs table table-bordered"); };
    editableGrid2.loadJSON("data/example_jobs.json");

    editableGrid3 = new EditableGrid("Users"); 
    editableGrid3.tableLoaded = function() { this.renderGrid("users", "testgrid grid-users table table-bordered"); };
    editableGrid3.loadJSON("data/example_users.json");

}

$( document ).ready(function() {

    load_tables();

});
