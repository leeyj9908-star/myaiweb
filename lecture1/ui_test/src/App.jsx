import { Box, Container, Typography, Divider } from '@mui/material';
import Section01Button from './components/sections/Section01Button';
import Section02Input from './components/sections/Section02Input';
import Section03Navigation from './components/sections/Section03Navigation';
import Section04Dropdown from './components/sections/Section04Dropdown';
import Section05Checkbox from './components/sections/Section05Checkbox';
import Section06Radio from './components/sections/Section06Radio';
import Section07Slider from './components/sections/Section07Slider';
import Section08Modal from './components/sections/Section08Modal';

function App() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
      <Container maxWidth="md">

        {/* 페이지 헤더 */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            MUI UI 요소 테스트
          </Typography>
          <Typography variant="body1" color="text.secondary">
            16개 UI 요소를 섹션별로 확인합니다
          </Typography>
        </Box>

        <Divider sx={{ mb: 6 }} />

        <Section01Button />
        <Section02Input />
        <Section03Navigation />
        <Section04Dropdown />
        <Section05Checkbox />
        <Section06Radio />
        <Section07Slider />
        <Section08Modal />

      </Container>
    </Box>
  );
}

export default App;
