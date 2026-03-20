import { useState } from 'react';
import { Box, Typography, Divider, Slider } from '@mui/material';

const marks = [
  { value: 0,   label: '0' },
  { value: 25,  label: '25' },
  { value: 50,  label: '50' },
  { value: 75,  label: '75' },
  { value: 100, label: '100' },
];

function getColor(value) {
  if (value <= 33) return 'success';
  if (value <= 66) return 'warning';
  return 'error';
}

function Section07Slider() {
  const [value, setValue] = useState(30);

  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        07. Slider
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        범위 0~100 + marks 구간 표시 + 실시간 값 표시
      </Typography>

      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        max={100}
        marks={marks}
        valueLabelDisplay="on"
        color={getColor(value)}
      />

      <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.100', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="body2" color="text.secondary">현재 값</Typography>
          <Typography variant="h4" fontWeight={700} color={`${getColor(value)}.main`}>
            {value}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
          {value <= 33 && '낮음'}
          {value > 33 && value <= 66 && '보통'}
          {value > 66 && '높음'}
        </Typography>
      </Box>

      <Divider sx={{ mt: 4 }} />
    </Box>
  );
}

export default Section07Slider;
