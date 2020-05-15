// Change players here
const players = ["A", "B", "C", "D", "E", "F", "G", "H", "a", "b", "c", "d", "e", "f", "g", "h"]; // Perfect matches are same letter e.g. A and a

// Change number of games played here
console.log(multipleGamesAYTO(10000));

function multipleGamesAYTO(games) {
  let lights = new Array((players.length/2 + 1)).fill(0);
  for (let i=0; i<games; i++) {
    lights[gameAYTO(players)] += 1;
  }
  const likelihood = lights.map(val => val*100/games);
  let str = `${players.length} players, ${games} games \n`;
  return likelihood.reduce((str,percent,i) => {
    str = str + `${i} lights: ${percent}%\n`;
    return str;
  },str);
}

function gameAYTO(players) {
  let result = [];
  let gamePlayers = players.slice();

  for (let i=0; i<players.length/2; i++) {
      let pair = [];
      // Randomly choose first person in pair then remove from pool of people
      let person1 = gamePlayers[Math.floor(Math.random()*gamePlayers.length)];
      gamePlayers.splice(gamePlayers.indexOf(person1),1);

      // Randomly choose second person in pair then remove from pool of people
      let person2 = gamePlayers[Math.floor(Math.random()*gamePlayers.length)];
      gamePlayers.splice(gamePlayers.indexOf(person2),1);

      pair.push(person1,person2);
      result.push(pair);
  }
  const lights = result.reduce((lights,pairs) => {
    if (pairs[0].toLowerCase() === pairs[1].toLowerCase()) {
      lights = lights + 1
    }
    return lights;
  },0)
  return lights;
}