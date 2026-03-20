import { useState } from 'react';
import {
  Box, Typography, Divider,
  FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
];

function Section04Dropdown() {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => setSelected(e.target.value);

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        04. Dropdown (Select)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        MUI Select + MenuItem — 선택값 실시간 표시
      </Typography>

      <FormControl fullWidth>
        <InputLabel>프레임워크를 선택하세요</InputLabel>
        <Select
          value={selected}
          label="프레임워크를 선택하세요"
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selected && (
        <Box sx={{ mt: 2, p: 2, bgcolor: 'primary.50', borderRadius: 1, border: '1px solid', borderColor: 'primary.200' }}>
          <Typography variant="body2" color="text.secondary">선택된 값</Typography>
          <Typography variant="h6" color="primary" fontWeight={600}>
            {options.find((o) => o.value === selected)?.label}
          </Typography>
        </Box>
      )}

      <Divider sx={{ mt: 4 }} />
    </Box>
  );
}

export default Section04Dropdown;
