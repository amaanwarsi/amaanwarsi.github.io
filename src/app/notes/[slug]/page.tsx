import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

// This is a simple mockup of the data. In a real app, you'd fetch this from MDX or a CMS.
const notesData: Record<string, { title: string; description: string; date: string; category: string; content: React.ReactNode; tech: string }> = {
  "websockets-vs-polling": {
    title: "WebSockets vs Polling",
    description: "Scaling real-time order delivery from aggressive DB polling to Redis Pub/Sub.",
    date: "August 15, 2026",
    category: "Architecture",
    tech: "Node.js · WebSocket · Redis",
    content: (
      <>
        <p>When building a real-time system—like sending an incoming order straight to a busy kitchen display—you have two main choices: HTTP Polling or WebSockets.</p>

        <p>Initially, polling seems like the easiest path. The kitchen app just asks the server, <em>"Any new orders?"</em> every 3 seconds. But at scale, this turns into a performance disaster. If you have 500 restaurants online, that's 10,000 requests per minute slamming your database just to find out absolutely nothing has happened.</p>

        <p>By moving to a WebSockets approach paired with Redis, we completely flipped the model. Instead of the clients repeatedly asking for data, the server holds a lightweight, persistent connection and pushes the data the exact millisecond an order arrives.</p>

        <div className="bg-bg-raised border border-border p-6 rounded-lg font-mono text-xs text-text-secondary overflow-x-auto my-8">
          <pre className="leading-relaxed text-accent-soft">
            {`          [ Old Way: Polling ]                  [ New Way: WebSockets + Redis ]
                                                  
 [ App ] ---? (Any orders?) ---> [ DB ]       [ App ] <---(Push)--- [ WebSocket ]
 [ App ] <--- (No) ------------- [ DB ]                                   ^
 [ App ] ---? (Any orders?) ---> [ DB ]                                   | (Subscribes)
 [ App ] <--- (No) ------------- [ DB ]                                   |
 [ App ] ---? (Any orders?) ---> [ DB ]       [ API ] ---(Publishes)--> [ Redis ]`}
          </pre>
        </div>

        <p>Here's how it flows: When a customer places an order via the API, the API writes it to the database just once, and immediately publishes an event to Redis. Our Node.js WebSocket server—which is subscribed to Redis—receives that event and pushes it only to the specific restaurant's connected device.</p>

        <p><strong>The result?</strong> We saw an 80-90% reduction in database I/O, and we could comfortably handle 5x more concurrent users on the exact same server hardware, all while achieving sub-50ms latency for order delivery.</p>
      </>
    )
  },
  "self-hosted-deployments": {
    title: "Zero-Downtime Infrastructure on a Single VPS",
    description: "Maximizing utility and keeping operational costs near zero with Docker, Nginx, and GitHub Actions.",
    date: "June 10, 2026",
    category: "Infrastructure",
    tech: "Docker · Nginx · GH Actions",
    content: (
      <>
        <p>For a bootstrapped SaaS, operational costs matter. While PaaS platforms like Vercel or Heroku offer great velocity, they can get expensive fast. I wanted to achieve the same professional, zero-downtime deployment pipeline while squeezing maximum utility out of a low-cost VPS.</p>

        <p>By using Docker and Nginx, I built a containerized architecture that strictly separates concerns and routes traffic via subdomains:</p>

        <ul className="list-disc list-inside space-y-2 text-text-secondary ml-4 my-6">
          <li><strong>api.</strong> - Core backend and WebSocket server</li>
          <li><strong>app.</strong> - Business logic and dashboard</li>
          <li><strong>menu.</strong> - Customer-facing QR interface</li>
          <li><strong>auth.</strong> - Isolated authentication services</li>
          <li><strong>static.</strong> - Gzipped scripts, user uploads, and compressed WebP images</li>
        </ul>

        <p>Routing all static assets through a dedicated <code>static</code> subdomain means that when traffic eventually scales, we can shift that entire subdomain behind a CDN with zero code changes.</p>

        <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">Atomic CI/CD Deployments</h3>
        <p>The biggest challenge of self-hosting is handling updates without kicking active users offline. I automated the entire deployment pipeline using GitHub Actions.</p>

        <div className="bg-bg-raised border border-border p-6 rounded-lg font-mono text-xs text-text-secondary overflow-x-auto my-6">
          <pre className="leading-relaxed text-accent-soft">
            {`[ Developer ] --> (git push) --> [ GitHub Actions ]
                                       |
                                  (Build Image)
                                       |
                                  (Push to GHCR)
                                       |
                               (SSH into VPS)
                                       |
[ Nginx Proxy ] <============== [ Docker Compose ]
   (Traffic)                    1. Pull new image
                                2. Start new container
                                3. Wait for health check
                                4. Route traffic to new
                                5. Kill old container`}
          </pre>
        </div>

        <p>When code is pushed to the main branch, GitHub Actions builds the Docker image and pushes it to the GitHub Container Registry. It then SSHs into the VPS, pulls the image, and spins up the new container alongside the old one.</p>
        <p>Nginx acts as the reverse proxy. It waits for the new container to pass its health checks before it atomically switches the traffic over. The old container is then gracefully spun down. This guarantees <strong>0% deployment downtime</strong> and keeps operational costs near-zero for the first 1,000 users.</p>
      </>
    )
  },
  "frontend-performance": {
    title: "High-Performance Mobile Rendering",
    description: "Optimizing for spotty networks and slow mobile devices in real-world hospitality environments.",
    date: "August 16, 2026",
    category: "Performance",
    tech: "Next.js · WebP · Virtualization",
    content: (
      <>
        <p>In a hospitality setting, you can't assume your users are on a flagship phone with a 5G connection. A customer scanning a QR code for a menu might be on an older Android device with a spotty 3G signal. If the menu takes 10 seconds to load, or crashes their browser, you lose the order.</p>

        <p>To hit a Time to Interactive (TTI) of <strong>&lt;1.5 seconds</strong> on 3G networks, I had to completely rethink how we handle assets and rendering.</p>

        <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">1. Client-Side Image Processing</h3>
        <p>Instead of relying on the server to compress images, I implemented client-side image processing. Before any menu item photo is uploaded, it is automatically converted to WebP format and compressed directly in the browser. This achieved a <strong>70-80% decrease in data transfer</strong> and made visual rendering 3x faster by serving highly optimized assets from our static subdomain.</p>

        <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">2. DOM Virtualization</h3>
        <p>A menu with 500+ items and high-quality images will easily crash the browser on a low-end device due to memory over-allocation. To solve this, I implemented an "on-demand" loading strategy.</p>

        <div className="bg-bg-raised border border-border p-6 rounded-lg font-mono text-xs text-text-secondary overflow-x-auto my-6">
          <pre className="leading-relaxed text-accent-soft">
            {`[ Viewport Render Cycle ]

  +-----------------------+
  |  Item 1 (Rendered)    |  <-- Priority Render (0ms)
  |  Item 2 (Rendered)    |  
  |  Item 3 (Rendered)    |  
  |  Item 4 (Rendered)    |  <-- TTI < 1.5s
  +=======================+  (Below Fold)
  |  Item 5 (Placeholder) |  <-- Lazy Loaded on Scroll
  |  Item 6 (Placeholder) |
  |  Item N ...           |`}
          </pre>
        </div>

        <p>We prioritize rendering only the first 4-5 items instantly. Everything below the fold uses aggressive lazy-loading triggered by the user's scroll position. This single change resulted in a <strong>60-70% lower browser RAM footprint</strong>, keeping the interface buttery smooth and completely crash-free regardless of the menu size.</p>
      </>
    )
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = notesData[slug];

  if (!note) {
    return { title: "Note Not Found" };
  }

  return {
    title: `${note.title} | Amaan Warsi`,
    description: note.description,
    openGraph: {
      title: note.title,
      description: note.description,
      type: "article",
      publishedTime: new Date(note.date).toISOString(),
    },
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notesData[slug];

  if (!note) {
    return (
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-32 text-center">
        <h1 className="text-3xl font-medium text-text-primary mb-4">Note not found</h1>
        <Link href="/#case-studies" className="text-accent hover:underline">Return to notes</Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-12">
      <Link href="/#case-studies" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <article className="space-y-8">
        <header className="space-y-4 pb-8 border-b border-border">
          <div className="flex items-center gap-3 text-sm font-mono text-accent-soft">
            <span>{note.category}</span>
            <span>•</span>
            <time dateTime={new Date(note.date).toISOString()}>{note.date}</time>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-text-primary">
            {note.title}
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            {note.description}
          </p>
        </header>

        <div className="prose prose-invert prose-p:text-text-secondary prose-p:leading-relaxed prose-headings:text-text-primary max-w-none whitespace-pre-wrap">
          {note.content}
        </div>

        <footer className="pt-8 border-t border-border/50">
          <div className="text-sm font-mono text-text-muted">
            Tech stack: <span className="text-text-primary">{note.tech}</span>
          </div>
        </footer>
      </article>
    </main>
  );
}
