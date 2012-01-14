// Prototype for en view-modell som inneholder personer.
myapp.view.people = myapp.model.create(myapp.model.viewmodel, {
    
    compile: function() {
        this.addClickEvents();
        var partial = this.compilePartial();
        return { 
            people: this.people,
            partial: partial
        };
    },

    addClickEvents: function() {
        $("#page").on("click", "#people li", function (event) {
            alert($(this).text() + " clicked!");
        });
    }

});
