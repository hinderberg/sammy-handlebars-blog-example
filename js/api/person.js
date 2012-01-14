/* Metoder for å gjøre kall mot person-API. */
myapp.api.person = {

    all: function(callback) {
        /* Eksempel på data fra serveren: en liste over alle personer. */
        /* Her ville man vanligvis gjort et Ajax-kall mot serveren. */
        callback(myapp.model.createAll(myapp.model.person, [
            {firstname:"Foo", lastname:"Bar"},
            {firstname:"Baz", lastname:"Bar"}
        ]));
    }

};
