import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";
import { EndOfDemo } from "@/components/EndOfDemo";

export const metadata = {
  title: "ZaykaTap Case Study | Amaan Warsi",
  description: "Real-time QR-based menu and ordering platform for hospitality.",
};

export default function ZaykaTapCaseStudy() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <article className="space-y-12">
        <header className="space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary">ZaykaTap</h1>
            <a href="https://thezaykatap.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-400 transition-colors">
              thezaykatap.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xl text-text-secondary leading-relaxed">
            A SaaS QR-based menu and ordering platform engineered to solve real-world performance challenges in hospitality.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium text-text-primary">The Problem</h2>
          <p className="text-text-secondary leading-relaxed">
            Cafes and restaurants needed a fast, zero-friction way for customers to view menus and place orders without waiting for a waiter. The catch? The system had to work flawlessly on slow mobile networks, prevent low-end devices from crashing on large menus, and sync orders to the kitchen instantly without overwhelming the database.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-medium text-text-primary">Architecture</h2>
          <p className="text-text-secondary leading-relaxed">
            I built ZaykaTap with a monolith-ready-for-microservices architecture on the backend, containerized via Docker and Nginx on a raw VPS. To enforce strict separation of concerns, I split the application across subdomains:
          </p>

          <ul className="space-y-2 text-text-secondary text-sm pl-5 list-disc list-outside">
            <li><strong className="text-text-primary">api.zaykatap.com:</strong> Core backend APIs and business logic.</li>
            <li><strong className="text-text-primary">app.zaykatap.com:</strong> The dashboard and core business management logic.</li>
            <li><strong className="text-text-primary">menu.zaykatap.com:</strong> The highly-optimized customer-facing interface.</li>
            <li><strong className="text-text-primary">auth.zaykatap.com:</strong> Isolated authentication and security.</li>
            <li><strong className="text-text-primary">static.zaykatap.com:</strong> Gzipped assets and WebP images, primed for future CDN integration.</li>
          </ul>

          <div className="bg-bg-raised border border-border p-6 rounded-lg font-mono text-xs text-text-secondary overflow-x-auto mt-6">
            <pre className="leading-relaxed text-accent-soft">
              {`          [ Customers (Mobile) ]        [ Kitchen (React Native) ]
                   |                                |
       (Subdomains: menu, static)             (Subdomain: app)
                   |                                |
            [ Nginx Reverse Proxy (Dockerized VPS) ]
                   |
      +------------+------------+-------------+
      |                         |             |
[ PHP Core APIs ]         [ Node.js ]    [ RabbitMQ ]
 (Business Logic)        (WebSockets)  (Async Webhooks &
      |                         ^        PDF Generation)
      v                         |
[ MariaDB DB ] <---(Pub/Sub)--- [ Redis ]`}
            </pre>
          </div>
          <p className="text-text-secondary leading-relaxed text-sm italic mt-2">
            The architecture isolates heavy transactional workloads from real-time connections and asynchronous tasks.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-medium text-text-primary">Engineering for the Real World</h2>
          <div className="space-y-6 mt-4">
            <p className="text-text-secondary leading-relaxed">
              When building ZaykaTap, I didn&apos;t just want it to work on a developer&apos;s fast Wi-Fi; I needed it to survive the chaos of a busy restaurant on a Saturday night.
            </p>
            <p className="text-text-secondary leading-relaxed">
              To keep the menu buttery smooth for users, I implemented on-the-fly image conversion to WebP and a DOM virtualization strategy that prioritizes rendering the first 5 items instantly. On the backend, I swapped constant SQL polling for Redis-backed WebSockets, allowing instant kitchen updates while drastically reducing database load. Finally, I offloaded heavy tasks—like generating pixel-perfect PDF menus and handling payment webhooks—to RabbitMQ to ensure the main API never hangs.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-medium text-text-primary">Business & Technical Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-bg-card border border-border p-6 rounded-lg space-y-2">
              <div className="text-3xl font-medium text-text-primary">&lt; 1.5s</div>
              <div className="text-sm font-medium text-accent-soft">Time to Interactive (3G)</div>
              <p className="text-xs text-text-muted leading-relaxed pt-2 border-t border-border/50">
                Reduced initial payload by 70-80% and lowered browser RAM usage by rendering only 4-5 items initially.
              </p>
            </div>

            <div className="bg-bg-card border border-border p-6 rounded-lg space-y-2">
              <div className="text-3xl font-medium text-text-primary">80-90%</div>
              <div className="text-sm font-medium text-accent-soft">Lower Database I/O</div>
              <p className="text-xs text-text-muted leading-relaxed pt-2 border-t border-border/50">
                Routed real-time updates through Redis as a message broker instead of aggressive SQL polling.
              </p>
            </div>

            <div className="bg-bg-card border border-border p-6 rounded-lg space-y-2">
              <div className="text-3xl font-medium text-text-primary">~100%</div>
              <div className="text-sm font-medium text-accent-soft">Payment Reliability</div>
              <p className="text-xs text-text-muted leading-relaxed pt-2 border-t border-border/50">
                Protected against duplicate billing via idempotency checks and RabbitMQ retries with &lt;100ms API acknowledgment.
              </p>
            </div>

            <div className="bg-bg-card border border-border p-6 rounded-lg space-y-2">
              <div className="text-3xl font-medium text-text-primary">Zero</div>
              <div className="text-sm font-medium text-accent-soft">Deployment Downtime</div>
              <p className="text-xs text-text-muted leading-relaxed pt-2 border-t border-border/50">
                Atomic deployments handled autonomously via GitHub Actions on a containerized Docker/Nginx VPS setup.
              </p>
            </div>
          </div>
        </section>
        <EndOfDemo projectName="ZaykaTap" />
      </article>
      </main>
      <Footer />
    </>
  );
}
