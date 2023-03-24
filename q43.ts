function show_magicians(magicians:string[]):void{

    for (let i=0;i<magicians.length;i++){
    
    
        console.log(magicians[i]);
    }
    
    
    
    }
    


function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      great_magicians.push("the Great " + magicians[i]);
    }
    return great_magicians;
  }
  
  const magicianis: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  const great_magicians: string[] = make_great([...magicianis]);
  
  show_magicians(magicianis);
  show_magicians(great_magicians);
  