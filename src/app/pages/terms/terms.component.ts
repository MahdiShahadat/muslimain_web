import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <div class="container">
      <h1>Terms of Use for Muslimain</h1>
      <p class="effective-date">Effective Date: January 1, 2025</p>
      
      <div class="content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Muslimain! These Terms of Use govern your access to and use of our application. 
            By using Muslimain, you agree to comply with and be bound by these terms.
          </p>
        </section>

        <section>
          <h2>2. Acceptance of Terms</h2>
          <p>
            By accessing or using Muslimain, you agree to be bound by these Terms of Use and our Privacy Policy.
          </p>
        </section>

        <section>
          <h2>3. User Accounts</h2>
          <p>
            To access certain features of Muslimain, you may need to create an account. You are responsible 
            for maintaining the confidentiality of your account information and for all activities that occur 
            under your account.
          </p>
        </section>

        <section>
          <h2>4. Subscriptions and Payments</h2>
          <p>
            Muslimain offers monthly and yearly subscription plans. Payment details are handled securely by 
            third-party processors (e.g., App Store, Google Play). We do not store your payment information.
          </p>
        </section>

        <section>
          <h2>5. Use of the App</h2>
          <p>
            You agree to use Muslimain only for lawful purposes and in a manner that does not infringe the 
            rights of others or restrict their use of the app.
          </p>
        </section>

        <section>
          <h2>6. Intellectual Property</h2>
          <p>
            All content, trademarks, and intellectual property displayed in Muslimain are owned by or licensed 
            to us and are protected by applicable laws.
          </p>
        </section>

        <section>
          <h2>7. User-Generated Content</h2>
          <p>
            If you submit any content to Muslimain, you grant us a non-exclusive, royalty-free, transferable, 
            and sublicensable license to use, reproduce, distribute, prepare derivative works of, and display 
            such content within the app.
          </p>
        </section>

        <section>
          <h2>8. Limitation of Liability</h2>
          <p>
            Muslimain is provided "as is" without warranties of any kind. We are not liable for any damages 
            arising from the use or inability to use the app.
          </p>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>
            These Terms of Use are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved 
            in the courts of [Your Jurisdiction].
          </p>
        </section>

        <section>
          <h2>10. Dispute Resolution</h2>
          <p>
            Any disputes arising out of or related to these Terms of Use will be resolved through binding 
            arbitration in accordance with the rules of [Arbitration Body].
          </p>
        </section>

        <section>
          <h2>11. Changes to Terms</h2>
          <p>
            We may update these Terms of Use from time to time. Any changes will be posted in the app, and 
            the "Effective Date" will be revised accordingly.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at 
            <a href="mailto:admin&#64;muslimain.com" class="inline-link">admin&#64;muslimain.com</a>.
          </p>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px;
    }
    h1 {
      color: var(--text-primary);
      margin-bottom: 8px;
      font-size: 32px;
    }
    .effective-date {
      color: var(--text-secondary);
      margin-bottom: 32px;
      font-size: 14px;
    }
    .content {
      color: var(--text-secondary);
      line-height: 1.6;
    }
    section {
      margin-bottom: 40px;
    }
    h2 {
      color: var(--text-primary);
      font-size: 24px;
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 16px;
    }
    .inline-link {
      color: var(--accent-color);
      text-decoration: underline;
      transition: color 0.3s ease;
    }
    .inline-link:hover {
      color: var(--accent-hover);
    }
  `]
})
export class TermsComponent {}