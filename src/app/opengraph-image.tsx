import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'June Rhomel - Software Engineer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  // Font
  const interSemiBold = fetch(
    new URL('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap')
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #3b82f6, #1e40af)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '64px', fontWeight: 'bold', marginBottom: '20px' }}>
          June Rhomel
        </div>
        <div style={{ fontSize: '36px', opacity: 0.8 }}>
          Software Engineer
        </div>
        <div 
          style={{ 
            position: 'absolute', 
            bottom: '40px', 
            fontSize: '24px',
            opacity: 0.6
          }}
        >
          Web Development • React • Next.js • TypeScript
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  )
} 