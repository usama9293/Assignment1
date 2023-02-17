interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
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
