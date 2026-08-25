import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 space-y-10">
      <div className="mb-2">
        <Link
          href="/"
          className="text-xs tracking-body text-text/60 underline-offset-4 hover:underline"
        >
          ←
        </Link>
      </div>

      <h1 className="text-[0.95rem] tracking-[0.22em] lowercase text-text md:text-[1.05rem]">
        Privacy Policy – Eveveliina Studio
      </h1>

      <section className="space-y-8 text-sm leading-relaxed md:text-base">
        <div className="space-y-3">
          <h2 className="text-[0.75rem] tracking-[0.22em] lowercase text-text/70">
            1. Data Controller
          </h2>
          <p>Eveveliina Studio (https://eveveliinastudio.com)</p>
          <p>Email: hello@eveveliinastudio.com</p>
          <p>Business ID: 3574365-6</p>
          <p>Address: Hirvimajantie 26, 05820 Hyvinkää</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-[0.75rem] tracking-[0.22em] lowercase text-text/70">
            2. What data do we collect?
          </h2>
          <p>
            We collect only the information necessary for operating the online store and
            processing orders:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Name and contact details (postal address, email, phone number)</li>
            <li>Order and payment history</li>
            <li>Website usage data (e.g., IP address and cookies)</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-[0.75rem] tracking-[0.22em] lowercase text-text/70">
            3. How do we use your data?
          </h2>
          <p>
            We use personal data to deliver customer orders, confirm payments, provide
            customer service, and improve the website user experience.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-[0.75rem] tracking-[0.22em] lowercase text-text/70">
            4. Data sharing
          </h2>
          <p>
            We do not sell your personal data. We only share data with trusted third parties
            that are essential for providing our services (such as payment processors and
            shipping providers).
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-[0.75rem] tracking-[0.22em] lowercase text-text/70">
            5. Data protection and retention
          </h2>
          <p>
            Customer data is stored on secure servers and is accessible only to authorized
            personnel. Data is retained only as long as necessary for the customer
            relationship or to comply with accounting and legal obligations.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-[0.75rem] tracking-[0.22em] lowercase text-text/70">
            6. Your rights
          </h2>
          <p>Under the EU General Data Protection Regulation (GDPR), you have the right to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (&quot;right to be forgotten&quot;)</li>
          </ul>
          <p>For any of these requests, you can contact us via email.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-[0.75rem] tracking-[0.22em] lowercase text-text/70">
            7. Cookies
          </h2>
          <p>
            We use cookies to ensure the technical functionality of the online store (e.g.,
            shopping cart) and to analyze website traffic. You can disable cookies through
            your browser settings.
          </p>
        </div>
      </section>
    </div>
  );
}
