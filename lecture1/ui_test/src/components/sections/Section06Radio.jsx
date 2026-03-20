import { useState } from 'react';
import {
  Box, Typography, Divider,
  Radio, RadioGroup, FormControl, FormLabel, FormControlLabel,
} from '@mui/material';

const options = [
  { value: 'junior', label: '주니어 개발자 (0~3년)' },
  { value: 'mid', label: '미드레벨 개발자 (3~5년)' },
  { value: 'senior', label: '시니어 개발자 (5~10년)' },
  { value: 'lead', label: '테크 리드 (10년 이상)' },
];

function Section06Radio() {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => setSelected(e.target.value);

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        06. Radio
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        RadioGroup + FormControlLabel — 단일 선택
      </Typography>

      <FormControl>
        <FormLabel sx={{ mb: 1, fontWeight: 600 }}>개발 경력을 선택하세요</FormLabel>
        <RadioGroup value={selected} onChange={handleChange}>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              label={option.label}
              control={<Radio />}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Box sx={{ mt: 2, p: 2, bgcolor: selected ? 'primary.50' : 'grey.100', borderRadius: 1, border: '1px solid', borderColor: selected ? 'primary.200' : 'grey.300' }}>
        <Typography variant="body2" color="text.secondary">선택된 옵션</Typography>
        <Typography variant="h6" color={selected ? 'primary' : 'text.disabled'} fontWeight={600}>
          {selected
            ? options.find((o) => o.value === selected)?.label
            : '선택 없음'}
        </Typography>
      </Box>

      <Divider sx={{ mt: 4 }} />
    </Box>
  );
}

export default Section06Radio;
