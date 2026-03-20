import { useState } from 'react';
import {
  Box, Typography, Divider, Button,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Section08Modal() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    setResult('확인 버튼을 클릭했습니다.');
    handleClose();
  };

  const handleCancel = () => {
    setResult('취소 버튼을 클릭했습니다.');
    handleClose();
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        08. Modal (Dialog)
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Dialog — 버튼 열기 / 닫기 버튼 / 배경 클릭으로 닫기
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        모달 열기
      </Button>

      {result && (
        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2" color="text.secondary">마지막 액션</Typography>
          <Typography variant="body1" fontWeight={600}>{result}</Typography>
        </Box>
      )}

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ pr: 6 }}>
          공지사항
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            MUI Dialog 컴포넌트를 사용한 모달입니다.
            배경을 클릭하거나 닫기(✕) 버튼을 눌러 닫을 수 있습니다.
            확인 또는 취소를 선택하면 결과가 화면에 표시됩니다.
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleCancel} color="inherit">취소</Button>
          <Button onClick={handleConfirm} variant="contained">확인</Button>
        </DialogActions>
      </Dialog>

      <Divider sx={{ mt: 4 }} />
    </Box>
  );
}

export default Section08Modal;
