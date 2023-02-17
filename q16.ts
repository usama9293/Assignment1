let GuestList=["usama","ali","kaasif"];
console.log("You can invite only two people on dinner");
//checking index of ali
let unableToAttends=GuestList.indexOf("ali");
//changing position with saad 
GuestList.splice(unableToAttends,1,"saad");
//console not attend
console.log("ali can not attend this")
//to add element in start
GuestList.unshift("qasim")
//to add in mid
GuestList.splice(Math.floor(GuestList.length / 2), 0, "Frank"); 
GuestList.push("Grace"); // in typescript we use push to add at end
for(let guests of GuestList){
console.log(`Dear` +guests+`\nYou are cordially invited to a dinner party at my place on Saturday, the 26th of February. The party will start at 7 PM. I hope you can make it!\nBest regards,\n[Usama]`);

}
while (GuestList.length > 2) {
    let removedGuest = GuestList.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
  }
console.log(`\nFinal Guest List: ${GuestList}`);

// Remove last two names from list
GuestList.pop();
GuestList.pop();

// Print to make sure the list is empty
console.log(`Empty List: ${GuestList}`);