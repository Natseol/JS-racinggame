# JS-racinggame

## 작성이유
- 자바 스크립트를 처음 사용하게 되면서 자바와 자바스크립트가 어떻게 다른 방식으로 작동하지는 알아보고 싶어 만들었습니다
- 코드의 대부분은 유튜브 동영상에 있는 내용으로, 따라치면서 작동방식을 익혀보려 했습니다

## 작동방법
- 이미지들을 canvas 요소로 정의하고, drawImage를 통해 계속 render를 하게 만들었습니다
- 키보드 입력을 받아 다른 좌표에 drawImage를 하면서 car를 움직이게 하였습니다
- car2를 리스트로 만들어 계속 생성하고 생성한 car2는 Y좌표를 계속 증가시키면서, car와 부딪히면 게임이 끝나게 만들었습니다

## 버그이슈
- 생성된 car2가 없어지지 않아 같은 라인에 서기만 해도 게임오버가 됨
- 생성된 car2를 지우려고 하니까 car2리스트가 전부 삭제됨

## 기타
### 참고자료
[https://www.youtube.com/watch?v=TJmvuyt6tT8](https://www.youtube.com/watch?v=TJmvuyt6tT8)

### 이미지출처
- <a target="_blank" href="https://icons8.com/icon/40258/car-top-view">Car Top View</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
- <a target="_blank" href="https://icons8.com/icon/7bGlJrKnisOw/car-top-view">Car</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
- <a target="_blank" href="https://icons8.com/icon/3RD068JaXd9q/game-over">Game Over</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a><br>
- <a href='https://kor.pngtree.com/freepng/asphalt-road-plane-material-display_2941722.html'>PNG 이미지 kor.pngtree.com/</a>

