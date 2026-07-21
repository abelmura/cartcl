import { HeroSection } from '@/components/hero-section'
import { HowToClaimSection } from '@/components/how-to-claim-section'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { NotificationBar } from '@/components/notification-bar'

const CTA_LINK = 'https://www.fkn8s74mztrk.com/F3PBWGB1/GZNKZCRC/'

export default async function RewardsPage() {
  const ctaLink = CTA_LINK

  return (
    <main className="min-h-screen bg-white text-[14px]">
      <div className="mx-auto max-w-[400px] px-4">
        <HeroSection />
        <HowToClaimSection ctaLink={ctaLink} />
      </div>
      <div className="mx-auto max-w-[400px]">
        <FAQSection />
      </div>
      <div className="mx-auto max-w-[400px] px-4 pb-20">
        <Footer ctaLink={ctaLink} />
      </div>
      <NotificationBar />
    </main>
  )
}
