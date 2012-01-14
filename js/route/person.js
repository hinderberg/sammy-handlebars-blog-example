myapp.route.person = function(app) {

    // Define a route. 
    app.get("", function(context) {

        // Fetch a list of people.
        myapp.api.person.all(function(people) {

            // Which template files to use.
            var template = "template/person-list.hb";
            var partials = { searchbox: "template/shared/searchbox.hb" };

            // Which view-models to use.
            var searchview = myapp.model.create(myapp.view.shared.searchbox);
            var peopleview = myapp.model.create(myapp.view.people, { people: people });
            
            context.renderAll(template, partials, [peopleview, searchview]);
        });
    });
};
