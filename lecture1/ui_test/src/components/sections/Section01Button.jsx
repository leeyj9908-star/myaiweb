import { Box, Typography, Button, Divider } from '@mui/material';

function Section01Button() {
  const handleClick = (variant, color) => {
    alert(`클릭! variant: ${variant}, color: ${color}`);
  };

  const variants = ['contained', 'outlined', 'text'];
  const colors = ['primary', 'secondary', 'error'];

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        01. Button
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        variant(contained / outlined / text) × color(primary / secondary / error)
      </Typography>

      {variants.map((variant) => (
        <Box key={variant} sx={{ mb: 3 }}>
          <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mb: 1 }}>
            {variant}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {colors.map((color) => (
              <Button
                key={color}
                variant={variant}
                color={color}
                onClick={() => handleClick(variant, color)}
              >
                {color}
              </Button>
            ))}
          </Box>
        </Box>
      ))}

      <Divider sx={{ mt: 4 }} />
    </Box>
  );
}

export default Section01Button;
