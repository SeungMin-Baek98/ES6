# ES6

웹 html / css 는 어느정도 기초를 배웠다고 생각하였지만 Javascript는 아직 한참 멀었다는것을 깨닫고,, 본격적으로 공부를 해볼려고 합니다.
많이 부족하지만 열심히 강의 들으며 제가 최대한 이해한 부분으로 작성해볼려 합니다! 이쁘게 봐주십쇼🙇🏼🙇🏼

## 0.강의 소개

- [노마드코더](https://nomadcoders.co/)
  ![노마드코더](/images/nomadcorder.png)

## 1. 자바스크립트란?

- JavaScript는 웹 페이지를 동적이고 상호작용 가능하게 만드는 프로그래밍 언어입니다. 1995년에 개발되어 현재 웹 브라우저에서 실행되는 유일한 프로그래밍 언어입니다. JavaScript는 코드가 한 줄씩 실행되는, 인터프리터 언어 입니다. Python과 비슷하게 문법이 간단하고, C++와 같이 객체 지향 프로그래밍을 지원합니다. 하지만 Java와는 달리, 컴파일이 필요 없으며, 브라우저 내에서 직접 실행됩니다.

### 1-1.자바스크립의 특징

- 인터프리터 언어입니다.(C, C++, Java와 같은 컴파일 언어처럼 실행전에 기계어 코드로 변환을 하지않아도 브라우저에서 직접 코드를 실행할 수
  있습니다.)
- 동적 타이핑: 변수의 타입을 명시하지 않고도 사용할 수 있습니다. 런타임 시에 타입이 결정된다.

  ```javascript
  let exampleVar = 5; // 숫자 타입으로 초기화
  exampleVar = "Hello"; // 문자열 타입으로 변경
  ```

- 이벤트 기반 프로그래밍: 사용자 입력이나 타이머 등 특정 이벤트가 발생할 때 실행되는 코드를 작성할 수 있다.
- 비동기 처리: `callback함수`, `promise`, `async/await`을 통해 비동기 작업을 효율적으로 처리 할 수있다.

### 1-2.자바스크립트의 역사

- Brendan Eich는 1995년 넷스케이프에서 근무하면서 JavaScript를 개발했습니다.

- 넷스케이프는 월드와이드웹 초기 버전을 더욱 역동적으로 만드는 데 도움이 되는 스크립팅 언어를 개발하고자 했습니다.

- 개발자들이 웹 페이지에 역동성과 상호 작용을 추가할 수 있는 JavaScript의 기능을 깨달으면서 JavaScript는 빠르게 인기를 얻었습니다.

- 1996년, 넷스케이프는 정보 기술 시스템 사용의 표준화를 목표로 하는 단체인 유럽 컴퓨터 제조업체 협회(ECMA International)에 JavaScript를 제출했습니다.

- 이를 통해 JavaScript의 공식 사양인 ECMAScript 표준이 만들어졌습니다.

- JavaScript의 인기가 높아지면서 라이브러리 및 프레임워크, V8(Chrome 구동)과 같은 전용 JS 엔진, 서버 측 환경의 개발이 촉진되었습니다.

- 이름은 비슷하지만 JavaScript는 Java와 완전히 다릅니다.

## 2. 왜 자바스크립트를 배워야 할까?

### ❶ 웹 개발의 기본 언어

자바스크립트는 웹 개발의 핵심 언어라고 생각합니다. HTML과 CSS와 함께, 자바스크립트는 웹 페이지를 동적이고 상호작용 가능하게 만드는 데 필수적이기 때문입니다.

- **프론트엔드 개발**: 브라우저에서 실행되는 유일한 프로그래밍 언어로, 사용자 인터페이스를 동적이고 상호작용하게 만드는 데 사용됩니다.
- **백엔드 개발**: Node.js를 통해 서버 사이드에서도 자바스크립트를 사용할 수 있어, 프론트엔드와 백엔드 모두에서 동일한 언어를 사용할 수 있습니다.

### ❷ 방대한 생태계와 커뮤니티

자바스크립트는 매우 널리 사용되기 때문에, 방대한 라이브러리와 프레임워크가 존재하며, 이를 통해 개발 속도를 높이고 효율성을 극대화할 수 있습니다.

- **프레임워크**: Vue.js, Node.js, and Angular등
- **라이브러리**: React, jQuery 등

📖 [출처 자료](https://www.semrush.com/blog/javascript/)
