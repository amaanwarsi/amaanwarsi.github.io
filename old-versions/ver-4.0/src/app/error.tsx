'use client'
 
import { useEffect } from 'react'
import { ServerCrash } from 'lucide-react'
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
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center">
      <div className="space-y-6 max-w-md">
        <div className="flex justify-center mb-8">
          <div className="bg-bg-raised p-4 rounded-2xl border border-border shadow-2xl">
            <ServerCrash className="w-12 h-12 text-accent" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-4xl font-mono tracking-tight text-text-primary">
          <span className="text-accent">500</span> | System Error
        </h1>
        <p className="text-text-secondary leading-relaxed">
          An unexpected runtime error occurred while processing your request. The issue has been automatically logged.
        </p>
        <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-bg-raised text-text-primary border border-border px-6 py-3 rounded-lg font-medium hover:bg-border/50 transition-colors"
          >
            Retry Request
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-text-primary text-bg-base px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Return to Base
          </Link>
        </div>
      </div>
    </main>
  )
}
