## 3주차 배울것

1. API개발을 도와주는 API Client, THunder Client를 배움
2. MongoDB 비관계형 데이터베이스
3. MongoDB를 눈으로 보면서 관리하게 해주는 도구 ROBO 3T
4. mongoose라는 라이브러리를 이용해 데이터베이스에 연결해 데이터를 저장하고 가져옴
5. api코드 작성

## 3-2 API Client

- api client란 개발단계에서 우리가 작성한 api의 요청을 확인하거나 테스팅할 때 도움을 주는 툴
- 개발속도를 높이거나 치명적인 에러를 예방
- postman(가장 유명),insomnia,swagger 등이 있음.
- thunder client는 vs code안에서 사용할 수 있으며, 비교적 쉽게 다양한 기능 사용 가능

## 3-3 데이터베이스와 MongoDB

- 데이터베이스는 데이터를 더 잘 관리하기 위해 만들어진 것.
- 그 데이터베이스가 될 수 있도록 해주는 것이 DataBase Management System
- 흔히 데이터베이스에 저장한다는 DBMS가 설치된 서버에 데이터를 저장한다고 말하는 것.

### 데이터베이스의 종류

#### 관계형 Relational DataBase(SQL) <br/>

- 데이터 형식이 정해져있고,데이터끼리 관계를 맺은 형어 모순이 없는 데이터를 유지(무결성과 정합성이 높은 데이터)
- 스키마란 개념이 존재

#### 비관계형 Non-relational Database(NoSQL) <br/>

- 관계형이 아닌 모든 데이터
- 데이터를 관리하지 못하는 순간 모슨형 데이터가 생겨날 수 있음.
- 유연한 설계를 위해 스타트업에서 많이 채택.

### MongoDB

- 비관계형 데이터베이스에서 가장 유명.
- 모든 데이터가 JSON형태로 저장
- 스케일 조절이 수월

### 데이터베이스와 웹서버의 관계

- 웹서버는 웹클 라이언트가 원하는 데이터와 기능을 제공
- DB서버는 데이터를 성능 좋게 저장하고, DB클라이언트가 원하는 데이터를 제공

- localhost:27017 은 몽고db의 기본포트번호

## 3-4 MongoDB Client Robo3T

DB Client는 DB의 데이터를 조회하거나 관리할 수 있는 기능을 제공 DBMS

![](https://velog.velcdn.com/images/wkqkel/post/3aec3c1b-082b-43d6-9f99-78c3b404b95a/image.png)

spa_database라는 데이터베이스 아래에 goods라는 컬렉션 안에 해당 데이터를 가진 도큐먼트를 넣어줌.
쿼리를 해서 데이터를 넣음

## 3-5 코드로 MongoDB 이용

- mongoose라는 도구를 이용해 데이터베이스에 연결
- 원래 비관계형은 스키마가 없지만, mongoose 라이브러리에는 스키마라는 개념이 있어서 관리.
- mongoose의 모델이란 데이터베이스에 데이터를 저장해줄때 데이터의 구조를 담당
- mongoose에서 데이터를 모델링할시 Schema라는 객체를 사용하는데 이 Schema를 이용해 document를 생성할 때 모델이 사용됨.
