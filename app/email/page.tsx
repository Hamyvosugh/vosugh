// app/email-automation/page.tsx
import React from 'react'
import Navbar from '@/components/Navbar'
import EmailAutomationPage from '@/components/EmailAutomationPage'

export const metadata = {
  title: 'HTML Email & Automation | Hamy Vosugh',
  description: 'Erfahren Sie, wie Sie professionelle HTML-E-Mails erstellen und Ihre E-Mail-Marketing-Kampagnen automatisieren können.',
  keywords: 'email marketing, html email, email automation, digital marketing, email templates',
}

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-hidden">

      <Navbar />
      <EmailAutomationPage />
    </main>
  )
}