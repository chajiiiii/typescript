// if else 예시

function example(x: string | number) {
  if (typeof x === "string") {
    x.toUpperCase();
  } else if (typeof x === "number") {
    x.toFixed(2);
  } else {
    // 유니온(union) 값에서 다루는 값이 아닌 경우,
    // Never 타입이 적용됩니다.
    const _exhaustiveCheck: never = x;
    return _exhaustiveCheck;
  }
}

// switch 예시

type Fruit = "apple" | "banana" | "orange";

function pickFruit(fruit: Fruit) {
  switch (fruit) {
    case "apple":
    case "banana":
      return fruit;
    default:
      const _exhaustiveCheck: never = fruit; // ← 여기
      return _exhaustiveCheck;
  }
}
