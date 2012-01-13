// Eksempel på serverdata.
var dummydata = [
    {firstname:"Foo", lastname:"Bar"},
    {firstname:"Baz", lastname:"Bar"}
];

// Prototype for person-instanser.
myapp.model.person = myapp.model.create(myapp.model.datamodel, {

    name: function() {
        return this.firstname + " " + this.lastname;
    }

});

// Metoder for å gjøre kall mot person-API.
myapp.api.person = {

    all: function(callback) {
        callback(myapp.model.createAll(myapp.model.person, dummydata));
    }

};

// Prototype for en view-modell som inneholder personer.
myapp.view.people = myapp.model.create(myapp.model.viewmodel, {
    
    compile: function() {
        this.addClickEvents();
        return { people: this.people };
    },

    addClickEvents: function() {
        $("#page").on("click", "#people li", function (event) {
            alert($(this).text() + " clicked!");
        });
    }

});