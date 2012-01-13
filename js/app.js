// Jobb på HTML-elementet “#page”. 
$.sammy("#page", function() {

    // Bruk Handlebars-plugin.
    this.use('Handlebars', 'hb');

    // Definer en route.
    this.get("", function (context) {

        // Gjør et kall mot serveren.
        myapp.api.person.all(function(people) {

            // Definer hvilken template-filer som trengs.
            var template = "template/person-list.hb";

            // Instansier view-modellen med dataene fra serveren.
            var viewmodel = myapp.model.create(myapp.view.people, {
                people: people  
            });

            // Bytt ut innholdet i “#page” med ny HTML.
            context.render(template, viewmodel.compile(), function(html) {
                context.swap(html);
            });
        });
    });

}).run();
