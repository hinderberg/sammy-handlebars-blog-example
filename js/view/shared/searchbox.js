// Prototype for en view-modell som inneholder søke muligheter.
myapp.view.shared.searchbox = myapp.model.create(myapp.model.viewmodel, {
    
    compile: function() {
        this.addClickEvents();
        return {};
    },

    addClickEvents: function() {
        $("#page").on("click", "#search-button", function (event) {
            alert($(this).text() + " clicked!");
        });
    }
});
