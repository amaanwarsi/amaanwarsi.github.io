'use client'
 
import { useEffect } from 'react'
import Link from 'next/link'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center reveal is-in">
      <div className="space-y-8 max-w-md">
        <div className="space-y-2">
          <h1 className="text-8xl md:text-[10rem] font-poppins font-medium text-charcoal tracking-[-0.04em] leading-none select-none">
            500
          </h1>
          <h2 className="text-xl font-mono tracking-widest text-earth/60 uppercase">
            System Error
          </h2>
        </div>
        <p className="text-earth leading-relaxed font-inter font-light">
          An unexpected runtime error occurred while processing your request. The issue has been automatically logged.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => reset()}
            className="btn-secondary"
          >
            Retry Request
          </button>
          <Link
            href="/"
            className="btn-primary"
          >
            Return to Base
          </Link>
        </div>
      </div>
    </main>
  )
}
