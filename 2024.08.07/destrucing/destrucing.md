# Destructing Assignment(구조 분해 할당)

## 객체나 배열, 그 외 요소들에서 특정 값을 추출하여 별도의 변수로 사용할 수 있도록 하는 것입니다. <--코드의 가독성을 높일 수 있으며, 필요한 값을 더 간편하게 추출할 수 있습니다.

### 1.Object Destructing(객체 구조 분해)

#### 객체의 속성을 추출하여 별도의 변수로 할당 할 수 있습니다.

#### 예제 1-1

```javascript
const settings = {
  notifications: {
    alerts: true,
    follow: true,
    unfollow: false,
  },
  color: {
    theme: "dark",
  },
};

let {
  notifications: { alerts, follow, unfollow },
  color: { theme },
} = settings;

unfollow = true;
theme = "light";

console.log(alerts, follow); //true true
console.log(unfollow); // true
console.log(theme); // light
```

#### 예제 1-2(Rename Destructing)

```javascript
const settings = {
  color: {
    chosen_color: "dark",
  },
};

// 기본값이 "light"로 설정된 구조 분해 할당
const {
  color: { chosen_color = "light" },
} = settings;

console.log(chosen_color); // dark

const chosenColor = settings.color.chosen_color || "light";
console.log(chosenColor); // dark

const {
  color: { chosen_color2: chosenColor2 = "light" },
} = settings;
console.log(chosenColor2); // light

let chosenColor3 = "blue";
console.log(chosenColor3); // blue

({
  color: { chosen_color3: chosenColor3 = "lightblue" },
} = settings);

console.log(chosenColor3); // lightblue
```

### 2.Array Destructing(배열 구조 분해)

#### 배열의 요소를 추출하여 별도의 변수로 할당할 수 있습니다.

#### 예제

```javascript
const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sund"];

const [mon, tue, wed] = days;

console.log(mon, tue, wed); // Mon Tue Wed
```

### 3.Function Destructing(함수 구조 분해)

#### 함수 매개변수에서도 구조 분해 할당을 사용할 수 있습니다.

#### 예제

```javascript
function saveSettings({ notifications, color: { theme } }) {
  console.log(notifications); // {alert: true, alarm:true, marketingAlarm: false}
  console.log(notifications.alert); // true
  console.log(notifications.alarm); // true
  console.log(notifications.marketingAlarm); //false
  console.log(theme); // blue;
}

saveSettings({
  notifications: {
    alert: true,
    alarm: true,
    marketingAlarm: false,
  },
  color: {
    theme: "blue",
  },
});
```
