import Link from 'next/link'
import { Metadata } from 'next'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Award } from 'lucide-react'
import { certificates } from '@/lib/data'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Certificates - Alex Johnson',
  description: 'Professional certifications and credentials of Alex Johnson',
}

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'cloud':
      return 'cyan'
    case 'web development':
      return 'purple'
    default:
      return 'green'
  }
}

export default function CertificatesPage() {
  const groupedCerts = certificates.reduce(
    (acc, cert) => {
      if (!acc[cert.category]) {
        acc[cert.category] = []
      }
      acc[cert.category].push(cert)
      return acc
    },
    {} as Record<string, typeof certificates>
  )

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
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Certifications</h1>
        <p className="text-foreground/60 max-w-2xl">
          Professional certifications and credentials that validate my expertise
        </p>
      </div>

      {/* Certificates grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {Object.entries(groupedCerts).map(([category, certs]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">{category}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certs.map((cert) => (
                <div
                  key={cert.id}
                  className="glass rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex flex-col"
                >
                  {/* Certificate image */}
                  {cert.imageUrl && (
                    <div className="relative h-40 bg-foreground/5 overflow-hidden">
                      <Image
                        src={cert.imageUrl}
                        alt={cert.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Award className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <Badge
                          variant={getCategoryColor(category) as any}
                          className="text-xs"
                        >
                          {category}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-foreground text-lg mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm">{cert.issuer}</p>
                    </div>

                    {/* Issue date */}
                    <p className="text-sm text-foreground/60 mb-4">
                      Issued: {cert.issueDate}
                    </p>

                    {/* Credential ID */}
                    {cert.credentialId && (
                      <div className="mb-4 p-3 bg-foreground/5 rounded text-xs">
                        <p className="text-foreground/60 mb-1">Credential ID:</p>
                        <p className="font-mono text-foreground/80 break-all">
                          {cert.credentialId}
                        </p>
                      </div>
                    )}

                    {/* Links */}
                    {cert.credentialUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 mt-auto"
                      >
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Verify Credential
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
