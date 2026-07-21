export function HeroSection() {
  return (
    <section className="bg-[#FFF5F5] -mx-4 px-4 pt-5 pb-6">
      {/* Target Logo */}
      <div className="flex justify-center mb-4">
        <div className="w-[72px] h-[72px] bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.08)] flex items-center justify-center p-3">
          <svg
            viewBox="0 0 60 60"
            className="w-[48px] h-[48px]"
            aria-label="Target logo"
          >
            <circle cx="30" cy="30" r="28" fill="#CC0000" />
            <circle cx="30" cy="30" r="19" fill="white" />
            <circle cx="30" cy="30" r="10" fill="#CC0000" />
          </svg>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-[21px] font-bold text-[#CC0000] text-center mb-2">
        Target Rewards Program
      </h1>

      {/* Subtext */}
      <p className="text-center text-[13px] text-gray-600 leading-relaxed">
        Complete a few simple steps and receive a gift card reward worth up to{' '}
        <span className="font-bold text-[#CC0000]">$750</span>
      </p>
    </section>
  )
}
