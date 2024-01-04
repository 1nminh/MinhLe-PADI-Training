// function getEnemyInfo(enemyNum) {
//   let enemyInfo = {
//     name: "Enemy " + enemyNum,
//     distance: Math.random() * 100,
//   };
//   return enemyInfo;
// }
// let count = 0;
// // Game loop
// while (count <= 10) {
//   // Obtain information about the two closest enemies
//   let enemy1 = getEnemyInfo(11).name;
//   let dist1 = getEnemyInfo(11).distance;
//   let enemy2 = getEnemyInfo(22).name;
//   let dist2 = getEnemyInfo(22).distance;

//   // Determine which enemy is closer
//   let target;
//   if (dist1 < dist2) {
//     target = enemy1;
//   } else {
//     target = enemy2;
//   }
//   count += 1;
//   // Output the name of the enemy to shoot
//   console.log(target);
// }

// var a = [];

// var b = null;

// if (a === b) {
//   console.log("1");
// } else {
//   console.log("2");
// }

// console.log(typeof c);
// console.log(c);

/**
 * A function that takes an input and returns a modified version of it.
 *
 * @param {number} input - The input value to be processed.
 * @return {string} The modified version of the input value.
 */
function a(input) {
  const result = input;

  console.log(result[1]);
  if (typeof input === "string") {
    console.log("Inside");
    let output = input.toString();

    return output;
  }
}

// Do not edit below this line
