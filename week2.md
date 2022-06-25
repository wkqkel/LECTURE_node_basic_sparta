## 2-2 http의 이해

![](https://velog.velcdn.com/images/wkqkel/post/ee60e702-adfc-464c-808d-915ed6c76093/image.png)
Headers에는
General
request URL 어디로 요청을 보냈냐
request Method 요청에대한 카테고리
status code

Request Header
요청하는 사람을 구분하기 위한 것을 포함.

payload 요청, 응답 받을 때의 데이터

Response Header
서버가 웹페이지 데이터와 함께 보낸 추가데이터

## 2-3 웹서버

소프트웨어 측면에서의 웹서버

HTTP는 통신규약,
웹서버란 브라우저랑 통신할 수 있는, 데이터를 주고받는데 사용할 수 있는 것.

## 2-4 Express.js

express.js는 node.js로 서버를 빠르고 간편하게 만들 수 있게 도와주는 프레임워크

node.js는 자바스크립트를 실행할 수 있는 런타임 플랫폼
웹서버란 브라우저랑 통신할 수 있는, 데이터를 주고받는데 사용할 수 있는 것.
Express.js는 웹서버를 손쉽게 만들 수 있게해주는 프레임워크

## 2-5 Express.js로 웹서버 구현

npm init -y // -y는 전체 yes
npm i express

package.lock 패키지 버전을 고정하기 위해 사용\_ 지우게 되면 최신버전을 의도치 않게 설치하게 돼서 문제가 생길 수 있다.

127.0.0.1, localhost:3000는 루프백주소= 내 컴퓨터주소다.

js라는 언어로 코드를 짜고 node.js로 실행을 했지만 express.js라는 도구를 이용해 웹서버를 만듦.=> express로 구현 node.js로 실행

## 2-6 미들웨어

웹서버의 모듈이라는 개념.

서버에 추가적인 기능을 붙여준다고 생각하면 쉬움.
특정 라우트나 특정 로직에 대해 공통적으로 하고 싶을 때. => 요청과 응답에 대한 공통적인 처리
주의할 점은 모든 것을 미들웨어로 X

## 2-7 routing 및 router

routing은 클라이언트의 요청 조건(메서드, 주소 등)에 대응해 응답하는 방식
router란 소프트웨어에서 라우팅을 할 수 있게하는 객체. express.js의 기본기능 중 하나 사용

express를 사용하는 한 라우터는 미들웨어로 구현됨

## 2-8 api 및 rest API

Application Programming Interface

API는 어플리케이션끼리 연결해주는 매개체이자 약속

## 2-9 REST API개발

상품목록조회 get
