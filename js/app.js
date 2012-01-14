// Work on the "#page" HTML-element.
$.sammy("#page", function() {
    
    // Use the Handlebars plugin.
    this.use('Handlebars', 'hb');

    // Start routes.
    myapp.route.person(this);

    this.helpers({

        // A helper to make rendering with many view-models easier.
        renderAll: function(template, partials, models) {
            var context = this;
            context.render(template, myapp.model.compileAll(models), function(html) {
                context.swap(html);
                myapp.model.applyAll(models);
            }, partials);
        }

    });

}).run();
