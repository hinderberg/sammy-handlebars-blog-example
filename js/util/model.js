/*
 * Create an instance.
 *
 * @prototype: The model to instantiate.
 * @properties: An object with instance attributes. 
 */ 
myapp.model.create = function(prototype, properties) {
    return myapp.model.merge(Object.create(prototype), properties);
};

/*
 * Create multiple instances.
 *
 * @prototype: The model to instantiate.
 * @propertiesList: An array of objects containing instance attributes. 
 */
myapp.model.createAll = function(prototype, propertiesList) {
    return propertiesList.map(function(properties) {
        return myapp.model.create(prototype, properties);
    });
};

/*
 * Compile a list of models.
 *
 * Returns an object that combines the attributes
 * returned my each model's compile method. 
 */ 
myapp.model.compileAll = function(models) {
    var compiled = {};
    models.forEach(function(model) {
        compiled = myapp.model.merge(compiled, model);
    });
    return compiled;
};
    
/*
 * Run the apply method of each model in a list of models. 
 */ 
myapp.model.applyAll = function(models) {
    models.forEach(function(model) {
        model.apply();
    });
};

/*
 * Merge two objects.
 * 
 * Attributes of @o2 takes precedence over those in @o1. 
 */
myapp.model.merge = function(o1, o2) {
    for(var key in o2) {
        if(o2.hasOwnProperty(key)) {
            o1[key] = o2[key];
        }
    }
    return o1;
};
