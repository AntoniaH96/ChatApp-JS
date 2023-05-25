export function getRandomName() {
    const firstName = ["Monica", "Rachel", "Chandler", "Ross", "Joey", "Phoebe", "Penny", "Sheldon", "Leonard", "Howard", "Amy", "Raj", "Bernadette", "Stuart", "Will"];
    const lastName = ["Geller", "Green", "Bing", "Bang", "Tribbiani", "Buffay", "Hofstader", "Teller", "Cooper", "Wolowitz", "Fowler", "Koothrappali", "Rostenkowski", "Bloom", "Wheaton"];
    return (
      adjs[Math.floor(Math.random() * adjs.length)] +
      "_" +
      nouns[Math.floor(Math.random() * nouns.length)]
    );
  }