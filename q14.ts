let guestList=["usama","ali","kaasif"];

let unabletoAttend=guestList.indexOf("ali");
guestList.splice(unabletoAttend,1,"saad");

for(let guests of guestList){
console.log(`Dear` +guests+`\nYou are cordially invited to a dinner party at my place on Saturday, the 26th of February. The party will start at 7 PM. I hope you can make it!\nBest regards,\n[Usama]`);

}