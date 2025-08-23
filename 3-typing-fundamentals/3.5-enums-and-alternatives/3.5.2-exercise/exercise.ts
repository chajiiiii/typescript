// --------------------------------------------------------------------------
// ✅ Enum 타입과 대체 방법
// --------------------------------------------------------------------------

// 1. Up, Down, Left, Right 네 가지 값을 가지는
//    Direction이라는 enum을 정의하세요.
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// 2. Direction enum을 인자로 받아 switch문을 사용해
//    "위로 이동!"과 같은 문자열을 반환하는 `move` 함수를 만드세요.
function move(direction: Direction) {
  switch (direction) {
    case Direction.Up:
      return "move Up";
    case Direction.Down:
      return "move Down";
    case Direction.Left:
      return "move Left";
    case Direction.Right:
      return "move Right";
    default:
      const _exhaustiveCheck: never = direction;
      return _exhaustiveCheck;
  }
}

// 3. Success = 1, Failure = -1, Pending = 0의
//    명시적 값을 갖는 Status라는 enum을 정의하세요.
enum Status {
  Success = 1,
  Failure = -1,
  Pending = 0,
}

// 4. Status enum을 인자로 받아 "오퍼레이션 성공." 또는
//    "오퍼레이션 실패"와 같은 메시지를 반환하는 getStatusMessage 함수를 만드세요.
function getStatusMessage(stat: Status) {
  switch (stat) {
    case Status.Success:
      return "Success";
    case Status.Failure:
      return "Failure";
    case Status.Pending:
      return "Pending";
    default:
      const _exhaustiveCheck: never = stat;
      return _exhaustiveCheck;
  }
}

// 5. 이번에는 enum 대신 객체 리터럴을 사용해서 동일한 기능을 구현하세요.
const statusLiteral = {
  Success: 1,
  Failure: -1,
  Pending: 0,
} as const;

// 6. statusLiteral을 인자로 받아서
//    해당 메시지를 반환하는 getStatusMessageLiteral 함수를 만드세요.
function getStatusMessageLiteral(literalStat: keyof typeof statusLiteral) {
  switch (literalStat) {
    case "Success":
      return "Success";
    case "Failure":
      return "Failure";
    case "Pending":
      return "Pending";
    default:
      const _exhaustiveCheck: never = literalStat;
      return _exhaustiveCheck;
  }
}
