## typescript 설치방법

1. npm init
2. npm install typescript -D
3. touch tsconfig.json
   ```
   {
        "include": ["src"], // 어디에 있는 코드를 컴파일할 지
        "compilerOptions": {
            // 어디에 컴파일한 파일을 넣을지
            "outDir": "build",
            // JS버전 설정
            "target": "ES6"
        }
    }
   ```

## 라이브러리 사용

1. "lib": 타입스크립트를 이용해서 사용하는 라이브러리를 선언
   - tsconfig.json에 정의해서 사용한다.
   - ex) "lib":["ES6","DOM"]
2. ".d.ts": Declaration Files, 라이브러리의 타입을 정의한 문서
   - 패키지를 만들때 해당 파일을 만들면 typescript가 이 파일을 이용해서 타입을 정의해준다.
