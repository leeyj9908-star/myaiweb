# 디자인 시스템 가이드

## 컬러 팔레트

```js
// theme.js에서 설정
palette: {
  primary: {
    main: '#1976D2',    // 메인 블루
    light: '#42A5F5',
    dark: '#1565C0',
  },
  secondary: {
    main: '#9C27B0',    // 퍼플
    light: '#BA68C8',
    dark: '#7B1FA2',
  },
  background: {
    default: '#F5F5F5',
    paper: '#FFFFFF',
  },
}
```

## 타이포그래피

```js
typography: {
  fontFamily: '"Pretendard", "Roboto", sans-serif',
  h1: { fontSize: '2.5rem', fontWeight: 700 },
  h2: { fontSize: '2rem',   fontWeight: 700 },
  h3: { fontSize: '1.75rem', fontWeight: 600 },
  h4: { fontSize: '1.5rem',  fontWeight: 600 },
  body1: { fontSize: '1rem',   lineHeight: 1.7 },
  body2: { fontSize: '0.875rem', lineHeight: 1.6 },
}
```

## 스페이싱

MUI 기본 spacing unit = 8px

```jsx
// 사용 예시
<Box sx={{ p: 2 }} />   // padding: 16px
<Box sx={{ m: 1 }} />   // margin: 8px
<Box sx={{ gap: 3 }} /> // gap: 24px
```

## 브레이크포인트

| 이름 | 크기    | 용도         |
|------|---------|--------------|
| xs   | 0px~    | 모바일       |
| sm   | 600px~  | 태블릿(소)   |
| md   | 900px~  | 태블릿(대)   |
| lg   | 1200px~ | 데스크탑     |
| xl   | 1536px~ | 대형 화면    |

```jsx
// 반응형 예시
<Box sx={{
  width: { xs: '100%', md: '50%' },
  display: { xs: 'none', sm: 'block' }
}} />
```

## 공통 컴포넌트 사용 규칙

### 버튼
```jsx
// 주요 액션
<Button variant="contained" color="primary">저장</Button>

// 보조 액션
<Button variant="outlined" color="primary">취소</Button>

// 텍스트 버튼
<Button variant="text">더보기</Button>
```

### 카드
```jsx
<Card sx={{ borderRadius: 2, boxShadow: 2 }}>
  <CardContent>
    <Typography variant="h6">제목</Typography>
    <Typography variant="body2" color="text.secondary">내용</Typography>
  </CardContent>
</Card>
```

### 폼 입력
```jsx
<TextField
  label="이름"
  variant="outlined"
  fullWidth
  size="small"
/>
```
