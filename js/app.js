// Jobb på HTML-elementet “#page”. 
$.sammy("#page", function() {

    // Bruk Handlebars-plugin.
    this.use('Handlebars', 'hb');
    myapp.route.person(this);

}).run();
