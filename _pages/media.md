---
layout: page
permalink: /media/
title: media
description: Special events, member milestones, defense announcements, and success stories from the YLP Lab at Health Science Center, Ningbo University.
nav: true
nav_order: 7
---

<!-- _pages/media.md -->

<style>
  #search-toggle .nav-link {
    font-size: 0 !important;
  }
  #search-toggle .nav-link i {
    font-size: 1rem !important;
  }

  .ylp-media-page {
    font-family: inherit;
    color: var(--global-text-color);
  }

  /* Intro Banner (matches landing & Join Us pages) */
  .ylp-media-banner {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-left: 4px solid var(--global-theme-color);
    border-radius: 10px;
    padding: 1.15rem 1.35rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .ylp-media-banner-content {
    flex: 1 1 420px;
  }
  .ylp-media-banner-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--global-theme-color);
    margin-bottom: 0.3rem;
  }
  .ylp-media-banner-text {
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--global-text-color);
    margin: 0;
  }
  .ylp-media-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }
  .ylp-media-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.32rem 0.7rem;
    border-radius: 8px;
    font-size: 0.78rem;
    font-weight: 600;
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    color: var(--global-text-color);
  }
  .ylp-media-tag i {
    color: var(--global-theme-color);
  }

  /* Section Header */
  .ylp-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 1.25rem;
    padding-bottom: 0.55rem;
    border-bottom: 2px solid var(--global-divider-color);
  }
  .ylp-section-header-left {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .ylp-section-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    color: var(--global-theme-color);
    font-size: 0.95rem;
  }
  .ylp-section-title {
    font-size: 1.35rem;
    font-weight: 700;
    margin: 0;
    color: var(--global-text-color);
  }

  /* Timeline / Post Feed */
  .ylp-media-feed {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .ylp-media-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 14px;
    padding: 1.65rem;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .ylp-media-card:hover {
    border-color: var(--global-theme-color);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.09);
  }

  /* Post Meta Bar */
  .ylp-post-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 1rem;
    padding-bottom: 0.85rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .ylp-post-badges {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
  .ylp-post-category {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
    font-size: 0.76rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    background: var(--global-theme-color);
    color: #ffffff !important;
  }
  .ylp-post-highlight-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.28rem 0.7rem;
    border-radius: 999px;
    font-size: 0.76rem;
    font-weight: 600;
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    color: var(--global-text-color);
  }
  .ylp-post-highlight-badge i {
    color: var(--global-theme-color);
  }
  .ylp-post-date {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--global-text-color-light);
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    padding: 0.3rem 0.75rem;
    border-radius: 8px;
  }
  .ylp-post-date i {
    color: var(--global-theme-color);
  }

  /* Post Title & Story Content */
  .ylp-post-title {
    font-size: 1.28rem;
    font-weight: 700;
    line-height: 1.4;
    color: var(--global-text-color);
    margin: 0 0 0.9rem 0;
  }
  .ylp-post-body {
    font-size: 0.98rem;
    line-height: 1.75;
    color: var(--global-text-color);
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    border-left: 3px solid var(--global-theme-color);
    border-radius: 10px;
    padding: 1.1rem 1.25rem;
    margin-bottom: 1.25rem;
  }
  .ylp-post-body p {
    margin: 0;
  }
  .ylp-post-body a {
    font-weight: 700;
    color: var(--global-theme-color);
    text-decoration: none;
    border-bottom: 1px dashed var(--global-theme-color);
    transition: border-bottom-style 0.15s ease;
  }
  .ylp-post-body a:hover {
    border-bottom-style: solid;
  }

  /* Honoree Achievement Cards */
  .ylp-honoree-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1.35rem;
  }
  .ylp-honoree-card {
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    padding: 0.95rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  .ylp-honoree-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .ylp-honoree-name {
    font-size: 0.96rem;
    font-weight: 700;
    color: var(--global-text-color);
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    text-decoration: none !important;
  }
  .ylp-honoree-name:hover {
    color: var(--global-theme-color);
  }
  .ylp-honoree-name i {
    color: #0A66C2;
    font-size: 1rem;
  }
  .ylp-honoree-month {
    font-size: 0.74rem;
    font-weight: 700;
    color: var(--global-theme-color);
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    padding: 0.18rem 0.55rem;
    border-radius: 6px;
  }
  .ylp-honoree-outcome {
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--global-text-color-light);
    margin: 0;
  }
  .ylp-honoree-outcome strong {
    color: var(--global-text-color);
  }

  /* Photo Gallery Grid */
  .ylp-media-gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.15rem;
  }
  .ylp-gallery-item {
    margin: 0;
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .ylp-gallery-item:hover {
    transform: translateY(-3px);
    border-color: var(--global-theme-color);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
  .ylp-gallery-img-wrap {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #0f172a;
  }
  .ylp-gallery-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    cursor: zoom-in;
    transition: transform 0.3s ease;
  }
  .ylp-gallery-item:hover .ylp-gallery-img-wrap img {
    transform: scale(1.02);
  }
  .ylp-gallery-caption {
    padding: 0.75rem 0.95rem;
    font-size: 0.82rem;
    line-height: 1.45;
    color: var(--global-text-color-light);
    border-top: 1px solid var(--global-divider-color);
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .ylp-gallery-caption i {
    color: var(--global-theme-color);
    flex-shrink: 0;
  }

  @media (max-width: 767.98px) {
    .ylp-media-card {
      padding: 1.2rem;
    }
    .ylp-honoree-grid,
    .ylp-media-gallery {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="ylp-media-page" markdown="0">
  <!-- Intro Banner -->
  <div class="ylp-media-banner">
    <div class="ylp-media-banner-content">
      <div class="ylp-media-banner-label">Lab News, Milestones &amp; Success Stories</div>
      <p class="ylp-media-banner-text">
        Celebrating key events, postdoctoral and graduate defenses, high-impact publications, patent milestones, and career achievements by members of the <strong>YLP Lab</strong> at Health Science Center, Ningbo University.
      </p>
    </div>
    <div class="ylp-media-tags">
      <span class="ylp-media-tag"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i> Defenses &amp; Graduations</span>
      <span class="ylp-media-tag"><i class="fa-solid fa-trophy" aria-hidden="true"></i> Member Success Stories</span>
      <span class="ylp-media-tag"><i class="fa-solid fa-camera" aria-hidden="true"></i> Lab Events</span>
    </div>
  </div>

  <!-- Chronological Feed Section -->
  <div class="ylp-section-header">
    <div class="ylp-section-header-left">
      <span class="ylp-section-icon"><i class="fa-solid fa-bullhorn" aria-hidden="true"></i></span>
      <h2 class="ylp-section-title">Featured Announcements &amp; Success Stories</h2>
    </div>
  </div>

  <div class="ylp-media-feed">
    <!-- Post 1: March 6, 2026 -->
    <article class="ylp-media-card" id="postdoc-completion-2026-03-06">
      <div class="ylp-post-meta">
        <div class="ylp-post-badges">
          <span class="ylp-post-category">
            <i class="fa-solid fa-user-graduate" aria-hidden="true"></i> Postdoctoral Milestone
          </span>
          <span class="ylp-post-highlight-badge">
            <i class="fa-solid fa-award" aria-hidden="true"></i> All Publications IF &gt; 5 &amp; Patent Filed
          </span>
        </div>
        <time class="ylp-post-date" datetime="2026-03-06">
          <i class="fa-regular fa-calendar-check" aria-hidden="true"></i> March 6, 2026
        </time>
      </div>

      <h3 class="ylp-post-title">
        Back-to-Back Successful Completion of the 2-Year Postdoctoral Program by Dr. Amir Sabbaghian &amp; Dr. Hexian Lin
      </h3>

      <div class="ylp-post-body">
        <p>
          Back to back successful completion of the highly demanding, 2-year post-doctoral program in China by two of my post docs,
          <a href="https://www.linkedin.com/in/amir-sabbaghian-ph-d-959178159/" target="_blank" rel="noopener noreferrer">Amir Sabbaghian, Ph.D</a>
          &amp;
          <a href="https://www.linkedin.com/in/hexian-lin/" target="_blank" rel="noopener noreferrer">Hexian Lin</a>
          in Feb and March 2026, respectively. Amir exited from the program with 2 first-authorship publications and a patent filed, while Hexian exited with 1 first-authorship and 1 co-authorship publications. All publications have IF&gt;5. Well done guys!!
        </p>
      </div>

      <!-- Honoree Summary Strip -->
      <div class="ylp-honoree-grid">
        <div class="ylp-honoree-card">
          <div class="ylp-honoree-top">
            <a class="ylp-honoree-name" href="https://www.linkedin.com/in/amir-sabbaghian-ph-d-959178159/" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin" aria-hidden="true"></i> Amir Sabbaghian, Ph.D.
            </a>
            <span class="ylp-honoree-month">Feb 2026 Exit</span>
          </div>
          <p class="ylp-honoree-outcome">
            Exited with <strong>2 first-authorship publications (IF &gt; 5)</strong> and <strong>1 patent filed</strong>.
          </p>
        </div>

        <div class="ylp-honoree-card">
          <div class="ylp-honoree-top">
            <a class="ylp-honoree-name" href="https://www.linkedin.com/in/hexian-lin/" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin" aria-hidden="true"></i> Hexian Lin, Ph.D.
            </a>
            <span class="ylp-honoree-month">March 2026 Exit</span>
          </div>
          <p class="ylp-honoree-outcome">
            Exited with <strong>1 first-authorship</strong> and <strong>1 co-authorship publication (IF &gt; 5)</strong>.
          </p>
        </div>
      </div>

      <!-- Event Photo Gallery -->
      <div class="ylp-media-gallery">
        <figure class="ylp-gallery-item">
          <div class="ylp-gallery-img-wrap">
            <img
              src="/assets/img/amir_defense.jpg"
              alt="Postdoctoral exit defense of Dr. Amir Sabbaghian"
              data-zoomable
              loading="eager"
            >
          </div>
          <figcaption class="ylp-gallery-caption">
            <i class="fa-solid fa-camera" aria-hidden="true"></i>
            <span>Postdoctoral exit defense of <strong>Dr. Amir Sabbaghian</strong> with Prof. Lim Yoon Pin (林允斌) and the defense committee.</span>
          </figcaption>
        </figure>

        <figure class="ylp-gallery-item">
          <div class="ylp-gallery-img-wrap">
            <img
              src="/assets/img/amir_defense_2.jpg"
              alt="Postdoctoral exit defense of Dr. Hexian Lin"
              data-zoomable
              loading="eager"
            >
          </div>
          <figcaption class="ylp-gallery-caption">
            <i class="fa-solid fa-camera" aria-hidden="true"></i>
            <span>Postdoctoral exit defense of <strong>Dr. Hexian Lin</strong> with Prof. Lim Yoon Pin (林允斌) and the defense committee.</span>
          </figcaption>
        </figure>
      </div>
    </article>

  </div>
</div>
