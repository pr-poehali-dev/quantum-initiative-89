import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How much caffeine is in one strip?",
      answer:
        "Each VoltTabs strip contains 100 mg of caffeine — roughly the same as a standard cup of coffee, in a clean, sugar-free form.",
    },
    {
      question: "How fast does it work?",
      answer:
        "The strip dissolves on your tongue in under 10 seconds, and most people feel the boost within a few minutes as the active ingredients absorb quickly.",
    },
    {
      question: "Do I need water to use it?",
      answer:
        "No water required. Just place a strip on your tongue and let it dissolve — perfect for the gym, travel, or anywhere on the go.",
    },
    {
      question: "Are VoltTabs sugar free?",
      answer:
        "Yes. VoltTabs are completely sugar free and designed for clean energy without the crash that comes from sugary drinks.",
    },
    {
      question: "How many strips can I take per day?",
      answer:
        "We recommend no more than 4 strips per day. As with any caffeine product, listen to your body and adjust to your tolerance.",
    },
    {
      question: "Which flavors are available?",
      answer:
        "VoltTabs come in three bold flavors: Lemon Lime, Wild Berry, and Mango. Try the variety pack to find your favorite.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Everything you need to know about VoltTabs caffeine energy strips.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-primary/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-primary font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}