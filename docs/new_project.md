# 새 프로젝트 시작 가이드

## 1. 프로젝트 생성

```bash
# Vite + React 프로젝트 생성
npm create vite@latest 프로젝트이름 -- --template react

cd 프로젝트이름
npm install
```

## 2. MUI 설치

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

## 3. 폴더 구조 설정

```bash
# src 안에 폴더 생성
mkdir -p src/components src/pages src/hooks src/utils src/assets
```

## 4. _template_settings 복사

```bash
# 템플릿에서 theme.js, main.jsx 복사
cp ../_template_settings/src/theme.js src/
cp ../_template_settings/src/main.jsx src/
```

## 5. 기본 파일 구조

```
프로젝트이름/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   │   └── HomePage.jsx    ← 첫 페이지
│   ├── hooks/
│   ├── utils/
│   ├── assets/
│   ├── theme.js            ← MUI 테마
│   ├── App.jsx             ← 라우팅
│   └── main.jsx            ← 진입점 (ThemeProvider 포함)
├── index.html
└── package.json
```

## 6. App.jsx 기본 템플릿

```jsx
import { Box } from '@mui/material';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Box>
      <HomePage />
    </Box>
  );
}

export default App;
```

## 7. HomePage.jsx 기본 템플릿

```jsx
import { Box, Typography, Container } from '@mui/material';

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          안녕하세요!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          프로젝트를 시작합니다.
        </Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
```

## 8. 개발 서버 실행

```bash
npm run dev
# http://localhost:5173 에서 확인
```

## 9. GitHub 연결

```bash
# 저장소 초기화
git init
git add .
git commit -m "feat: 초기 프로젝트 설정"

# GitHub에 저장소 생성 후 연결
gh repo create 프로젝트이름 --public --source=. --push
```

## 체크리스트

- [ ] npm create vite로 프로젝트 생성
- [ ] MUI 패키지 설치
- [ ] theme.js 복사
- [ ] main.jsx에 ThemeProvider 적용 확인
- [ ] npm run dev 실행 확인
- [ ] GitHub 저장소 연결
