myapp.route.person = function(app) {

    // Definer en route.
    app.get("", function (context) {

        // Gjør et kall mot serveren.
        myapp.api.person.all(function(people) {

            // Definer hvilken template-filer som trengs.
            var template = "template/person-list.hb";

              // Eventuelle partials.
            var partials = { searchbox: "template/shared/searchbox.hb" };

            // Instansierer partial view-modellen
            var searchbox = myapp.model.create(myapp.view.shared.searchbox);

            // Instansier view-modellen med dataene fra serveren.
            var viewmodel = myapp.model.create(myapp.view.people, {
                people: people,
                searchbox : searchbox
            });

            // Bytt ut innholdet i “#page” med ny HTML.
            context.render(template, viewmodel.compile(), function(html) {
                context.swap(html);
            }, partials);
        });
    });
};
