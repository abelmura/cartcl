'use client'

import { useState, useEffect } from 'react'
import { X, Gift } from 'lucide-react'

const messages = [
  { text: 'Emily from Ohio just claimed a $750 gift card', time: 'A few moments ago' },
  { text: 'Jessica from Arizona just claimed her reward', time: 'Just now' },
  { text: 'Marcus from Texas just claimed a $750 gift card', time: '2 minutes ago' },
  { text: 'Brittany from Florida just claimed her reward', time: 'A few moments ago' },
  { text: 'Tyler from Georgia just claimed a $750 gift card', time: 'Just now' },
  { text: 'Aisha from California just claimed her reward', time: '1 minute ago' },
]

export function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length)
        setIsAnimating(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [isVisible])

  if (!isVisible) return null

  const currentMessage = messages[currentIndex]

  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 flex justify-center">
      <div
        className={`w-full max-w-[400px] bg-white rounded-xl shadow-[0_3px_12px_rgba(0,0,0,0.12)] py-2.5 px-3 flex items-center gap-2.5 transition-all duration-300 ${
          isAnimating ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="flex-shrink-0 w-8 h-8 bg-[#FFEBEB] rounded-full flex items-center justify-center">
          <Gift className="w-4 h-4 text-[#CC0000]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-semibold text-gray-900 truncate">
            {currentMessage.text}
          </p>
          <p className="text-[10px] text-gray-500">{currentMessage.time}</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5 text-gray-400" />
        </button>
      </div>
    </div>
  )
}
