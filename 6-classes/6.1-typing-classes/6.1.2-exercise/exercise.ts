// --------------------------------------------------------------------------
// ✅ TypeScript 클래스
// --------------------------------------------------------------------------

// 1. `Person`이라는 클래스를 만들고, 다음과 같은 프로퍼티를 추가하세요.
//    - firstName: string
//    - lastName: string
//    - age: number
//    - fullName: 사람의 전체 이름을 반환하는 메서드
class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName(): void {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

// 2. `Person` 클래스를 상속받는 `Student` 클래스를 만들고, 다음과 같은 추가 프로퍼티를 구현하세요.
//    - studentId: number
//    - courses: string[]
//    - enroll: 과목 이름을 매개변수로 받아 courses 배열에 추가하는 메서드

class Student extends Person {
  studentId: number;
  courses: string[];

  constructor(
    studentId: number,
    courses: string[],
    firstName: string,
    lastName: string,
    age: number
  ) {
    super(firstName, lastName, age);
    this.studentId = studentId;
    this.courses = courses;
  }

  enroll(course: string): string[] {
    this.courses.push(course);
    return this.courses;
  }
}

// 3. `Student` 클래스의 인스턴스를 생성하고, 그 속성과 메서드가 어떻게 동작하는지 예시를 보여주세요.

const student = new Student(
  35220,
  ["English", "Misic"],
  "Mia",
  "Jenkinson",
  24
);

console.log(student.enroll("Spanish"));
student.fullName();
