'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const EmailAutomationPage = () => {
  return (
    <div className="relative min-h-screen bg-dark">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 noise" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero section */}
        <section className="container mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              E-Mail Marketing Automatisierung
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Erstellen Sie professionelle HTML-E-Mails und automatisieren Sie Ihre E-Mail-Marketing-Kampagnen.
            </p>
          </motion.div>
        </section>

        {/* Main content sections */}
        <section className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* HTML Email Creation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-dark-800/50 backdrop-blur-lg border-primary-700/20 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-400">HTML E-Mail Erstellung</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-dark-900/80 p-4 rounded-md border border-primary-900/30">
                      <h3 className="text-lg font-medium text-primary-300 mb-3">Grundlagen des HTML E-Mail Designs</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span>Tabellenbasiertes Layout für maximale Kompatibilität</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span>Inline CSS statt externe Stylesheets</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span>Responsive Design mit Media Queries</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span>Barrierefreiheit und Alt-Texte für Bilder</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-dark-900/80 p-4 rounded-md border border-primary-900/30">
                      <h3 className="text-lg font-medium text-primary-300 mb-3">Empfohlene Tools</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span><strong>MJML</strong> - Framework für responsive Emails</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span><strong>Foundation for Emails</strong> - Responsive Email Framework</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span><strong>Litmus</strong> - E-Mail-Vorschau und Tests</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span><strong>EmailOnAcid</strong> - Cross-Client-Kompatibilitätstests</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-dark-900/80 p-4 rounded-md border border-primary-900/30">
                      <h3 className="text-lg font-medium text-primary-300 mb-3">Beispiel-Code-Struktur</h3>
                      <div className="bg-dark-950 p-3 rounded text-sm font-mono text-gray-300 overflow-x-auto">
                        <pre>{`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <!--[if mso]>
    <style type="text/css">
        table { border-collapse: collapse; }
    </style>
    <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <!-- Email content here -->
            </td>
        </tr>
    </table>
</body>
</html>`}</pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Email Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-dark-800/50 backdrop-blur-lg border-primary-700/20 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary-400">E-Mail Automatisierung</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-dark-900/80 p-4 rounded-md border border-secondary-900/30">
                      <h3 className="text-lg font-medium text-secondary-300 mb-3">Automatisierungsstrategien</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-secondary-500 mr-2">•</span>
                          <span>Willkommens-Sequenzen für neue Abonnenten</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-500 mr-2">•</span>
                          <span>Lead-Nurturing-Kampagnen mit personalisierten Inhalten</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-500 mr-2">•</span>
                          <span>Trigger-basierte E-Mails für Benutzeraktivitäten</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-500 mr-2">•</span>
                          <span>A/B-Tests für Betreffzeilen und Inhalte</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-dark-900/80 p-4 rounded-md border border-secondary-900/30">
                      <h3 className="text-lg font-medium text-secondary-300 mb-3">Automatisierungs-Tools</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-secondary-500 mr-2">•</span>
                          <span><strong>Mailchimp</strong> - Umfassende E-Mail-Marketing-Plattform</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-500 mr-2">•</span>
                          <span><strong>ActiveCampaign</strong> - Leistungsstarke Automatisierungsfunktionen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-500 mr-2">•</span>
                          <span><strong>Zapier</strong> - Verbindung mit anderen Tools und Services</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-500 mr-2">•</span>
                          <span><strong>Node.js & SendGrid</strong> - Eigene Automatisierungslösungen</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-dark-900/80 p-4 rounded-md border border-secondary-900/30">
                      <h3 className="text-lg font-medium text-secondary-300 mb-3">Beispiel Node.js Automatisierung</h3>
                      <div className="bg-dark-950 p-3 rounded text-sm font-mono text-gray-300 overflow-x-auto">
                        <pre>{`// Beispiel für E-Mail-Automatisierung mit Node.js und SendGrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Funktion zum Senden einer Willkommens-E-Mail
async function sendWelcomeEmail(user) {
  const msg = {
    to: user.email,
    from: 'marketing@ihrefirma.de',
    subject: 'Willkommen bei Ihrer Firma!',
    templateId: 'd-xxxxxxxxxxxxx',
    dynamicTemplateData: {
      first_name: user.firstName,
      // Weitere personalisierte Daten
    }
  };
  
  try {
    await sgMail.send(msg);
    console.log('Welcome email sent successfully');
  } catch (error) {
    console.error('Error sending welcome email', error);
  }
}`}</pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Advanced techniques section */}
        <section className="container mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">Fortgeschrittene Techniken</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Technique 1 */}
              <Card className="bg-dark-800/50 backdrop-blur-lg border-primary-700/20">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-400">Personalisierung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Nutzen Sie Kundendaten und Verhaltensanalysen, um maßgeschneiderte E-Mail-Inhalte zu erstellen, die individuellen Bedürfnissen entsprechen.
                  </p>
                  <div className="bg-dark-900/80 p-3 rounded-md border border-primary-900/30 text-sm">
                    <strong className="text-primary-300">Tipp:</strong> Verwenden Sie dynamische Inhaltsblöcke, die sich basierend auf Benutzermerkmalen ändern.
                  </div>
                </CardContent>
              </Card>

              {/* Technique 2 */}
              <Card className="bg-dark-800/50 backdrop-blur-lg border-primary-700/20">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-400">Segmentierung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Teilen Sie Ihre E-Mail-Liste in spezifische Gruppen ein, um zielgerichtetere und relevantere Kampagnen zu versenden.
                  </p>
                  <div className="bg-dark-900/80 p-3 rounded-md border border-primary-900/30 text-sm">
                    <strong className="text-primary-300">Tipp:</strong> Segmentieren Sie nach Kaufhistorie, Engagement-Level oder demografischen Daten.
                  </div>
                </CardContent>
              </Card>

              {/* Technique 3 */}
              <Card className="bg-dark-800/50 backdrop-blur-lg border-primary-700/20">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-400">Analytics & Optimierung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Analysieren Sie wichtige Metriken wie Öffnungsraten, Klickraten und Conversions, um Ihre E-Mail-Kampagnen kontinuierlich zu verbessern.
                  </p>
                  <div className="bg-dark-900/80 p-3 rounded-md border border-primary-900/30 text-sm">
                    <strong className="text-primary-300">Tipp:</strong> Implementieren Sie UTM-Parameter für erweiterte Tracking-Möglichkeiten in Google Analytics.
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* CTA section */}
        <section className="container mx-auto px-6 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary-900/50 to-secondary-900/50 p-10 rounded-xl backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Bereit für professionelles E-Mail-Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Als Digital Content Manager kann ich Ihnen bei der Erstellung ansprechender HTML-E-Mails und leistungsstarker Automatisierungslösungen helfen.
            </p>
            <a 
              href="/kontakt" 
              className="inline-block px-8 py-3 text-lg font-medium rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:opacity-90 transition-opacity"
            >
              Kontaktieren Sie mich
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default EmailAutomationPage;