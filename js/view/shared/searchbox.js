myapp.view.shared.searchbox = myapp.model.create(myapp.model.viewmodel, {
    
    compile: function() {
        return {};
    },

    apply: function() {
        $("#search-button").click(function(event) {
            alert($(this).text() + " clicked!");
        });
    }
    
});
