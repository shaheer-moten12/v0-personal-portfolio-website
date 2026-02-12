import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ProjectsPreviewSection } from '@/components/sections/ProjectsPreviewSection'
import { ServicesSection } from '@/components/sections/ServicesSection'

export default function Page() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProjectsPreviewSection />
      <ServicesSection />
    </>
  )
}
