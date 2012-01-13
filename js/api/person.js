// Eksempel på serverdata.
var dummydata = [
    {firstname:"Foo", lastname:"Bar"},
    {firstname:"Baz", lastname:"Bar"}
];

// Metoder for å gjøre kall mot person-API.
myapp.api.person = {

    all: function(callback) {
        callback(myapp.model.createAll(myapp.model.person, dummydata));
    }

};
