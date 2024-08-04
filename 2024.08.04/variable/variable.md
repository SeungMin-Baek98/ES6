# 자바스크립트 변수 타입 및 사용 가이드

# 우선 2009년에한 버젼업데이트까지는 변수타입에는 var(variable)만 존재하였다.

## 1. `var` 사용의 장단점

### 장점

1. **함수 스코프(Function Scope)**:

   - `var`로 선언된 변수는 함수 스코프를 가지며, 함수 내부 어디에서나 접근이 가능합니다. 이는 함수 내에서 변수를 전역처럼 사용할 수 있게 합니다.
   - 예제:
     ```javascript
     function example() {
       var x = 10;
       if (true) {
         var y = 20;
       }
       console.log(x); // 10
       console.log(y); // 20
     }
     ```

2. **호이스팅(Hoisting)**:

   - `var`로 선언된 변수는 호이스팅되어 변수 선언이 해당 스코프의 상단으로 끌어올려진 것처럼 동작합니다. 이를 통해 변수 선언 전에 변수에 접근할 수 있는 유연성을 제공합니다.
   - 예제:
     ```javascript
     console.log(x); // undefined
     var x = 5;
     console.log(x); // 5
     ```

3. **재선언 가능**:
   - 같은 스코프 내에서 동일한 이름으로 변수를 여러 번 선언할 수 있습니다.
   - 예제:
     ```javascript
     var x = 10;
     var x = 20; // 재선언 가능
     console.log(x); // 20
     ```

### 단점

1. **함수 스코프(Function Scope)만 지원**:

   - `var`는 블록 스코프를 지원하지 않아, `if`, `for`, `while` 등의 블록 내부에서 선언된 변수를 블록 외부에서도 접근 가능하게 합니다. 이는 변수 충돌 및 예기치 않은 버그를 초래할 수 있습니다.
   - 예제:
     ```javascript
     if (true) {
       var x = 5;
     }
     console.log(x); // 5
     ```

2. **변수 호이스팅에 따른 예측 불가능성**:

   - `var` 변수의 호이스팅은 가독성과 디버깅에 어려움을 초래할 수 있습니다. 변수 선언이 코드의 상단으로 이동하기 때문에 예상치 못한 결과를 초래할 수 있습니다.
   - 예제:
     ```javascript
     function example() {
       console.log(x); // undefined
       var x = 10;
       console.log(x); // 10
     }
     ```

3. **재선언 가능**:
   - 같은 스코프 내에서 동일한 이름으로 변수를 여러 번 선언할 수 있어, 의도하지 않은 변수 재선언으로 인한 버그가 발생할 수 있습니다.
   - 예제:
     ```javascript
     var x = 10;
     var x = 20; // 이전 값이 덮어써짐
     console.log(x); // 20
     ```

# --> 이러한 var을 사용하는것이 과연 좋을까라는 생각을 한 개발자들은 2015년에 대규모 업데이트를 하게 되는데 그중 중요한 변화인 let / const를 정의하게 된다.

## 2. `let`과 `const`의 장단점

### `const`의 장점

1. **블록 스코프(Block Scope)**:

   - `const`는 블록 스코프를 가지므로, 변수가 선언된 블록 내부에서만 유효합니다. 이는 변수의 범위를 명확하게 제한하고 의도하지 않은 변수 재정의를 방지할 수 있습니다.
   - 예제:
     ```javascript
     if (true) {
       const a = 10;
       console.log(a); // 10
     }
     console.log(a); // ReferenceError: a is not defined
     ```

2. **상수 선언**:

   - `const`는 재할당이 불가능하므로 상수를 선언할 때 사용합니다. 이는 값이 변경되지 않음을 보장하여 코드의 안정성을 높일 수 있습니다.
   - 예제:
     ```javascript
     const b = 20;
     b = 30; // TypeError: Assignment to constant variable.
     ```

3. **호이스팅과 Temporal Dead Zone (TDZ)**:
   - `const`는 호이스팅되지만, 초기화가 선언 위치에서 이루어지므로 선언 전에 접근할 수 없습니다.
   - 예제:
     ```javascript
     console.log(c); // ReferenceError: Cannot access 'c' before initialization
     const c = 5;
     ```

### `const`의 단점

1. **초기화 필수**:

   - `const`로 선언된 변수는 선언과 동시에 초기화해야 합니다. 그렇지 않으면 문법 오류가 발생합니다.
   - 예제:
     ```javascript
     const d; // SyntaxError: Missing initializer in const declaration
     ```

2. **재할당 불가**:
   - `const`로 선언된 변수는 재할당할 수 없습니다. 이는 상수 값을 저장할 때 유용하지만, 값을 변경해야 하는 경우에는 적합하지 않습니다.

### `let`의 장점

1. **블록 스코프(Block Scope)**:

   - `let`은 `const`와 마찬가지로 블록 스코프를 가지므로, 변수가 선언된 블록 내부에서만 유효합니다. 이는 변수의 범위를 명확하게 제한하고, 의도하지 않은 변수 재정의를 방지합니다.
   - 예제:
     ```javascript
     if (true) {
       let x = 10;
       console.log(x); // 10
     }
     console.log(x); // ReferenceError: x is not defined
     ```

2. **재선언 불가**:

   - 같은 스코프 내에서 `let`으로 선언된 변수를 다시 선언할 수 없습니다. 이는 변수의 재정의를 방지하여 코드의 안정성을 높입니다.
   - 예제:
     ```javascript
     let y = 20;
     let y = 30; // SyntaxError: Identifier 'y' has already been declared
     ```

3. **호이스팅과 Temporal Dead Zone (TDZ)**:
   - `let` 변수는 선언이 호이스팅되지만, 초기화는 해당 블록 내에서 실제 선언 위치에서 이루어집니다. 이는 선언 전에 변수에 접근할 수 없도록 하여 잠재적인 버그를 줄입니다.
   - 예제:
     ```javascript
     console.log(z); // ReferenceError: Cannot access 'z' before initialization
     let z = 5;
     ```

## 결론

`let`과 `const`는 변수 스코프를 명확히 하고, 변수 재선언 및 재할당을 제한하여 코드의 안정성과 가독성을 높이는 데 기여합니다. 따라서, 대부분의 경우 `var` 대신 `let`과 `const`를 사용하는 것을 권장합니다!!!
