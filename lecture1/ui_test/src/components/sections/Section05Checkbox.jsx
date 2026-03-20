import { useState } from 'react';
import {
  Box, Typography, Divider,
  Checkbox, FormControlLabel, FormGroup,
} from '@mui/material';

const items = [
  { value: 'react', label: 'React' },
  { value: 'mui', label: 'MUI' },
  { value: 'vite', label: 'Vite' },
  { value: 'router', label: 'React Router' },
  { value: 'supabase', label: 'Supabase' },
];

function Section05Checkbox() {
  const [checked, setChecked] = useState([]);

  const isAllChecked = checked.length === items.length;
  const isIndeterminate = checked.length > 0 && checked.length < items.length;

  const handleAll = () => {
    setChecked(isAllChecked ? [] : items.map((item) => item.value));
  };

  const handleItem = (value) => {
    setChecked((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        05. Checkbox
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        다중 선택 + 전체 선택/해제 + 선택 개수 실시간 표시
      </Typography>

      {/* 전체 선택 */}
      <FormControlLabel
        label={<Typography fontWeight={600}>전체 선택</Typography>}
        control={
          <Checkbox
            checked={isAllChecked}
            indeterminate={isIndeterminate}
            onChange={handleAll}
          />
        }
      />

      <Divider sx={{ my: 1 }} />

      {/* 개별 항목 */}
      <FormGroup sx={{ pl: 2 }}>
        {items.map((item) => (
          <FormControlLabel
            key={item.value}
            label={item.label}
            control={
              <Checkbox
                checked={checked.includes(item.value)}
                onChange={() => handleItem(item.value)}
              />
            }
          />
        ))}
      </FormGroup>

      {/* 선택 개수 표시 */}
      <Box sx={{ mt: 2, p: 2, bgcolor: checked.length > 0 ? 'primary.50' : 'grey.100', borderRadius: 1, border: '1px solid', borderColor: checked.length > 0 ? 'primary.200' : 'grey.300' }}>
        <Typography variant="body2" color="text.secondary">선택된 항목</Typography>
        <Typography variant="h6" color={checked.length > 0 ? 'primary' : 'text.disabled'} fontWeight={600}>
          {checked.length > 0
            ? `${checked.length}개 선택 — ${checked.map((v) => items.find((i) => i.value === v)?.label).join(', ')}`
            : '선택 없음'}
        </Typography>
      </Box>

      <Divider sx={{ mt: 4 }} />
    </Box>
  );
}

export default Section05Checkbox;
