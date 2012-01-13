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