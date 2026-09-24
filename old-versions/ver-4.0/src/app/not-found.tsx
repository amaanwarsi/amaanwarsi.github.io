import Link from 'next/link'
import { Terminal } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center">
      <div className="space-y-6 max-w-md">
        <div className="flex justify-center mb-8">
          <div className="bg-bg-raised p-4 rounded-2xl border border-border shadow-2xl">
            <Terminal className="w-12 h-12 text-accent" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-4xl font-mono tracking-tight text-text-primary">
          <span className="text-accent">404</span> | Not Found
        </h1>
        <p className="text-text-secondary leading-relaxed">
          The requested resource could not be located on this server. It may have been moved, deleted, or never existed.
        </p>
        <div className="pt-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-text-primary text-bg-base px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Return to Base
          </Link>
        </div>
      </div>
    </main>
  )
}
