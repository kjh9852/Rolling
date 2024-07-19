import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* font */
@font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
    format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
    format('woff');
  font-weight: 700;
  font-style: normal;
}

/*  default */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: Pretendard, 'Apple SD Gothic Neo', Roboto, 'Noto Sans KR',
    NanumGothic, 'Malgun Gothic', 'Segoe UI', 'Apple SD Gothic Neo',
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
}

html {
  font-size: 62.5%; /* 단위 rem 사용 시 16px = 1.6rem으로 사용 가능 */
}

/* 여백초기화 */
body,
div,
ul,
li,
dl,
dd,
dt,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
input,
fieldset,
legend,
p,
select,
table,
th,
td,
tr,
textarea,
button,
form,
figure,
figcaption {
  margin: 0;
  padding: 0;
}

/* a 링크 초기화 */
a {
  color: #222;
  text-decoration: none;
}
/* 폰트 스타일 초기화 */
em,
address {
  font-style: normal;
}

/* 블릿기호 초기화 */
ul,
li,
ol {
  list-style: none;
}

/* 제목 태그 초기화 */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 14px;
  font-weight: normal;
}

/* 테두리 초기화 */
img,
fieldset {
  border: 0 none;
}

/* 버튼 초기화 */
button {
  border: 0;
  background: none;
}

/* input 화살표 초기화 */

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* 스크롤 디자인 */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
	background: var(--purple400);
}
::-webkit-scrollbar-thumb {
  background: var(--purple300);
  border-radius: 12px 12px 12px 12px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--purple400)
}

:root {
  --white: #ffffff;
  --black: #000000;
  --error: #dc3a3a;
  --surface: #f6f8ff;

  --purple100: #f8f0ff;
  --purple200: #ecd9ff;
  --purple300: #dcb9ff;
  --purple400: #c894fd;
  --purple500: #ab57ff;
  --purple600: #9935ff;
  --purple700: #861dee;
  --purple800: #6e0ad1;
  --purple900: #5603a7;

  --beige100: #fff0d6;
  --beige200: #ffe2ad;
  --beige300: #ffc583;
  --beige400: #ffae65;
  --beige500: #ff8832;

  --blue100: #e2f5ff;
  --blue200: #b1e4ff;
  --blue300: #7cd2ff;
  --blue400: #34b9ff;
  --blue500: #00a2fe;

  --green100: #e4fbdc;
  --green200: #d0f5c3;
  --green300: #9be282;
  --green400: #60cf37;
  --green500: #2ba600;

  --gray100: #f6f6f6;
  --gray200: #eeeeee;
  --gray300: #cccccc;
  --gray400: #999999;
  --gray500: #555555;
  --gray600: #4a4a4a;
  --gray700: #3a3a3a;
  --gray800: #2b2b2b;
  --gray900: #181818;
}
`;

export default GlobalStyle;