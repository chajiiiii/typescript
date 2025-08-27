// --------------------------------------------------------------------------
// ✅ 네임스페이스(Namespaces)
// --------------------------------------------------------------------------

// 문제 1
// 두 숫자를 받아 합을 반환하는 `add` 함수를 포함하는 `MathOperations` 네임스페이스를 만드세요.
namespace MathOperations {
  export const add = (a: number, b: number): number => a + b;
}

// 문제 2
// 두 숫자를 받아 차를 반환하는 `subtract` 함수를 `MathOperations` 네임스페이스에 추가하세요.
namespace MathOperations {
  export const subtract = (a: number, b: number): number => a - b;
}

// 문제 3
// `MathOperations` 네임스페이스를 사용하여 두 숫자를 더하고 빼서, 결과를 콘솔에 출력하세요.
const sum = MathOperations.add(10, 5);
const difference = MathOperations.subtract(10, 5);

console.log("Sum:", sum); // 15
console.log("Difference:", difference); // 5
