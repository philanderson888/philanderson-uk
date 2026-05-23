export function WhereAmIPrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-warm-900 mb-2">Privacy Policy — Where Am I?</h1>
        <p className="text-warm-500 text-sm">Last updated: 23 May 2026</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-warm-900">Who we are</h2>
        <p className="text-warm-600">
          Where Am I? is developed and operated by Philip Anderson, trading as an individual developer.
        </p>
        <div className="text-warm-600">
          <p>Philip Anderson</p>
          <a href="mailto:mail@philanderson.co.uk" className="text-warm-700 underline hover:text-warm-900">
            mail@philanderson.co.uk
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-warm-900">What data we collect</h2>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-warm-800">Account data</h3>
          <ul className="list-disc list-inside text-warm-600 space-y-1">
            <li>Your email address, used to create and identify your account</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-warm-800">Usage data</h3>
          <ul className="list-disc list-inside text-warm-600 space-y-1">
            <li>The names of places you create within the app</li>
            <li>The date and time of each check-in and check-out session</li>
            <li>The duration of time spent at each place</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-base font-medium text-warm-800">We do not collect</h3>
          <ul className="list-disc list-inside text-warm-600 space-y-1">
            <li>Your GPS or device location — the app never accesses location services</li>
            <li>Your real name, phone number, or payment information</li>
            <li>Any data from your contacts, photos, or other apps</li>
            <li>Crash or diagnostics data via any third-party SDK</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-warm-900">How we use your data</h2>
        <p className="text-warm-600">We use your data solely to provide the app's features:</p>
        <ul className="list-disc list-inside text-warm-600 space-y-1">
          <li>To authenticate you and keep your account secure</li>
          <li>To store and display your check-in history and statistics</li>
          <li>To sync your data across devices when you sign in</li>
        </ul>
        <p className="text-warm-600">
          We do not sell your data. We do not use your data for advertising. We do not share your data
          with third parties except as described below.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-warm-900">Who we share data with</h2>
        <p className="text-warm-600">
          <span className="font-medium text-warm-800">Supabase</span> — We use Supabase (supabase.com)
          to store your account and session data securely in the cloud. Supabase processes data on our
          behalf and is bound by data processing agreements. Their privacy policy is available at{' '}
          <a
            href="https://supabase.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-700 underline hover:text-warm-900"
          >
            supabase.com/privacy
          </a>
          .
        </p>
        <p className="text-warm-600">We do not share your data with any other third parties.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-warm-900">Data storage and security</h2>
        <p className="text-warm-600">
          Your data is stored on Supabase infrastructure. We use industry-standard security practices
          including encrypted connections (HTTPS/TLS) and row-level security controls to ensure only
          you can access your own data.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-warm-900">How long we keep your data</h2>
        <p className="text-warm-600">
          We keep your data for as long as your account is active. If you delete your account or
          request deletion of your data, we will remove all personal data associated with your account
          within 30 days.
        </p>
        <p className="text-warm-600">
          To request account or data deletion, email:{' '}
          <a href="mailto:mail@philanderson.co.uk" className="text-warm-700 underline hover:text-warm-900">
            mail@philanderson.co.uk
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-warm-900">Your rights (GDPR / UK GDPR)</h2>
        <p className="text-warm-600">
          If you are based in the United Kingdom or European Union, you have the right to:
        </p>
        <ul className="space-y-2 text-warm-600">
          <li><span className="font-medium text-warm-800">Access</span> — request a copy of the data we hold about you</li>
          <li><span className="font-medium text-warm-800">Correction</span> — ask us to correct inaccurate data</li>
          <li><span className="font-medium text-warm-800">Deletion</span> — ask us to delete your data</li>
          <li><span className="font-medium text-warm-800">Portability</span> — request your data in a machine-readable format</li>
          <li><span className="font-medium text-warm-800">Objection</span> — object to processing of your data</li>
        </ul>
        <p className="text-warm-600">
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:mail@philanderson.co.uk" className="text-warm-700 underline hover:text-warm-900">
            mail@philanderson.co.uk
          </a>
          . We will respond within 30 days.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-warm-900">App Store data declarations (Apple)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-warm-600 border-collapse">
            <thead>
              <tr className="bg-warm-100">
                <th className="text-left px-4 py-2 font-medium text-warm-800 border border-warm-200">Data type</th>
                <th className="text-left px-4 py-2 font-medium text-warm-800 border border-warm-200">Collected</th>
                <th className="text-left px-4 py-2 font-medium text-warm-800 border border-warm-200">Use</th>
                <th className="text-left px-4 py-2 font-medium text-warm-800 border border-warm-200">Linked to identity</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Email address', 'Yes', 'App functionality', 'Yes'],
                ['User ID', 'Yes', 'App functionality', 'Yes'],
                ['Usage data (check-in sessions)', 'Yes', 'App functionality', 'Yes'],
                ['Location data', 'No', '—', '—'],
                ['Crash & diagnostics data', 'No', '—', '—'],
                ['Contacts, photos, health, financial', 'No', '—', '—'],
              ].map(([type, collected, use, linked]) => (
                <tr key={type} className="even:bg-warm-50">
                  <td className="px-4 py-2 border border-warm-200">{type}</td>
                  <td className="px-4 py-2 border border-warm-200">{collected}</td>
                  <td className="px-4 py-2 border border-warm-200">{use}</td>
                  <td className="px-4 py-2 border border-warm-200">{linked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-warm-900">Children</h2>
        <p className="text-warm-600">
          Where Am I? is not directed at children under the age of 13. We do not knowingly collect
          data from children. If you believe a child has provided us with personal data, please
          contact us and we will delete it promptly.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-warm-900">Changes to this policy</h2>
        <p className="text-warm-600">
          We may update this privacy policy from time to time. We will notify users of significant
          changes by updating the "Last updated" date at the top of this page. Continued use of the
          app after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-warm-900">Contact</h2>
        <div className="text-warm-600">
          <p>Philip Anderson</p>
          <a href="mailto:mail@philanderson.co.uk" className="text-warm-700 underline hover:text-warm-900">
            mail@philanderson.co.uk
          </a>
        </div>
      </section>
    </div>
  );
}
