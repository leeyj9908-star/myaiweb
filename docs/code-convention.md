# 코드 컨벤션

## 파일 & 폴더 네이밍

```
src/
├── components/       # 재사용 가능한 컴포넌트
│   ├── Header.jsx    # 컴포넌트: PascalCase
│   └── UserCard.jsx
├── pages/            # 페이지 단위 컴포넌트
│   ├── HomePage.jsx
│   └── AboutPage.jsx
├── hooks/            # 커스텀 훅
│   └── useAuth.js    # 훅: camelCase, use 접두사
├── utils/            # 유틸 함수
│   └── formatDate.js # 유틸: camelCase
├── assets/           # 이미지, 폰트 등 정적 파일
├── theme.js          # MUI 테마 설정
└── main.jsx          # 앱 진입점
```

## 컴포넌트 작성 규칙

```jsx
// ✅ 좋은 예
function UserCard({ name, email, avatar }) {
  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;
```

```jsx
// ❌ 피할 것
// - 하나의 컴포넌트에 너무 많은 로직
// - props를 3개 이상 넘길 때 객체로 묶기
// - 인라인 스타일 대신 sx prop 사용
```

## import 순서

```jsx
// 1. React
import { useState, useEffect } from 'react';

// 2. 외부 라이브러리
import { Box, Typography, Button } from '@mui/material';

// 3. 내부 컴포넌트
import UserCard from './UserCard';

// 4. 유틸 / 훅
import { formatDate } from '../utils/formatDate';
```

## 스타일링 규칙

```jsx
// MUI sx prop 사용 (인라인 style 금지)
<Box sx={{
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  p: 3,
}} />

// 복잡한 스타일은 변수로 분리
const cardStyle = {
  borderRadius: 2,
  boxShadow: 3,
  '&:hover': {
    boxShadow: 6,
  },
};

<Card sx={cardStyle} />
```

## 변수 네이밍

```js
// 변수, 함수: camelCase
const userName = 'eunju';
function handleClick() {}

// 상수: UPPER_SNAKE_CASE
const MAX_COUNT = 10;
const API_URL = 'https://...';

// 컴포넌트: PascalCase
function MyComponent() {}

// boolean 변수: is/has/can 접두사
const isLoading = false;
const hasError = true;
const canSubmit = false;

// 이벤트 핸들러: handle 접두사
const handleSubmit = () => {};
const handleInputChange = () => {};
```

## Git 커밋 메시지

```
feat: 새로운 기능 추가
fix: 버그 수정
style: 스타일 변경 (기능 변경 없음)
refactor: 코드 리팩토링
docs: 문서 수정
chore: 기타 변경사항

예시:
feat: 로그인 페이지 컴포넌트 추가
fix: 버튼 클릭 시 오류 수정
style: 헤더 색상 변경
```
