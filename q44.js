function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
    console.log("Enjoy your sandwich!");
}
make_sandwich("turkey", "cheddar", "lettuce");
make_sandwich("peanut butter", "jelly");
make_sandwich("bacon", "lettuce", "tomato", "mayo");
