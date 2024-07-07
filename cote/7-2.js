/**
 * 둘레가 가장 큰 사각형을 구하려고 합니다.
 * N개의 정수로 만들 수 있는 둘레가 가장 큰 사각형의 둘레를 구하는 함수를 완성해주세요.
 * 
 * 예를 들어, arr [3, 2, 3, 1]이 주어질 때, 결과는 9입니다.
 * 
 * 사각형을 만들 수 없는 경우 0을 반환
 * arr는 길이가 4이상 1,000이하인 배열
 * arr의 요소는 1이상 1,000,000이하인 정수
 * 둘레가 가장 큰 사각형의 둘레를 int형식으로 구함
 */
// function solution(arr) {
//   // 배열을 내림차순으로 정렬합니다.
//   arr.sort((a, b) => b - a);
  
//   let sides = [];
  
//   // 배열을 순회하며 두 쌍의 동일한 변을 찾습니다.
//   for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] === arr[i + 1]) {
//           sides.push(arr[i]);
//           i++; // 다음 요소는 건너뜁니다.
//       }
//       if (sides.length === 2) {
//           // 두 쌍을 찾으면 반복을 종료합니다.
//           break;
//       }
//   }
  
//   // 두 쌍의 동일한 변을 찾지 못한 경우, 사각형을 만들 수 없습니다.
//   if (sides.length < 2) {
//       return 0;
//   }
  
//   // 두 쌍의 변을 사용하여 둘레를 계산합니다.
//   return (sides[0] + sides[1]) * 2;
// }

function solution(arr) {
  arr.sort((a, b) => b - a).map(Number);

  let sameSides = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]) {
      sameSides.push(...arr.splice(i, 2));
      i++;
    }
    if(sameSides.length === 2) {
      break;
    }
  }

  if(sameSides.length < 2) {
    return 0;
  }

  return (sameSides[0] + sameSides[1] + arr[0] + arr[1]);
}

const arr = [3, 2, 3, 1];

console.log(solution(arr))