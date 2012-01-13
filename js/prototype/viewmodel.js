// Prototype for alle view-modeller.
myapp.models.viewmodel = {

    // Kalles når view-modellen skal brukes og returnerer
    // alle variabler som skal kunne hentes fra template-filen.
    compile: function() {
        throw "Compile method not implementet in this view model.";
    }

};
