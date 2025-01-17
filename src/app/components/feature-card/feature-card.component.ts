import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  template: `
    <div class="feature-card">
      <div class="icon-wrapper">
        <span class="material-icons">{{icon}}</span>
      </div>
      <h3>{{title}}</h3>
      <p>{{description}}</p>
    </div>
  `,
  styles: [`
    .feature-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    .icon-wrapper {
      background: var(--accent-color);
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 12px;
    }
    .material-icons {
      color: white;
      font-size: 20px;
    }
    h3 {
      color: var(--text-primary);
      margin: 0 0 8px;
      font-size: 16px;
      font-weight: 600;
    }
    p {
      color: var(--text-secondary);
      margin: 0;
      font-size: 14px;
      line-height: 1.4;
    }

    @media (max-width: 640px) {
      .feature-card {
        padding: 12px;
      }
      .icon-wrapper {
        width: 32px;
        height: 32px;
        margin-bottom: 8px;
      }
      .material-icons {
        font-size: 16px;
      }
      h3 {
        font-size: 14px;
        margin-bottom: 4px;
      }
      p {
        font-size: 12px;
        line-height: 1.3;
      }
    }
  `]
})
export class FeatureCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
}