import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Freelancer Time Audit Detector',
  description: 'Detect time tracking anomalies for remote freelancers. Analyze time logs for padding, unusual patterns, and productivity inconsistencies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="32ad37ff-8fd6-4ee2-b16d-c8559922378c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
