// loops.js

console.log("===== TÂCHE 1 : Compter de 1 à 5 avec for =====");
for (var i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("Counting completed!");

console.log("\n===== TÂCHE 2 : Compte à rebours de 5 à 1 avec for =====");
for (var i = 5; i > 0; i--) {
  console.log(i);
}
console.log("Countdown finished!");

console.log("\n===== TÂCHE 3 : Compter de 1 à 5 avec while =====");
var i = 1;
while (i < 6) {
  console.log(i);
  i++;
}
console.log("Counting completed!");

console.log("\n===== TÂCHE 4 : Compte à rebours de 5 à 1 avec while =====");
var i = 5;
while (i > 0) {
  console.log(i);
  i = i - 1;
}
console.log("Countdown finished!");

console.log("\n===== TÂCHE 5 : Afficher les années 2018 à 2022 =====");
var year = 2018;
while (year < 2023) {
  console.log(year);
  year++;
}