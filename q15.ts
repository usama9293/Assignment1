let guestLists=["usama","ali","kaasif"];
//checking index of ali
let unableToAttend=guestLists.indexOf("ali");
//changing position with saad 
guestLists.splice(unableToAttend,1,"saad");
//console not attend
console.log("ali can not attend this")
//to add element in start
guestLists.unshift("qasim")
//to add in mid
guestLists.splice(Math.floor(guestLists.length / 2), 0, "Frank"); 
guestLists.push("Grace"); // in typescript we use push to add at end
for(let guests of guestLists){
console.log(`Dear` +guests+`\nYou are cordially invited to a dinner party at my place on Saturday, the 26th of February. The party will start at 7 PM. I hope you can make it!\nBest regards,\n[Usama]`);

}
