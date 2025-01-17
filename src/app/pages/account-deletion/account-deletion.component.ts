import { Component } from '@angular/core';

@Component({
  selector: 'app-account-deletion',
  standalone: true,
  template: `
    <div class="container">
      <h1>How to Delete Your Account</h1>
      <p class="warning">Please note that account deletion is permanent and cannot be undone.</p>

      <div class="content">
        <section>
          <h2>Steps to Delete Your Account:</h2>
          
          <div class="step">
            <h3>1. Cancel Your Subscription</h3>
            <p>First, cancel any active subscriptions:</p>
            <ul>
              <li>For iOS: Go to Settings > Apple ID > Subscriptions</li>
              <li>For Android: Open Google Play Store > Subscriptions</li>
            </ul>
          </div>

          <div class="step">
            <h3>2. Access Account Settings</h3>
            <p>Open the Muslimain app and go to Account Settings</p>
          </div>

          <div class="step">
            <h3>3. Initiate Deletion</h3>
            <p>Tap on "Delete Account" Link</p>
          </div>

          <div class="step">
            <h3>4. Confirm Deletion</h3>
            <p>Read the warning message and confirm your decision</p>
          </div>
        </section>

        <section>
          <h2>What happens after deletion?</h2>
          <ul>
            <li>All your personal data will be permanently deleted</li>
            <li>You won't be able to recover your account or data</li>
            <li>Any saved preferences or progress will be lost</li>
          </ul>
        </section>

        <section>
          <h2>Need Help?</h2>
          <p>
            If you're having trouble deleting your account or have any questions, 
            please contact our support team at 
            <a href="mailto:support&#64;muslimain.com" class="inline-link">support&#64;muslimain.com</a>
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
      margin-bottom: 16px;
      font-size: 32px;
    }
    .warning {
      color: var(--warning-color);
      margin-bottom: 32px;
      font-size: 16px;
      padding: 12px 16px;
      background: var(--warning-bg);
      border-radius: 6px;
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
    h3 {
      color: var(--text-primary);
      font-size: 18px;
      margin-bottom: 8px;
    }
    .step {
      margin-bottom: 24px;
    }
    p {
      margin-bottom: 12px;
    }
    ul {
      list-style-type: disc;
      margin-left: 20px;
      margin-bottom: 16px;
    }
    li {
      margin-bottom: 8px;
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
export class AccountDeletionComponent {}