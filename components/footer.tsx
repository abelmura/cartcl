export function Footer({ ctaLink }: { ctaLink: string }) {
  return (
    <footer className="py-5">
      <nav className="flex items-center justify-center">
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-blue-600 hover:underline transition-colors min-h-[40px] flex items-center px-1"
        >
          User Agreement
        </a>
        <span className="text-gray-400 mx-1.5">·</span>
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-blue-600 hover:underline transition-colors min-h-[40px] flex items-center px-1"
        >
          Privacy Policy
        </a>
        <span className="text-gray-400 mx-1.5">·</span>
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-blue-600 hover:underline transition-colors min-h-[40px] flex items-center px-1"
        >
          Target.com
        </a>
      </nav>
    </footer>
  )
}
