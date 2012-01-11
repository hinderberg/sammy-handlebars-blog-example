myapp = {};
myapp.models = {};
myapp.api = {};
myapp.views = {};

// Metode for å instansiere en modell.
myapp.models.create = function (prototype, instancedata) {
    var instance = Object.create(prototype);
    instance.data = instancedata;
    return instance;
};

// Prototype for person-instanser.
myapp.models.person = {
    name:function () {
        return this.data.firstname + this.data.lastname;
    }
};

// Metode for å lage mange instanser.
myapp.models.createAll = function (prototype, instanceDataArray) {
    return instanceDataArray.map(function (instancedata) {
        return myapp.models.create(prototype, instancedata);
    });
};

myapp.api.person = {
    // Hent listen over alle personer fra serveren.
    all:function (callback) {
        callback(myapp.models.createAll(
            myapp.models.person,
            [
                {firstname:"Fofo", lastname:"BarBar"},
                {firstname:"Fofo", lastname:"BarBar"}
            ]));

    }
};

// Bruk av API-koden.
myapp.api.person.all(function (people) {
// “people” er her et array av person-instanser.     
});

// Prototype for en view-modell som inneholder people.
myapp.views.people = {
    init:function () {
        this.addClickEvents();
    },
    people:function () {
        return this.data.people;
    },
    addClickEvents:function () {
        $("#people li").click(function (event) {
        });
    }
};

Handlebars.registerHelper("debug", function (optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);

    if (optionalValue) {
        console.log("Value");
        console.log("====================");
        console.log(optionalValue);
    }
});


// Jobb på HTML-elementet “#page”. 
// Her tilsvarer dette hele siden i nettleseren.
$.sammy("#page",
    function () {
        this.use('Handlebars', 'hb');


        // Definer en route.
        this.get(/^[^#]*(#\/)?$/, function (context) {

            // Gjør et kall mot serveren (evt mot cache).
            myapp.api.person.all(function (people) {

                // Definer hvilke template-filer som trengs.
                var template = "templates/person-list.hb";

// Instansier view-modellen med dataene fra serveren.
                var viewmodel = myapp.models.create(myapp.views.people, {people:people});
                viewmodel.init();

                // Bytt ut innholdet i “#page” med ny HTML.
                context.render(template, viewmodel, function (html) {
                    context.swap(html)
                });
            });
        });
    }).run();