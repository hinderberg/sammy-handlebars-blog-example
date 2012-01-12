// Metode for å instansiere en modell.
myapp.models.create = function(prototype, properties) {
    var instance = Object.create(prototype);
    for(var key in properties) {
        instance[key] = properties[key];
    }
    return instance;
};

// Metode for å lage mange instanser.
myapp.models.createAll = function(prototype, propertiesList) {
    return propertiesList.map(function(properties) {
        return myapp.models.create(prototype, properties);
    });
};

// Prototype for alle data-modeller.
myapp.models.datamodel = {};

// Prototype for alle view-modeller.
myapp.models.viewmodel = {

    // Kalles når view-modellen skal brukes og returnerer
    // alle variabler som skal kunne hentes fra template-filen.
    compile: function() {
        throw "Compile method not implementet in this view model.";
    }

};
