'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Is this offer real?',
    answer:
      'Yes! This is a legitimate promotional offer. Simply complete the required steps to receive your gift card reward.',
  },
  {
    question: 'How do I receive my gift card?',
    answer:
      'After completing all required steps, your gift card code will be sent directly to your email within 24-48 hours.',
  },
  {
    question: 'What are "deals" I need to complete?',
    answer:
      'Deals are simple tasks like signing up for free trials, downloading apps, or completing surveys from our partner brands.',
  },
]

export function FAQSection() {
  return (
    <section className="bg-[#F7F7F7] -mx-4 px-4 py-5">
      <h2 className="text-[15px] font-bold text-gray-900 text-center mb-3">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-white rounded-[10px] mb-2 border-none shadow-[0_1px_4px_rgba(0,0,0,0.06)] px-3"
          >
            <AccordionTrigger className="text-left text-[13px] text-gray-900 hover:no-underline py-3">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[12px] text-gray-600 pb-3">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
