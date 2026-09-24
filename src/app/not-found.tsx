import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-8 text-center reveal is-in">
      <div className="space-y-8 max-w-md">
        <div className="space-y-2">
          <h1 className="text-8xl md:text-[10rem] font-poppins font-medium text-charcoal tracking-[-0.04em] leading-none select-none">
            404
          </h1>
          <h2 className="text-xl font-mono tracking-widest text-earth/60 uppercase">
            Not Found
          </h2>
        </div>
        <p className="text-earth leading-relaxed font-inter font-light">
          The requested resource could not be located on this server. It may have been moved, deleted, or never existed.
        </p>
        <div className="pt-4 flex justify-center">
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
