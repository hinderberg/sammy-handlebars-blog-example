/*
 * Methods for calling the person API.
 */ 
myapp.api.person = {

    all: function(callback) {
        // Use dummydata instead of performing an ajax-call.
        callback(myapp.model.createAll(myapp.model.person, [
            {firstname:"Foo", lastname:"Bar"},
            {firstname:"Baz", lastname:"Bar"}
        ]));
    }

};
