import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
        {/* 404 text */}
        <div>
          <h1 className="text-6xl sm:text-8xl font-bold gradient-text mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Page Not Found
          </h2>
          <p className="text-foreground/60 text-lg">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Suggestions */}
        <div className="space-y-3 text-sm text-foreground/70">
          <p>Here are some helpful links instead:</p>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              → Go to Home
            </Link>
            <Link href="/projects" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              → View Projects
            </Link>
            <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              → Get in Touch
            </Link>
          </div>
        </div>

        {/* CTA */}
        <Link href="/">
          <Button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
