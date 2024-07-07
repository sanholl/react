/**
 * r * c 크기의 온실에 식물을 키우고 있습니다. 식물이 잘 자라도록 n * n 만큼 커버가 가능한 램프를 설치하려고 합니다.
 * r * c 크기의 field에 식물이 없는 경우 0으로, 식물이 있는 경우 1로 주어지고, 램프의 크기 n이 주어질 때,
 * 최대한 커버 가능한 식물의 수를 구하는 함수를 완성해주세요.
 * 예를 들어, 3 * 3 크기의 온실 [[1, 0, 1], [0, 0, 1], [0, 1, 1]]이 그림 (a) 와 같이 주어지고
 * 램프의 크기 2가 주어질 때, 최대한 커버 가능한 식물의 수는 그림 (b)와 같이 3입니다.
 * 
 * 주어진 식물은 옮겨 심을 수 없습니다.
 * 
 * 온식의 식물 정보 field가 주어집니다.
 * field는 0과 1로 이루어진 r * c 크기의 2차원 배열입니다.
 * 온실의 크기 r과 c는 1이상 100이하의 정수입니다.
 * 램프의 크기 n이 주어집니다.
 * n은 1이상 r과 c이하의 정수입니다.
 * 
 * 램프로 최대한 커버 가능한(괄호 안) 식물의 수를 int형식으로 출력
 * 
 *  1 0 1         1 0 1
 *  0 0 1         0(0 1)
 *  0 1 1         0(1 1)
 *   (a)           (b)
 */
// function solution(field, n) {
//   const r = field.length;
//   const c = field[0].length;
//   let maxPlants = 0;

//   // Iterate over all possible positions to place the top-left corner of the lamp
//   for (let i = 0; i <= r - n; i++) {
//       for (let j = 0; j <= c - n; j++) {
//           let coveredPlants = 0;

//           // Count the number of plants covered by the lamp at position (i, j)
//           for (let x = 0; x < n; x++) {
//               for (let y = 0; y < n; y++) {
//                   coveredPlants += field[i + x][j + y];
//               }
//           }

//           // Update the maximum number of covered plants
//           maxPlants = Math.max(maxPlants, coveredPlants);
//       }
//   }

//   return maxPlants;
// }

function solution(field, n) {
  const r = field[0].length;
  const c = field.length;

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      console.log(field[i][j]);
    }
  }
  // i가 r보다 i를 +1하다가 j를 c보다 작을때까지 +1하고 i는 다시 처음부터

}

const field = [[1, 0, 1], [0, 0, 1], [0, 1, 1]];
const n = 2;

console.log(solution(field, n));