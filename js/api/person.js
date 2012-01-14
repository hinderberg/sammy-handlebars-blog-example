// Eksempel på data fra serveren: en liste over alle personer.
var dummydata = [
    {firstname:"Foo", lastname:"Bar"},
    {firstname:"Baz", lastname:"Bar"}
];

// Metoder for å gjøre kall mot person-API.
myapp.api.person = {

    all: function(callback) {
        // Her ville man vanligvis gjort et Ajax-kall mot serveren.
        callback(myapp.model.createAll(myapp.model.person, dummydata));
    }

};
