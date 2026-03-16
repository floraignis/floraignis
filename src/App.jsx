import { useState } from 'react'
import { Box, Typography, IconButton, Tooltip } from '@mui/material'
import WallpaperIcon from '@mui/icons-material/Wallpaper'
import Background from './components/Background'
import ProfileCard from './components/ProfileCard'
import LinkButton from './components/LinkButton'
import AgeGate from './components/AgeGate'
import { brightLinks, darkLinks, proLinks } from './data'
import { backgroundImages } from './backgrounds'

function SectionLabel({ emoji, label, animationDelay }) {
  return (
    <Box
      className="animate-in"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        px: '2px',
        mb: '2px',
        animationDelay: `${animationDelay}ms`,
        animationFillMode: 'both',
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212, 148, 26, 0.25))',
        }}
      />
      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(212, 148, 26, 0.7)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}
      >
        {emoji} {label}
      </Typography>
      <Box
        sx={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(212, 148, 26, 0.25), transparent)',
        }}
      />
    </Box>
  )
}

export default function App() {
  const [ageGate, setAgeGate] = useState({ open: false, url: '', name: '' })
  const [bgIndex, setBgIndex] = useState(import.meta.env.DEV ? 0 : 1)

  const currentBg = bgIndex === 0 ? null : backgroundImages[bgIndex - 1]

  const handleRestrictedClick = (url, name) => {
    setAgeGate({ open: true, url, name })
  }

  const handleAgeGateClose = () => {
    setAgeGate({ open: false, url: '', name: '' })
  }

  const handleAgeGateConfirm = () => {
    if (ageGate.url && !ageGate.url.startsWith('YOUR_')) {
      window.open(ageGate.url, '_blank', 'noopener,noreferrer')
    }
    handleAgeGateClose()
  }

  return (
    <>
      <Background bgImage={currentBg} />

      {import.meta.env.DEV && backgroundImages.length > 0 && (
        <Tooltip
          title={bgIndex === 0 ? 'Switch background' : `Background ${bgIndex} / ${backgroundImages.length}`}
          placement="left"
        >
          <IconButton
            onClick={() => setBgIndex((prev) => (prev + 1) % (backgroundImages.length + 1))}
            sx={{
              position: 'fixed',
              top: 16,
              right: 16,
              zIndex: 10,
              width: 40,
              height: 40,
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundImage: currentBg ? `url(${currentBg})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              background: currentBg ? undefined : 'rgba(255, 235, 180, 0.07)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: currentBg ? '2px solid rgba(212, 148, 26, 0.75)' : '1px solid rgba(255, 235, 180, 0.14)',
              boxShadow: currentBg ? '0 0 14px rgba(212, 148, 26, 0.35)' : '0 2px 8px rgba(0,0,0,0.3)',
              transition: 'all 300ms ease',
              '&:hover': {
                borderColor: 'rgba(212, 148, 26, 0.8)',
                boxShadow: '0 0 18px rgba(212, 148, 26, 0.4)',
                transform: 'scale(1.08)',
              },
            }}
          >
            {!currentBg && <WallpaperIcon sx={{ fontSize: 18, color: 'rgba(250, 235, 215, 0.55)' }} />}
          </IconButton>
        </Tooltip>
      )}

      <Box
        component="main"
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '520px',
          mx: 'auto',
          px: '16px',
          pt: '40px',
          pb: '64px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          minHeight: '100vh',
        }}
      >
        <ProfileCard />

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <SectionLabel emoji="☀️" label="My Bright Side" animationDelay={120} />
          {brightLinks.map((link, i) => (
            <LinkButton key={link.title} {...link} animationDelay={160 + i * 70} />
          ))}
        </Box>

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <SectionLabel emoji="🌙" label="My Dark Side · 18+" animationDelay={420} />
          {darkLinks.map((link, i) => (
            <LinkButton
              key={link.title}
              {...link}
              restricted
              onRestrictedClick={handleRestrictedClick}
              animationDelay={460 + i * 70}
            />
          ))}
        </Box>

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <SectionLabel emoji="💼" label="My Professional Side" animationDelay={740} />
          {proLinks.map((link, i) => (
            <LinkButton key={link.title} {...link} animationDelay={780 + i * 70} />
          ))}
        </Box>

        <Typography
          component="footer"
          className="animate-in"
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(250, 235, 215, 0.25)',
            letterSpacing: '0.5px',
            mt: '8px',
            animationDelay: '780ms',
            animationFillMode: 'both',
          }}
        >
          © 2026 Flora Ignis
        </Typography>
      </Box>

      <AgeGate
        open={ageGate.open}
        destination={ageGate.name}
        onClose={handleAgeGateClose}
        onConfirm={handleAgeGateConfirm}
      />
    </>
  )
}