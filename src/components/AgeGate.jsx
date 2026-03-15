import { Dialog, DialogContent, Box, Typography, Button } from '@mui/material'

export default function AgeGate({ open, destination, onClose, onConfirm }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      aria-labelledby="age-gate-title"
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(7, 3, 1, 0.75)',
          },
        },
      }}
    >
      <DialogContent
        sx={{
          p: '36px 28px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'rgba(212, 148, 26, 0.1)',
            border: '1px solid rgba(212, 148, 26, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            lineHeight: 1,
          }}
        >
          🔞
        </Box>

        <Typography
          id="age-gate-title"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '22px',
            fontWeight: 700,
            color: '#faebd7',
            lineHeight: 1.3,
          }}
        >
          Age Verification
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 300,
            color: 'rgba(250, 235, 215, 0.6)',
            lineHeight: 1.65,
            maxWidth: '280px',
          }}
        >
          This link contains adult content intended for viewers 21 years of age and older. Please confirm your age to continue.
        </Typography>

        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            px: '16px',
            py: '7px',
            background: 'rgba(212, 148, 26, 0.12)',
            border: '1px solid rgba(212, 148, 26, 0.3)',
            borderRadius: '100px',
            mt: '-4px',
          }}
        >
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#d4941a',
              boxShadow: '0 0 6px rgba(212, 148, 26, 0.8)',
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              color: '#d4941a',
              letterSpacing: '0.02em',
            }}
          >
            {destination}
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            height: '1px',
            background: 'rgba(212, 148, 26, 0.12)',
            my: '4px',
          }}
        />

        <Box sx={{ display: 'flex', gap: '10px', width: '100%' }}>
          <Button
            onClick={onClose}
            fullWidth
            variant="outlined"
            sx={{
              borderColor: 'rgba(212, 148, 26, 0.25)',
              color: 'rgba(250, 235, 215, 0.6)',
              borderRadius: '100px',
              py: '11px',
              fontSize: '14px',
              fontWeight: 400,
              fontFamily: "'Inter', sans-serif",
              '&:hover': {
                borderColor: 'rgba(212, 148, 26, 0.45)',
                background: 'rgba(212, 148, 26, 0.06)',
                color: '#faebd7',
              },
            }}
          >
            Go back
          </Button>
          <Button
            onClick={onConfirm}
            fullWidth
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, #d4941a 0%, #b87414 100%)',
              color: '#0d0703',
              borderRadius: '100px',
              py: '11px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              boxShadow: '0 4px 16px rgba(212, 148, 26, 0.35)',
              transition: 'all 0.18s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #e8a020 0%, #c8841e 100%)',
                boxShadow: '0 6px 20px rgba(212, 148, 26, 0.5)',
                transform: 'translateY(-1px)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          >
            I'm 21+ · Enter
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}