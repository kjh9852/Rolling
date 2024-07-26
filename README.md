## 💌 Rolling 24.07.10 ~ 24.07.25
![og_image](https://github.com/user-attachments/assets/36421e71-53b8-4828-81da-bc601f578dc4)

추억의 롤링 페이퍼를 웹 상에서도 즐길 수 있는 플랫폼인 '롤링'

## 🙍‍♂️ 팀원 소개
|이름|상세 내용|
|------|---|
|김정현(팀장)|postDetail페이지,  MessageDetail페이지, 공통컴포넌트 제작, 카카오API연결, 라우터 연결, 컴포넌트 최소화, 코드 리팩토링|
|엄세환|Landing,List페이지, 회의 내용 정리 |
|정인재|AddMessage페이지, 회의 내용 정리, 코드 리팩토링|
|최원혁|AddPost페이지, PPT제작 및 발표, API 요청 로직 모듈화, 코드 리팩토링|
## 📃 상세 계획
[노션 상세 계획 링크](https://mud-stranger-c40.notion.site/Codeit_-2ac5dcbb0b8d43818a80422a43ded058)

## 📁 프로젝트 구조
```
src/              
  ├── assets/     
  │   └── image/  
  ├── style/      
  │   ├── customQuill.css 
  │   └── GlobalStyle.jsx  
  ├── components/ 
  │   ├── common/           - 재사용 가능한 공통 컴포넌트
  │   ├── LandingPage/      
  │   ├── ListPage/         
  │   ├── Post/            
  │   ├── PostDetail/       
  │   ├── PostPage/        
  │   ├── ProfileImageList/ 
  │   ├── Select/          
  │   └── TextArea/         
  ├── pages/      - 라우터에 직접적으로 들어가는 컴포넌트
  │   ├── AddMessagePage.jsx
  │   ├── AddPostPage.jsx
  │   ├── LandingPage.jsx
  │   ├── ListPage.jsx
  │   ├── MessageDetailPage.jsx
  │   └── PostDetailPage.jsx
  ├── router/    
  │   └── RootLayout.jsx
  ├── ui/         - UI 컴포넌트
  │   ├── Header.jsx
  │   ├── Loading.jsx
  │   ├── Modal.jsx
  │   └── Toast.jsx
  ├── util/       - 유틸리티 파일
  │   ├── api.js
  │   ├── backgroundColor.js
  │   └── relation.js
  ├── App.jsx     - 루트 컴포넌트 파일
  └── index.js    - 진입점 파일

.prettierrc       - Prettier 설정 파일
```

## ❗ 트러블 슈팅
![image](https://github.com/user-attachments/assets/9b1210f4-39ba-4840-9bab-2a0153f862dc)
<br/>
List페이지에서 과도한 리퀘스트 요청으로 인해 소수의 사람들이 동시에 접속만 해도 서버가 과부하 되는 현상.
<br/>
원인 - api에서 어떤 값을 반환하는지 이해를 하지 못해 과도하게 많은 요청으로 api 호출
<br/>
해결 - [https://github.com/kjh9852/Rolling/pull/51] e2fc219 커밋

## 😀 좋았던 점
- PR올렸을때 피드백이 활발해서 좋았습니다. 팀원분들의 PR을 해드릴려고 더 열심히 하게 되었습니다.
- 개인이 맡은 파트의 진행 상황을 매일 팀 회의 시간에 공유하고 노션에 기록하는것이 정말 좋았습니다.

## 🤔 아쉬운 점
- PR 확인이 늦게되어 리뷰가 늦고 승인이 그만큼 지체되었습니다.
- 팀장님에게 과도하게 많은 과제가 맡겨진것 같습니다.

## 😄 느낀 점
- 개발 초기 세팅부터 기록을 위한 플랫폼 선정까지 팀 프로젝트를 하게 되면서 경험해 볼 수 있어서 좋았습니다
- 협업을 하기 위해 들어가는 시간적인 요소가 많아서 비효율적일수도 있다고 생각했는데, 팀원분들의 잘 짜여진 코드나, 부족한 부분도 캐치가 되면서 혼자서는 놓칠 수도 있는 부분이 케어가 되어서 좋았습니다.
