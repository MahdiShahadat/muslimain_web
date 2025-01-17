import { Component } from '@angular/core';
import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeatureCardComponent],
  template: `
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Welcome to <span class="brand-highlight">Muslimain!</span></h1>
        <p class="hero-subtitle">
          Your comprehensive Islamic companion app featuring prayer times, 
          educational content, and spiritual tools.
        </p>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="features-grid">
          <app-feature-card
            icon="menu_book"
            title="Daily Learning"
            description="Enhance your Islamic knowledge with daily lessons and reminders"
          ></app-feature-card>
          
          <app-feature-card
            icon="schedule"
            title="Salah Timing"
            description="Accurate prayer times with customizable Adhan notifications"
          ></app-feature-card>
          
          <app-feature-card
            icon="calendar_month"
            title="Hijri Calendar"
            description="Track Islamic dates and important religious occasions"
          ></app-feature-card>
          
          <app-feature-card
            icon="explore"
            title="Qibla Finder"
            description="Find Qibla direction accurately from anywhere"
          ></app-feature-card>

          <app-feature-card
            icon="history_edu"
            title="Prophet Stories"
            description="Learn from the inspiring stories of the Prophets"
          ></app-feature-card>

          <app-feature-card
            icon="groups"
            title="Sahabah Stories"
            description="Discover the inspiring lives of Prophet Muhammad's companions"
          ></app-feature-card>

          <app-feature-card
            icon="auto_stories"
            title="Quranic Stories"
            description="Discover the wisdom in stories from the Holy Quran"
          ></app-feature-card>

          <app-feature-card
            icon="quiz"
            title="Islamic Trivia"
            description="Test your knowledge with educational Islamic quizzes"
          ></app-feature-card>

          <app-feature-card
            icon="grid_on"
            title="Wordsearch Game"
            description="Find Islamic words in entertaining puzzle games"
          ></app-feature-card>

          <app-feature-card
            icon="palette"
            title="Coloring Game"
            description="Learn about Islamic art through creative coloring activities"
          ></app-feature-card>

          <app-feature-card
            icon="favorite"
            title="Dua & Adhkar"
            description="Daily supplications and remembrance collection"
          ></app-feature-card>

          <app-feature-card
            icon="mosque"
            title="Masjid Finder"
            description="Locate nearby mosques and prayer spaces"
          ></app-feature-card>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Your Complete Islamic Companion</h2>
          <p>
            Download now and enhance your spiritual journey with our comprehensive 
            suite of Islamic tools and resources.
          </p>
          <div class="app-buttons">
            <a href="https://apps.apple.com/app/muslimain" class="app-store-button" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store">
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.muslimain" class="play-store-button" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play">
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      padding: var(--section-padding) 0;
    }

    section + section {
      margin-top: var(--section-spacing);
    }

    .hero {
      text-align: center;
      background: linear-gradient(to bottom, var(--accent-color) 0%, transparent 100%);
      border-radius: 24px;
      margin: 0 var(--container-padding);
    }

    .hero-title {
      font-size: clamp(48px, 8vw, 72px);
      color: var(--text-primary);
      margin: 0 0 24px;
      line-height: 1.1;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .brand-highlight {
      background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
    }

    .hero-subtitle {
      color: var(--text-secondary);
      font-size: clamp(20px, 3vw, 24px);
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.5;
      font-weight: 400;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .cta {
      text-align: center;
    }

    .cta-content {
      background: var(--accent-color);
      padding: var(--section-padding);
      border-radius: 16px;
    }

    .cta h2 {
      color: white;
      font-size: clamp(24px, 4vw, 36px);
      margin: 0 0 16px;
    }

    .cta p {
      color: rgba(255, 255, 255, 0.9);
      font-size: clamp(14px, 2vw, 18px);
      margin: 0 0 32px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .app-buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .app-buttons img {
      height: 40px;
      transition: transform 0.3s ease;
    }

    .app-buttons a:hover img {
      transform: translateY(-2px);
    }

    @media (max-width: 640px) {
      .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      .app-buttons {
        flex-direction: column;
        align-items: center;
      }
      
      .app-buttons img {
        height: 36px;
      }

      .hero-title {
        font-size: 36px;
      }

      .hero-subtitle {
        font-size: 16px;
      }

      .cta h2 {
        font-size: 24px;
      }

      .cta p {
        font-size: 14px;
      }
    }
  `]
})
export class HomeComponent {}