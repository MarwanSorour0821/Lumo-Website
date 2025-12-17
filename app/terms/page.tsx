import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="mb-8 inline-block hover:opacity-80 transition-opacity" style={{ fontFamily: "'Product Sans'", color: '#B01328' }}>
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Product Sans'" }}>
          Lumo — Terms of Service
        </h1>
        
        <p className="text-gray-600 mb-8" style={{ fontFamily: "'Product Sans'" }}>
          Effective Date: [Month Day, Year]
        </p>
        
        <div className="prose prose-lg max-w-none space-y-6" style={{ fontFamily: "'Product Sans'" }}>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Lumo ("the App," "we," "us," "our").
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            By using Lumo, you agree to these Terms of Service ("Terms").
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            If you do not agree, do not use the App.
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. What Lumo Does</h2>
            <p className="text-gray-700 leading-relaxed">
              Lumo provides informational analysis of blood test results and other health-related data that you upload. Lumo is not a medical device and does not provide medical advice, diagnosis, treatment, or prescription.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The App is for informational and educational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Not Medical Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nothing in the App should be interpreted as:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
              <li>medical advice</li>
              <li>diagnosis</li>
              <li>treatment guidance</li>
              <li>clinical interpretation</li>
              <li>professional recommendation</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Always seek the advice of a qualified healthcare professional with questions about your health.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              You agree not to rely on the App as a substitute for professional medical judgment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>be at least 18 years old</li>
              <li>have legal permission to use the App in your region</li>
              <li>accept these Terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. User Account</h2>
            <p className="text-gray-700 leading-relaxed">
              You may be required to create an account.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>maintaining account security</li>
              <li>safeguarding login credentials</li>
              <li>all activity that occurs under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. User Data</h2>
            <p className="text-gray-700 leading-relaxed">
              You may upload information such as blood test results or personal health information.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 mb-4">
              By doing so, you grant Lumo permission to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>store the data securely</li>
              <li>process it for analysis within the App</li>
              <li>use it to provide app features</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not sell personal data.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              For more details, see our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Storage & Deletion</h2>
            <p className="text-gray-700 leading-relaxed">
              You may request data deletion by contacting us at lumobloodapp@gmail.com.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We may retain limited information if required by law or legitimate business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>misuse or interfere with the App</li>
              <li>reverse engineer, modify, or copy source code</li>
              <li>use the App for unlawful purposes</li>
              <li>upload harmful or unauthorized files</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Subscription & Payments</h2>
            <p className="text-gray-700 leading-relaxed">
              Some features may require payment or a subscription.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              All fees are charged through the App Store or Google Play under their terms.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              All purchases are final and non-refundable, except where required by law or platform policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Modifications to the Service</h2>
            <p className="text-gray-700 leading-relaxed">
              We may modify, suspend, or discontinue features at any time without liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed">
              The App is provided "as-is" and without warranties.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 mb-4">
              We make no guarantees regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>accuracy of interpretations</li>
              <li>fitness for a particular purpose</li>
              <li>uninterrupted access</li>
              <li>error-free operation</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You assume all risk for using the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lumo, its owners, employees, and affiliates are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>indirect, incidental, or consequential damages</li>
              <li>decisions made based on the App's information</li>
              <li>health outcomes or medical consequences</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our total liability will not exceed the amount you paid in the last 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              The App may use or link to third-party tools or services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We are not responsible for those services, their content, or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may suspend or terminate access to the App at our discretion, including for violations of these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              You may stop using the App at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">14. Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Continued use of the App means you accept the updated Terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

