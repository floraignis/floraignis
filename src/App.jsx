import { useState } from 'react'
import { Box, Typography, IconButton, Tooltip } from '@mui/material'
import WallpaperIcon from '@mui/icons-material/Wallpaper'
import Background from './components/Background'
import ProfileCard from './components/ProfileCard'
import LinkButton from './components/LinkButton'
import AgeGate from './components/AgeGate'
import { brightLinks, darkLinks, proLinks } from './data'
import { backgroundImages } from './backgrounds'
import avatarSrc from './assets/avatar/MVIMG_20250916_091817_Original.JPG'

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
  const [bgIndex, setBgIndex] = useState(0)

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

      <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            height: '100vh',
            minHeight: '600px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: { md: 6, lg: 10 },
              gap: '28px',
            }}
          >
            <Box>
              <Typography
                component="p"
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'rgba(212, 148, 26, 0.7)',
                  mb: '14px',
                }}
              >
                hello, I'm
              </Typography>
              <Typography
                component="h1"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: { md: '52px', lg: '68px' },
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #f0b840 0%, #d4941a 40%, #e8a020 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.1,
                  letterSpacing: '-1px',
                }}
              >
                Flora Ignis
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { md: '15px', lg: '16px' },
                fontWeight: 300,
                color: 'rgba(250, 235, 215, 0.75)',
                lineHeight: 1.8,
                maxWidth: '440px',
              }}
            >
              Red hair, engineering heart.<br />
              <br />
              By day, I cultivate life: raising three children, tending to my garden,
              and finding peace in the quiet rhythm of home.<br />
              <br />
              By night, I craft worlds: writing spicy narratives, flirting, and meeting
              new people - both online and off. I also manage the digital chaos of a
              Reddit community of nearly a million people.<br />
              <br />
              I find beauty in the precision of an embroidery needle, as well as the cold
              logic of a line of code. Currently, I'm bringing my engineering mindset into
              the world of IT and Software Testing, where I hunt for bugs with the same
              patience I use to grow my garden.<br />
              <br />
              Always open to new connections.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                mt: '8px',
              }}
            >
              <Box
                sx={{
                  width: '32px',
                  height: '1px',
                  background: 'rgba(212, 148, 26, 0.4)',
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(212, 148, 26, 0.45)',
                }}
              >
                scroll to links
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '120px',
                height: '100%',
                background: 'linear-gradient(90deg, rgba(13, 7, 3, 1) 0%, transparent 100%)',
                zIndex: 1,
              }}
            />
            <Box
              component="img"
              src={avatarSrc}
              alt="Flora Ignis"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                opacity: 0.85,
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            px: { md: 6, lg: 10 },
            py: '72px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '40px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <SectionLabel emoji="☀️" label="My Bright Side" animationDelay={0} />
            {brightLinks.map((link, i) => (
              <LinkButton key={link.title} {...link} animationDelay={40 + i * 70} />
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <SectionLabel emoji="🌙" label="My Dark Side · 18+" animationDelay={0} />
            {darkLinks.map((link, i) => (
              <LinkButton
                key={link.title}
                {...link}
                restricted
                onRestrictedClick={handleRestrictedClick}
                animationDelay={40 + i * 70}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <SectionLabel emoji="💼" label="My Professional Side" animationDelay={0} />
            {proLinks.map((link, i) => (
              <LinkButton key={link.title} {...link} animationDelay={40 + i * 70} />
            ))}
          </Box>
        </Box>

        <Typography
          component="footer"
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(250, 235, 215, 0.2)',
            letterSpacing: '0.5px',
            textAlign: 'center',
            pb: '32px',
          }}
        >
          © 2026 Flora Ignis
        </Typography>
      </Box>

      <Box
        component="main"
        sx={{
          display: { xs: 'flex', md: 'none' },
          position: 'relative',
          zIndex: 1,
          maxWidth: '520px',
          mx: 'auto',
          px: '16px',
          pt: '40px',
          pb: '64px',
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
