const currentUsers = ['john', 'mary', 'jacob', 'emma', 'samantha'];
const newUsers = ['lisa', 'jacob', 'peter', 'JOHN', 'sarah'];

for (let i = 0; i < newUsers.length; i++) {
  const newUser = newUsers[i].toLowerCase(); // convert new username to lowercase

  if (currentUsers.includes(newUser)) {
    console.log(`Sorry, the username '${newUser}' is not available.`);
  } else {
    console.log(`Congratulations, the username '${newUser}' is available!`);
    currentUsers.push(newUser); // add new username to current users
  }
}
