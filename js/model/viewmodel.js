// Prototype for alle view-modeller.
myapp.model.viewmodel = {

    // Kalles når view-modellen skal brukes og returnerer
    // alle variabler som skal kunne hentes fra template-filen.
    compile: function() {
        throw "Compile method not implementet in this view model.";
    },

	compilePartial: function () {
		var partial = {};

		for(var key in this) {
			if(typeof this[key].compile === 'function') {
				partial[key] = this[key].compile();
			}
		}

		return partial;
	}

};