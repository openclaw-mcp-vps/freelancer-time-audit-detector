export default function Home() {
  const faqs = [
    {
      q: 'What file formats are supported for time log uploads?',
      a: 'We support CSV exports from Toggl, Harvest, Clockify, and any standard CSV with date, duration, and description columns.'
    },
    {
      q: 'How does the anomaly detection work?',
      a: 'We use statistical algorithms to flag entries that deviate from a freelancer\'s baseline — including suspiciously round hours, unusually long sessions, and low-activity periods billed at full rate.'
    },
    {
      q: 'Is my data stored after analysis?',
      a: 'No. Time logs are processed in-memory and discarded immediately after your report is generated. Nothing is persisted on our servers.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          HR &amp; Hiring Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Time Tracking Anomalies in Freelancer Logs
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload freelancer time logs and instantly surface padding, unusual work patterns, and productivity inconsistencies — before you pay the invoice.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Auditing — $11/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[['Statistical Analysis', 'Flags outliers vs. baseline'], ['Pattern Detection', 'Spots round-hour padding'], ['Instant Reports', 'PDF-ready audit summaries']].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <p className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#8b949e] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$11</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {['Unlimited log uploads','Anomaly detection reports','CSV &amp; PDF export','Email support','New detectors as released'].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[#8b949e] text-xs mt-12">
          &copy; {new Date().getFullYear()} Freelancer Time Audit Detector. All rights reserved.
        </p>
      </section>
    </main>
  )
}
