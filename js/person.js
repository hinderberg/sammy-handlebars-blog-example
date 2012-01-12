// Eksempel på serverdata.
var dummydata = [
    {firstname:"Foo", lastname:"Bar"},
    {firstname:"Baz", lastname:"Bar"}
];

// Prototype for person-instanser.
myapp.models.person = myapp.models.create(myapp.models.datamodel, {
    name: function() {
        return this.firstname + " " + this.lastname;
    }
});

// Metoder for å gjøre kall mot person-API.
myapp.api.person = {
    all: function(callback) {
        callback(myapp.models.createAll(myapp.models.person, dummydata));
    }
};

// Prototype for en view-modell som inneholder personer.
myapp.views.people = myapp.models.create(myapp.models.viewmodel, {
    
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

