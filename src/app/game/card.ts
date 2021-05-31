export interface Card {
  id: number;
  value: number;
  colour: COLOUR;
  copiesLeft: number;
  isAce: boolean;
}
enum COLOUR {
  '♠',
  '♥',
  '♦',
  '♣',
}

// let cards: Card[][] = [];
// for (let i = 0; i < 4; i++) {
//   cards[i] = [];
//   for (let j = 1; j < 13; j++) {
//     cards[i][j] = { id: j + 1, value: j + 1, colour: i, copiesLeft: 3, isAce: false };
//   }
//   cards[i][0].isAce = true;
//   for (let j = 10; j < 13; j++) {
//     cards[i][j].value = 10;
//   }}
