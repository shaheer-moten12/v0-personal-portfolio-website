import Link from 'next/link'
import { Metadata } from 'next'
import {
  Code,
  ShoppingCart,
  Palette,
  Smartphone,
  Zap,
  Lightbulb,
  ArrowLeft,
  Check,
} from 'lucide-react'
import { services } from '@/lib/data'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Services - Alex Johnson',
  description: 'Web development and consulting services offered by Alex Johnson',
}

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
}

export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Services</h1>
        <p className="text-foreground/60 max-w-2xl">
          Comprehensive web development and consulting services tailored to your needs
        </p>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass rounded-lg p-8 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group flex flex-col"
            >
              {/* Icon */}
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[service.icon] || <Code className="w-8 h-8" />}
              </div>

              {/* Header */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-foreground/70 mb-6 flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6 space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-border">
                <div>
                  {service.price && (
                    <p className="text-cyan-400 font-bold">{service.price}</p>
                  )}
                  {service.duration && (
                    <p className="text-sm text-foreground/60">{service.duration}</p>
                  )}
                </div>
                <Button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Process section */}
        <div className="mt-20 border-t border-border pt-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            My Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'Understanding your needs, goals, and vision for the project',
              },
              {
                step: '02',
                title: 'Planning',
                description:
                  'Creating detailed plans, timelines, and technical specifications',
              },
              {
                step: '03',
                title: 'Design',
                description:
                  'Crafting user-centric designs with attention to detail',
              },
              {
                step: '04',
                title: 'Development',
                description:
                  'Building robust, scalable solutions with modern technologies',
              },
              {
                step: '05',
                title: 'Testing',
                description:
                  'Thorough testing and quality assurance for reliability',
              },
              {
                step: '06',
                title: 'Deployment',
                description:
                  'Launching your solution and providing ongoing support',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass rounded-lg p-8 text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="text-4xl font-bold gradient-text mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
