import './PrivacyPolicy.css'

export function PrivacyPolicy() {
  return (
    <main className="policy">
      <header className="policy-header">
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-updated">Last updated October 6, 2026</p>
      </header>

      <p className="policy-lead">
        This policy covers the Balsa Linux website. It does not cover the Balsa Linux operating system. That will be under a separate section, and included with the system.
      </p>

      <section className="policy-section">
        <h2>What we collect</h2>
        <p>
          This site has no accounts or forms, sets no cookies of its own, and does not store anything in your browser.
        </p>
        <p>
          We can see traffic statistics for the site through Cloudflare, such as the number of visits, the pages viewed, and the countries visitors come from. These come from Cloudflare's handling of requests, described under Hosting.
        </p>
      </section>

      <section className="policy-section">
        <h2>Hosting</h2>
        <p>
          <strong>GitHub</strong> hosts the site. Like any web host, GitHub receives standard request data, such as your IP address and browser type, when you load a page. See the{' '}
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub General Privacy Statement</a>.
        </p>
        <p>
          <strong>Cloudflare</strong> sits between your browser and the site to deliver pages quickly and block malicious traffic. Every request passes through Cloudflare's network, which processes your IP address and request details to do this. Cloudflare may set cookies that are strictly necessary for security, such as telling real visitors apart from bots. See the{' '}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare Privacy Policy</a> and the list of{' '}
          <a href="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/" target="_blank" rel="noopener noreferrer">cookies Cloudflare sets</a>.
        </p>
      </section>

      <section className="policy-section">
        <h2>Links to other sites</h2>
        <p>
          This site links to the Balsa repository on GitHub. Pages outside this site follow their own privacy policies.
        </p>
      </section>

      <section className="policy-section">
        <h2>Contact</h2>
        <p>
          Questions about this policy? Email{' '}
          <a href="mailto:balsa-linux@pm.me">balsa-linux@pm.me</a>.
        </p>
      </section>

      <section className="policy-section">
        <h2>Changes</h2>
        <p>
          When this policy changes, the date at the top of the page changes with it.
        </p>
      </section>
    </main>
  )
}
