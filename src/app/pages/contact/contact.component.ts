import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="container">
      <h1>Contact Us</h1>
      <div class="content">
        <p class="intro">
          We're here to help! If you have any questions, concerns, or feedback about Muslimain, 
          please don't hesitate to reach out to us.
        </p>

        <section class="contact-info">
          <h2>General Inquiries</h2>
          <p>
            For general questions and support:
            <a href="mailto:support&#64;muslimain.com" class="email-link">support&#64;muslimain.com</a>
          </p>
        </section>

        <section class="contact-info">
          <h2>Response Time</h2>
          <p>
            We strive to respond to all inquiries within 24-48 hours during business days. 
            For urgent matters, please include "URGENT" in your email subject line.
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
      margin-bottom: 24px;
      font-size: 32px;
    }
    .content {
      color: var(--text-secondary);
    }
    .intro {
      font-size: 18px;
      margin-bottom: 32px;
      line-height: 1.6;
    }
    .contact-info {
      margin-bottom: 32px;
    }
    h2 {
      color: var(--text-primary);
      font-size: 24px;
      margin-bottom: 16px;
    }
    p {
      line-height: 1.6;
      margin-bottom: 16px;
    }
    .email-link {
      color: var(--accent-color);
      text-decoration: underline;
      transition: color 0.3s ease;
      display: inline-block;
      margin-top: 8px;
    }
    .email-link:hover {
      color: var(--accent-hover);
    }
  `]
})
export class ContactComponent {}