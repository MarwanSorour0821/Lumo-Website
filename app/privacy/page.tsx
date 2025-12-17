import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="mb-8 inline-block hover:opacity-80 transition-opacity" style={{ fontFamily: "'Product Sans'", color: '#B01328' }}>
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Product Sans'" }}>
          Lumo — Privacy Policy
        </h1>
        
        <p className="text-gray-600 mb-8" style={{ fontFamily: "'Product Sans'" }}>
          Effective Date: [Month Day, Year]
        </p>
        
        <div className="prose prose-lg max-w-none space-y-6" style={{ fontFamily: "'Product Sans'" }}>
          <p className="text-gray-700 leading-relaxed">
            Lumo ("the App," "we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the App.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            By using Lumo, you agree to this Privacy Policy.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            If you do not agree, please discontinue use of the App.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Information you provide directly, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>name or username</li>
              <li>email address</li>
              <li>account details</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Health-Related Information</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Information you choose to upload, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>blood test results</li>
              <li>medical documents</li>
              <li>biomarkers</li>
              <li>notes about your health</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This information is used only to provide app features.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not sell or monetize health data.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Device & Usage Information</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              We may automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>device type</li>
              <li>operating system</li>
              <li>app version</li>
              <li>IP address</li>
              <li>usage statistics</li>
              <li>crash logs</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This helps improve performance and security.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.4 Subscription & Purchase Data</h3>
            <p className="text-gray-700 leading-relaxed">
              If you make purchases through the App Store or Google Play, those platforms handle billing.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not receive your full payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>operate and improve the App</li>
              <li>analyze your uploaded results</li>
              <li>deliver personalized insights</li>
              <li>troubleshoot and enhance performance</li>
              <li>communicate with you (support, updates, security notices)</li>
              <li>comply with legal obligations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not use your data for ads targeting based on health information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. AI Processing & Accuracy</h2>
            <p className="text-gray-700 leading-relaxed">
              Lumo uses automated systems to analyze uploaded health information.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              These outputs are for informational and educational purposes only.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              No information from the App should be considered medical advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. How We Store & Protect Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use technical and organizational safeguards, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>encryption in transit (HTTPS)</li>
              <li>restricted access to data</li>
              <li>secure cloud infrastructure</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              No system is 100% secure, but we work to protect your data and notify you of any legally-required breaches.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell personal data.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 mb-4">
              We may share limited information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>trusted service providers (cloud hosting, analytics)</li>
              <li>legal authorities when required by law</li>
              <li>partners only with your explicit consent</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Service providers are required to protect your information.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not share health information for advertising or marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Retention & Deletion</h2>
            <p className="text-gray-700 leading-relaxed">
              We keep your information only as long as necessary to provide the App.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              You may request deletion at any time by contacting:
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              lumobloodapp@gmail.com
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We may retain limited records if required by law or legitimate business needs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have rights to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>access your data</li>
              <li>correct inaccurate information</li>
              <li>delete your data</li>
              <li>withdraw consent</li>
              <li>request a copy of your data</li>
              <li>restrict certain processing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              EU/UK users may also exercise GDPR rights.
            </p>
            <p className="text-gray-700 leading-relaxed">
              California users may have CCPA rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Lumo is not intended for individuals under 18 years of age.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not knowingly collect information from minors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              The App may contain links or integrations with third-party tools (e.g., Apple Health, Google APIs).
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Their privacy practices are not governed by this policy.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We encourage you to review their policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Depending on where you live, your data may be transferred to and processed in other jurisdictions.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We take measures to comply with applicable data-transfer laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We will update the Effective Date and notify users where required by law.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Continued use of the App means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about this Privacy Policy or to exercise rights:
            </p>
            <p className="text-gray-700 leading-relaxed">
              Email: lumobloodapp@gmail.com
            </p>
            <p className="text-gray-700 leading-relaxed">
              Website: <Link href="/support" className="hover:opacity-80 transition-opacity" style={{ color: '#B01328' }}>https://lumo-blood.com/support</Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              By using Lumo, you consent to the collection and processing of your information as described in this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

