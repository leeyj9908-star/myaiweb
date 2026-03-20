import { useState } from 'react';
import { Box, Typography, TextField, Divider } from '@mui/material';

function Section02Input() {
  const [values, setValues] = useState({
    standard: '',
    outlined: '',
    filled: '',
  });

  const handleChange = (variant) => (e) => {
    setValues((prev) => ({ ...prev, [variant]: e.target.value }));
  };

  const variants = ['standard', 'outlined', 'filled'];

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        02. Input (TextField)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        variant(standard / outlined / filled) — 입력값 실시간 표시
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {variants.map((variant) => (
          <Box key={variant}>
            <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mb: 1 }}>
              {variant}
            </Typography>
            <TextField
              variant={variant}
              label={`${variant} 입력`}
              placeholder="텍스트를 입력하세요"
              value={values[variant]}
              onChange={handleChange(variant)}
              fullWidth
            />
            {values[variant] && (
              <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                입력값: {values[variant]}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      <Divider sx={{ mt: 4 }} />
    </Box>
  );
}

export default Section02Input;
