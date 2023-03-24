function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let i = 0; i < items.length; i++) {
      console.log("- " + items[i]);
    }
    console.log("Enjoy your sandwich!");
  }
  make_sandwich("turkey", "cheddar", "lettuce");
  make_sandwich("peanut butter", "jelly");
  make_sandwich("bacon", "lettuce", "tomato", "mayo");
    