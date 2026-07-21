import { MousePointerClick, Mail, CheckCircle, Gift } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Click on CLAIM NOW below',
    icon: MousePointerClick,
  },
  {
    number: 2,
    title: 'Enter your email and basic info',
    icon: Mail,
  },
  {
    number: 3,
    title: 'Complete 3–5 recommended deals',
    icon: CheckCircle,
  },
  {
    number: 4,
    title: 'Claim reward in your email',
    icon: Gift,
  },
]

export function HowToClaimSection({ ctaLink }: { ctaLink: string }) {
  return (
    <section className="py-5">
      <h2 className="text-[15px] font-bold text-gray-900 text-center mb-3">
        How To Claim Your Gift Card
      </h2>

      {/* Step Cards */}
      <div className="flex flex-col gap-2 mb-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white rounded-[10px] shadow-[0_1px_6px_rgba(0,0,0,0.08)] py-2.5 px-3 flex items-center gap-3"
          >
            {/* Red Circle Number Badge */}
            <div className="flex-shrink-0 w-7 h-7 bg-[#CC0000] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-[12px]">{step.number}</span>
            </div>
            
            {/* Step Content */}
            <div className="flex-1">
              <p className="text-[13px] text-gray-900">{step.title}</p>
            </div>

            {/* Icon */}
            <step.icon className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a 
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#CC0000] hover:bg-[#B30000] active:bg-[#990000] text-white font-bold uppercase text-[14px] h-[44px] rounded-[10px] shadow-lg transition-colors duration-200 flex items-center justify-center"
      >
        Claim Now
      </a>

      {/* Subtext */}
      <p className="text-center text-gray-500 text-[11px] mt-2.5">
        Join thousands of satisfied customers
      </p>
    </section>
  )
}
