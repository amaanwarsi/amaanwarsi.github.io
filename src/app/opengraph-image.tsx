import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'

export const runtime = 'edge'

export const alt = 'Amaan Warsi — Product-Minded Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F9F9F9',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '100px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: '1px solid #E5E7EB',
            borderRadius: '16px',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: '#0D0D0D',
              margin: 0,
              letterSpacing: '-0.015em',
            }}
          >
            Amaan Warsi
          </h1>
          <p
            style={{
              fontSize: 36,
              color: '#222222',
              margin: 0,
            }}
          >
            Product-Minded Engineer
          </p>
        </div>
        
        <p
          style={{
            fontSize: 32,
            color: '#3B82F6',
            marginTop: '120px',
            fontWeight: 400,
          }}
        >
          From problem to product.
        </p>

        <p
          style={{
            position: 'absolute',
            bottom: 80,
            right: 100,
            fontSize: 24,
            color: '#888888',
          }}
        >
          {siteConfig.url.replace(/^https?:\/\//, '')}
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
