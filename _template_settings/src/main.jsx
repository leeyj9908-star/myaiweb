import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.js';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ThemeProvider: MUI 테마를 앱 전체에 적용 */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline: 브라우저 기본 스타일 초기화 */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
