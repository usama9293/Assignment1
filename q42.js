function showMagicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
var magician = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great(magician);
showMagicians(magician);
