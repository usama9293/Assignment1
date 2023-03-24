function showMagicians(magicians:string[]):void{

    for (let i=0;i<magicians.length;i++){
    
    
        console.log(magicians[i]);
    }
    
    
    
    }
    

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  }
  const magician: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

  make_great(magician);
  showMagicians(magician);

  
  
    