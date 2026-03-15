import { Box } from '@mui/material'

export default function Background({ bgImage }) {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: bgImage ? `url(${bgImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: bgImage ? 1 : 0,
          transition: 'opacity 700ms ease',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: bgImage ? 'rgba(10, 5, 2, 0.52)' : 'transparent',
          transition: 'background 700ms ease',
        }}
      />

      {!bgImage && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: '-15%',
              left: '-10%',
              width: '60vw',
              height: '60vw',
              maxWidth: '600px',
              maxHeight: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 40% 40%, rgba(212, 148, 26, 0.18) 0%, rgba(180, 90, 10, 0.10) 40%, transparent 70%)',
              filter: 'blur(2px)',
              animation: 'orbDrift1 18s ease-in-out infinite',
              willChange: 'transform',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '-20%',
              right: '-15%',
              width: '70vw',
              height: '70vw',
              maxWidth: '700px',
              maxHeight: '700px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 60% 60%, rgba(200, 100, 10, 0.15) 0%, rgba(160, 60, 5, 0.08) 40%, transparent 70%)',
              filter: 'blur(3px)',
              animation: 'orbDrift2 22s ease-in-out infinite',
              willChange: 'transform',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '35%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '50vw',
              height: '50vw',
              maxWidth: '500px',
              maxHeight: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 50% 50%, rgba(240, 184, 64, 0.09) 0%, rgba(212, 148, 26, 0.05) 40%, transparent 70%)',
              filter: 'blur(1px)',
              animation: 'orbDrift3 15s ease-in-out infinite',
              willChange: 'transform',
            }}
          />
        </>
      )}

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(26, 11, 3, 0) 0%, rgba(13, 7, 3, 0.45) 100%)',
        }}
      />
    </Box>
  )
}