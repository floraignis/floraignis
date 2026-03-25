import { Box, Typography } from '@mui/material'
import avatarSrc from '../assets/avatar/MVIMG_20250916_091817_Original.JPG'

export default function ProfileCard() {
  return (
    <Box
      className="animate-in"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        pt: '36px',
        pb: '28px',
        px: '24px',
        background: 'rgba(255, 235, 180, 0.04)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(212, 148, 26, 0.18)',
        borderRadius: '28px',
        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 235, 180, 0.07)',
        textAlign: 'center',
        animationDelay: '0ms',
        animationFillMode: 'both',
      }}
    >
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <Box
          sx={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, #d4941a, #f0b840, #c8820a, #d4941a)',
            opacity: 0.7,
            filter: 'blur(1px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: '-2px',
            borderRadius: '50%',
            background: 'rgba(13, 7, 3, 0.9)',
          }}
        />
        <Box
          component="img"
          src={avatarSrc}
          alt="Flora Ignis"
          sx={{
            position: 'relative',
            width: 110,
            height: 110,
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      </Box>

      <Typography
        component="h1"
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '32px',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #f0b840 0%, #d4941a 40%, #e8a020 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.2,
          letterSpacing: '-0.3px',
        }}
      >
        Flora Ignis
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '15px',
          fontWeight: 300,
          color: 'rgba(250, 235, 215, 0.75)',
          lineHeight: 1.65,
          maxWidth: '320px',
        }}
      >
        36 yo ginger mom of three, exploring herself and looking for new friends 😊
      </Typography>
    </Box>
  )
}