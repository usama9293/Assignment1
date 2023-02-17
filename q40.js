function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album('Adele', '21'));
console.log(make_album('Ed Sheeran', '÷ (Divide)'));
console.log(make_album('Taylor Swift', 'evermore', 15));
