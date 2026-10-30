---
layout: page
permalink: /join/
title: join us
description: Join Our Research Group — Opportunities for Postdoctoral Fellows, Ph.D. Candidates, Master's Students, and Research Assistants at the YLP Lab, Ningbo University.
nav: true
nav_order: 8
---

<style>
  /* Join Us Page — Matches Main Website & Homepage Design System */
  html {
    scroll-behavior: smooth;
  }

  .ylp-join-banner {
    padding: 1.15rem 1.35rem;
    margin-bottom: 1.5rem;
    border-left: 4px solid var(--global-theme-color);
    background: var(--global-card-bg-color);
    border-top: 1px solid var(--global-divider-color);
    border-right: 1px solid var(--global-divider-color);
    border-bottom: 1px solid var(--global-divider-color);
    border-radius: 0 12px 12px 0;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  }
  .ylp-join-banner-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--global-theme-color);
    margin-bottom: 0.3rem;
  }
  .ylp-join-banner-title {
    font-size: clamp(1.25rem, 2.2vw, 1.5rem);
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 0.45rem 0;
  }
  .ylp-join-banner-text {
    font-size: 0.96rem;
    line-height: 1.65;
    color: var(--global-text-color);
    margin: 0 0 1rem 0;
  }
  .ylp-quick-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.55rem;
  }
  .ylp-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    padding: 0.48rem 0.95rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none !important;
    border: 1px solid var(--global-divider-color);
    background: var(--global-card-bg-color);
    color: var(--global-text-color) !important;
    cursor: pointer;
    transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .ylp-btn:hover {
    transform: translateY(-2px);
    border-color: var(--global-theme-color);
    color: var(--global-theme-color) !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  }
  .ylp-btn-primary {
    background: var(--global-theme-color);
    border-color: var(--global-theme-color);
    color: #ffffff !important;
  }
  .ylp-btn-primary:hover {
    opacity: 0.92;
    color: #ffffff !important;
  }

  /* Compact 4-Column Overview Strip (Matches Homepage Metrics Grid) */
  .ylp-metrics-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.9rem;
    margin: 0.5rem 0 2.25rem 0;
  }
  .ylp-metric-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 1.05rem 1rem;
    text-align: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.03);
  }
  .ylp-metric-val {
    font-size: clamp(1.25rem, 2vw, 1.55rem);
    font-weight: 800;
    color: var(--global-theme-color);
    line-height: 1.2;
    margin-bottom: 0.25rem;
  }
  .ylp-metric-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--global-text-color);
    line-height: 1.35;
  }
  .ylp-metric-sub {
    font-size: 0.74rem;
    color: var(--global-text-color-light);
    margin-top: 0.15rem;
  }

  /* Section Headings (Matches Homepage .ylp-section-title) */
  .ylp-section {
    margin-bottom: 2.25rem;
    scroll-margin-top: 80px;
  }
  .ylp-section-title {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin-bottom: 1rem;
    padding-bottom: 0.45rem;
    border-bottom: 2px solid var(--global-divider-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .ylp-section-title i {
    color: var(--global-theme-color);
  }

  /* Open Positions Filter Tabs & 3-Column Grid */
  .ylp-pos-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.1rem;
  }
  .ylp-pos-tab {
    padding: 0.42rem 0.9rem;
    border-radius: 8px;
    font-size: 0.82rem;
    font-weight: 600;
    border: 1px solid var(--global-divider-color);
    background: var(--global-card-bg-color);
    color: var(--global-text-color);
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .ylp-pos-tab:hover {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }
  .ylp-pos-tab.active {
    background: var(--global-theme-color);
    border-color: var(--global-theme-color);
    color: #ffffff;
  }
  .ylp-pos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.1rem;
  }
  .ylp-pos-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .ylp-pos-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
  }
  .ylp-pos-card.hidden-card {
    display: none;
  }
  .ylp-pos-kicker {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--global-theme-color);
    margin-bottom: 0.25rem;
  }
  .ylp-pos-title {
    font-size: 1.08rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 0.45rem 0;
  }
  .ylp-pos-summary {
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--global-text-color-light);
    margin: 0 0 0.85rem 0;
  }

  /* Accordions inside Position Cards */
  .ylp-accordion-group {
    border-top: 1px solid var(--global-divider-color);
    margin-bottom: 1rem;
  }
  .ylp-acc-item {
    border-bottom: 1px solid var(--global-divider-color);
  }
  .ylp-acc-trigger {
    width: 100%;
    background: none;
    border: none;
    padding: 0.6rem 0.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.84rem;
    font-weight: 700;
    color: var(--global-text-color);
    cursor: pointer;
    text-align: left;
  }
  .ylp-acc-trigger:hover {
    color: var(--global-theme-color);
  }
  .ylp-acc-icon {
    font-size: 0.72rem;
    transition: transform 0.2s ease;
    color: var(--global-theme-color);
  }
  .ylp-acc-item.open .ylp-acc-icon {
    transform: rotate(180deg);
  }
  .ylp-acc-body {
    display: none;
    padding: 0 0.1rem 0.7rem 0.1rem;
    font-size: 0.83rem;
    line-height: 1.55;
    color: var(--global-text-color-light);
  }
  .ylp-acc-item.open .ylp-acc-body {
    display: block;
  }
  .ylp-acc-list {
    margin: 0;
    padding-left: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  /* Research Focus Areas (2x2 Grid matching Homepage Pillar Cards) */
  .ylp-focus-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.1rem;
  }
  .ylp-focus-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 1.25rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .ylp-focus-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
  }
  .ylp-focus-icon {
    font-size: 1.4rem;
    color: var(--global-theme-color);
    margin-bottom: 0.55rem;
    line-height: 1;
  }
  .ylp-focus-title {
    font-size: 1.02rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 0.4rem 0;
  }
  .ylp-focus-desc {
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--global-text-color-light);
    margin: 0;
  }

  /* 2-Column Contact & Application Section (Matches Homepage .ylp-two-col / .ylp-panel) */
  .ylp-two-col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    align-items: start;
  }
  .ylp-panel {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 1.35rem;
  }
  .ylp-panel-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin-top: 0;
    margin-bottom: 0.9rem;
    padding-bottom: 0.45rem;
    border-bottom: 1px solid var(--global-divider-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .ylp-panel-title i {
    color: var(--global-theme-color);
  }
  .ylp-subhead {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--global-theme-color);
    margin: 0.9rem 0 0.45rem 0;
  }
  .ylp-subhead:first-of-type {
    margin-top: 0;
  }
  .ylp-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }
  .ylp-list li {
    position: relative;
    padding-left: 1.15rem;
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--global-text-color);
  }
  .ylp-list li::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 0;
    color: var(--global-theme-color);
    font-weight: 800;
  }
  .ylp-subject-code {
    display: block;
    margin-top: 0.4rem;
    padding: 0.45rem 0.65rem;
    border-radius: 6px;
    background: var(--global-bg-color);
    border: 1px dashed var(--global-theme-color);
    font-family: monospace;
    font-size: 0.8rem;
    color: var(--global-theme-color);
    word-break: break-all;
  }

  /* Form Elements */
  .ylp-field-block {
    margin-bottom: 0.95rem;
  }
  .ylp-form-label {
    display: flex;
    justify-content: space-between;
    font-size: 0.83rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin-bottom: 0.3rem;
  }
  .ylp-form-input,
  .ylp-form-select,
  .ylp-form-textarea {
    width: 100%;
    padding: 0.58rem 0.8rem;
    border-radius: 8px;
    border: 1px solid var(--global-divider-color);
    background: var(--global-bg-color);
    color: var(--global-text-color);
    font-size: 0.88rem;
    font-family: inherit;
    transition: border-color 0.15s ease;
  }
  .ylp-form-input:focus,
  .ylp-form-select:focus,
  .ylp-form-textarea:focus {
    outline: none;
    border-color: var(--global-theme-color);
  }
  .ylp-form-input.input-error,
  .ylp-form-select.input-error,
  .ylp-form-textarea.input-error {
    border-color: #ef4444;
  }
  .ylp-error-msg {
    display: none;
    font-size: 0.76rem;
    color: #ef4444;
    margin-top: 0.25rem;
  }
  .ylp-error-msg.visible {
    display: block;
  }
  .ylp-upload-zone {
    border: 1px dashed var(--global-divider-color);
    border-radius: 8px;
    padding: 0.85rem;
    text-align: center;
    background: var(--global-bg-color);
    cursor: pointer;
    transition: border-color 0.15s ease;
  }
  .ylp-upload-zone:hover {
    border-color: var(--global-theme-color);
  }
  .ylp-form-success {
    display: none;
    padding: 1.2rem;
    border-radius: 10px;
    background: var(--global-bg-color);
    border: 1px solid var(--global-theme-color);
  }
  .ylp-form-success.visible {
    display: block;
  }

  @media (max-width: 991.98px) {
    .ylp-metrics-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .ylp-pos-grid,
    .ylp-focus-grid,
    .ylp-two-col {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 480px) {
    .ylp-metrics-grid {
      grid-template-columns: 1fr 1fr;
      gap: 0.65rem;
    }
  }
  #search-toggle .nav-link {
    font-size: 0 !important;
  }
  #search-toggle .nav-link i {
    font-size: 1rem !important;
  }
</style>

<div markdown="0">
  <!-- Hero Callout Banner (Matches Homepage .ylp-mission-banner) -->
  <div class="ylp-join-banner">
    <div class="ylp-join-banner-label">Health Science Center · Ningbo University</div>
    <h2 class="ylp-join-banner-title">Join Our Research Group</h2>
    <p class="ylp-join-banner-text">
      Led by <strong>Prof. Lim Yoon Pin (林允斌)</strong>—Yangtze River Chair Scholar &amp; Bao Yu Gan Distinguished Professor—our laboratory integrates molecular oncology, phosphoproteomics, WBP2 oncogene discovery, and computational &amp; spatial cancer biology. We welcome motivated <strong>Postdoctoral Fellows, Ph.D. Candidates, Master's Students, and Research Assistants</strong> to join our team in Ningbo, China.
    </p>
    <div class="ylp-quick-links">
      <a class="ylp-btn ylp-btn-primary" href="#open-positions">
        <i class="fa-solid fa-briefcase" aria-hidden="true"></i> Open Positions
      </a>
      <a class="ylp-btn" href="#research-focus">
        <i class="fa-solid fa-microscope" aria-hidden="true"></i> Research Areas
      </a>
      <a class="ylp-btn" href="#contact-apply">
        <i class="fa-solid fa-paper-plane" aria-hidden="true"></i> How to Apply &amp; Contact
      </a>
      <a class="ylp-btn" href="mailto:limyoonpin@nbu.edu.cn">
        <i class="fa-solid fa-envelope" aria-hidden="true"></i> limyoonpin@nbu.edu.cn
      </a>
    </div>
  </div>

  <!-- Compact 4-Card Summary Bar (Matches Homepage Metrics Bar) -->
  <div class="ylp-metrics-grid">
    <div class="ylp-metric-card">
      <div class="ylp-metric-val">20+ Years</div>
      <div class="ylp-metric-label">Translational Oncology</div>
      <div class="ylp-metric-sub">Molecular &amp; Clinical Research</div>
    </div>
    <div class="ylp-metric-card">
      <div class="ylp-metric-val">4 Pillars</div>
      <div class="ylp-metric-label">Core Research Areas</div>
      <div class="ylp-metric-sub">Wet-Lab Oncology &amp; Medical AI</div>
    </div>
    <div class="ylp-metric-card">
      <div class="ylp-metric-val">Global</div>
      <div class="ylp-metric-label">Collaboration Network</div>
      <div class="ylp-metric-sub">Multidisciplinary Partnerships</div>
    </div>
    <div class="ylp-metric-card">
      <div class="ylp-metric-val">3 Tracks</div>
      <div class="ylp-metric-label">Open Positions</div>
      <div class="ylp-metric-sub">Postdocs · Ph.D. · Master's &amp; RAs</div>
    </div>
  </div>

  <!-- Open Positions Section -->
  <section id="open-positions" class="ylp-section">
    <h2 class="ylp-section-title">Open Positions</h2>

    <div class="ylp-pos-tabs" role="tablist" aria-label="Filter open positions">
      <button type="button" class="ylp-pos-tab active" data-filter="all">All Positions (3)</button>
      <button type="button" class="ylp-pos-tab" data-filter="postdoc">Postdoctoral Fellows</button>
      <button type="button" class="ylp-pos-tab" data-filter="phd">Ph.D. Students</button>
      <button type="button" class="ylp-pos-tab" data-filter="grad">Graduate / Master's &amp; RAs</button>
    </div>

    <div class="ylp-pos-grid">
      <!-- Postdoctoral Fellows -->
      <div class="ylp-pos-card" data-category="postdoc">
        <div>
          <div class="ylp-pos-kicker">Full-Time · Actively Recruiting</div>
          <h3 class="ylp-pos-title">Postdoctoral Fellows</h3>
          <p class="ylp-pos-summary">
            Independent and collaborative research in translational oncology, phosphoproteomics, structural biology, or computational/spatial cancer biology.
          </p>

          <div class="ylp-accordion-group">
            <div class="ylp-acc-item open">
              <button type="button" class="ylp-acc-trigger">
                <span>Requirements</span>
                <i class="fa-solid fa-chevron-down ylp-acc-icon" aria-hidden="true"></i>
              </button>
              <div class="ylp-acc-body">
                <ul class="ylp-acc-list">
                  <li>Ph.D. in Molecular Biology, Oncology, Bioinformatics, or Computer Science / Medical Imaging.</li>
                  <li>Strong publication record in peer-reviewed international journals.</li>
                </ul>
              </div>
            </div>
            <div class="ylp-acc-item">
              <button type="button" class="ylp-acc-trigger">
                <span>Responsibilities</span>
                <i class="fa-solid fa-chevron-down ylp-acc-icon" aria-hidden="true"></i>
              </button>
              <div class="ylp-acc-body">
                <ul class="ylp-acc-list">
                  <li>Lead research in WBP2 signaling, biomarker discovery, or spatial tumor microenvironment analysis.</li>
                  <li>Prepare manuscripts, grants, and co-mentor graduate students.</li>
                </ul>
              </div>
            </div>
            <div class="ylp-acc-item">
              <button type="button" class="ylp-acc-trigger">
                <span>Application Expectations</span>
                <i class="fa-solid fa-chevron-down ylp-acc-icon" aria-hidden="true"></i>
              </button>
              <div class="ylp-acc-body">
                <ul class="ylp-acc-list">
                  <li>Competitive Ningbo University Postdoctoral salary package, research support, and career mentorship.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="ylp-btn ylp-btn-primary ylp-select-role-btn" data-role="Postdoctoral Fellow">
          Apply as Postdoctoral Fellow
        </button>
      </div>

      <!-- Ph.D. Students -->
      <div class="ylp-pos-card" data-category="phd">
        <div>
          <div class="ylp-pos-kicker">Doctoral Program · Open</div>
          <h3 class="ylp-pos-title">Ph.D. Students</h3>
          <p class="ylp-pos-summary">
            Doctoral training in cancer precision medicine, oncogenic signal transduction, multi-omics, and AI-driven pathology.
          </p>

          <div class="ylp-accordion-group">
            <div class="ylp-acc-item open">
              <button type="button" class="ylp-acc-trigger">
                <span>Academic Profile Criteria</span>
                <i class="fa-solid fa-chevron-down ylp-acc-icon" aria-hidden="true"></i>
              </button>
              <div class="ylp-acc-body">
                <ul class="ylp-acc-list">
                  <li>Master's degree (or outstanding Bachelor's degree) in Biomedical Sciences, Molecular Biology, Bioinformatics, or Computer Science.</li>
                </ul>
              </div>
            </div>
            <div class="ylp-acc-item">
              <button type="button" class="ylp-acc-trigger">
                <span>Admission Requirements</span>
                <i class="fa-solid fa-chevron-down ylp-acc-icon" aria-hidden="true"></i>
              </button>
              <div class="ylp-acc-body">
                <ul class="ylp-acc-list">
                  <li>Meet Health Science Center, Ningbo University doctoral admission criteria and English proficiency standards.</li>
                </ul>
              </div>
            </div>
            <div class="ylp-acc-item">
              <button type="button" class="ylp-acc-trigger">
                <span>Research Scope</span>
                <i class="fa-solid fa-chevron-down ylp-acc-icon" aria-hidden="true"></i>
              </button>
              <div class="ylp-acc-body">
                <ul class="ylp-acc-list">
                  <li>Thesis projects on WBP2 oncogene networks, circulating cancer biomarkers, and computational oncology.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="ylp-btn ylp-btn-primary ylp-select-role-btn" data-role="Ph.D. Candidate">
          Apply as Ph.D. Candidate
        </button>
      </div>

      <!-- Graduate / Master's Students & RAs -->
      <div class="ylp-pos-card" data-category="grad">
        <div>
          <div class="ylp-pos-kicker">M.Sc. &amp; Research Staff · Open</div>
          <h3 class="ylp-pos-title">Master's Students &amp; RAs</h3>
          <p class="ylp-pos-summary">
            Hands-on experimental and computational training for Master's students and full-time Research Assistants.
          </p>

          <div class="ylp-accordion-group">
            <div class="ylp-acc-item open">
              <button type="button" class="ylp-acc-trigger">
                <span>Entry Criteria</span>
                <i class="fa-solid fa-chevron-down ylp-acc-icon" aria-hidden="true"></i>
              </button>
              <div class="ylp-acc-body">
                <ul class="ylp-acc-list">
                  <li>Bachelor's degree in Life Sciences, Basic Medicine, Biotechnology, Bioinformatics, or Computer Science.</li>
                </ul>
              </div>
            </div>
            <div class="ylp-acc-item">
              <button type="button" class="ylp-acc-trigger">
                <span>Hands-On Learning Scope</span>
                <i class="fa-solid fa-chevron-down ylp-acc-icon" aria-hidden="true"></i>
              </button>
              <div class="ylp-acc-body">
                <ul class="ylp-acc-list">
                  <li>Training in cell culture, Western blotting, qPCR, proteomics workflows, or medical image analysis.</li>
                </ul>
              </div>
            </div>
            <div class="ylp-acc-item">
              <button type="button" class="ylp-acc-trigger">
                <span>Mentorship</span>
                <i class="fa-solid fa-chevron-down ylp-acc-icon" aria-hidden="true"></i>
              </button>
              <div class="ylp-acc-body">
                <ul class="ylp-acc-list">
                  <li>Close guidance from senior postdoctoral researchers and regular progress meetings with Prof. Lim.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="ylp-btn ylp-btn-primary ylp-select-role-btn" data-role="Master's Student / Research Assistant">
          Apply as Master's / RA
        </button>
      </div>
    </div>

  </section>

  <!-- Research Focus Areas Section -->
  <section id="research-focus" class="ylp-section">
    <h2 class="ylp-section-title">Research Focus Areas</h2>
    <div class="ylp-focus-grid">
      <div class="ylp-focus-card">
        <div class="ylp-focus-icon"><i class="fa-solid fa-dna" aria-hidden="true"></i></div>
        <div class="ylp-focus-title">Molecular &amp; Translational Oncology</div>
        <p class="ylp-focus-desc">
          Dissecting the molecular mechanisms of the <strong>WBP2 oncogene</strong> and its regulation of Hippo, Wnt, PI3K/AKT, and AMPK signaling pathways in human cancers.
        </p>
      </div>
      <div class="ylp-focus-card">
        <div class="ylp-focus-icon"><i class="fa-solid fa-microscope" aria-hidden="true"></i></div>
        <div class="ylp-focus-title">Biomarker Discovery &amp; Clinical Validation</div>
        <p class="ylp-focus-desc">
          Applying quantitative <strong>phosphoproteomics</strong> and secretomics to discover blood-based and tissue biomarkers for early cancer detection and <em>in vitro</em> diagnostics (IVD).
        </p>
      </div>
      <div class="ylp-focus-card">
        <div class="ylp-focus-icon"><i class="fa-solid fa-brain" aria-hidden="true"></i></div>
        <div class="ylp-focus-title">Computational &amp; Spatial Cancer Biology</div>
        <p class="ylp-focus-desc">
          Using deep learning, computational histopathology, and multimodal imaging to map the spatial architecture of the tumor microenvironment.
        </p>
      </div>
      <div class="ylp-focus-card">
        <div class="ylp-focus-icon"><i class="fa-solid fa-stethoscope" aria-hidden="true"></i></div>
        <div class="ylp-focus-title">Therapeutic Target Development</div>
        <p class="ylp-focus-desc">
          Integrating structural biology, antibody engineering, and drug discovery to develop targeted therapies that overcome clinical drug resistance.
        </p>
      </div>
    </div>
  </section>

  <!-- Contact & Application Section -->
  <section id="contact-apply" class="ylp-section">
    <h2 class="ylp-section-title">Contact &amp; Application</h2>
    <div class="ylp-two-col">
      <!-- Left Panel: PI Contact & How to Apply Checklist -->
      <div class="ylp-panel">
        <h3 class="ylp-panel-title"><i class="fa-solid fa-address-card" aria-hidden="true"></i> Principal Investigator &amp; How to Apply</h3>

        <div class="ylp-subhead">Principal Investigator</div>
        <ul class="ylp-list">
          <li><strong>Prof. Lim Yoon Pin (林允斌)</strong></li>
          <li>Yangtze River Chair Scholar | Bao Yu Gan Distinguished Professor</li>
          <li>Department of Biochemistry &amp; Molecular Biology, Health Science Center, Ningbo University, Ningbo, Zhejiang, China</li>
          <li>
            Official Email: <a href="mailto:limyoonpin@nbu.edu.cn"><strong>limyoonpin@nbu.edu.cn</strong></a>
          </li>
        </ul>

        <div class="ylp-subhead">Step-by-Step Application Checklist</div>
        <ul class="ylp-list">
          <li>
            <strong>1. Curriculum Vitae (CV):</strong> Full academic CV including education, research experience, and publication list.
          </li>
          <li>
            <strong>2. Cover Letter:</strong> Brief statement (1–2 pages) summarizing past research accomplishments and research interests.
          </li>
          <li>
            <strong>3. References:</strong> Contact information for 2–3 academic referees.
          </li>
          <li>
            <strong>4. Email Subject Line Format:</strong>
            <code class="ylp-subject-code">[Application - Position Title] - Your Full Name</code>
          </li>
        </ul>
      </div>

      <!-- Right Panel: Interactive Inquiry Form -->
      <div class="ylp-panel">
        <h3 class="ylp-panel-title"><i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Send an Application / Inquiry</h3>

        <form id="ylp-application-form" novalidate>
          <div class="ylp-field-block">
            <label class="ylp-form-label" for="ylp-full-name">
              <span>Full Name <span style="color: #ef4444;">*</span></span>
            </label>
            <input type="text" id="ylp-full-name" class="ylp-form-input" placeholder="Your Full Name" required>
            <div class="ylp-error-msg" id="err-full-name">Please enter your full name.</div>
          </div>

          <div class="ylp-field-block">
            <label class="ylp-form-label" for="ylp-email">
              <span>Email Address <span style="color: #ef4444;">*</span></span>
            </label>
            <input type="email" id="ylp-email" class="ylp-form-input" placeholder="your.email@university.edu" required>
            <div class="ylp-error-msg" id="err-email">Please enter a valid email address.</div>
          </div>

          <div class="ylp-field-block">
            <label class="ylp-form-label" for="ylp-position">
              <span>Position Applying For <span style="color: #ef4444;">*</span></span>
            </label>
            <select id="ylp-position" class="ylp-form-select" required>
              <option value="">-- Select Position --</option>
              <option value="Postdoctoral Fellow">Postdoctoral Fellow</option>
              <option value="Ph.D. Candidate">Ph.D. Candidate</option>
              <option value="Master's Student / Research Assistant">Master's Student / Research Assistant</option>
              <option value="General Inquiry / Collaboration">General Inquiry / Collaboration</option>
            </select>
            <div class="ylp-error-msg" id="err-position">Please select a position.</div>
          </div>

          <div class="ylp-field-block">
            <label class="ylp-form-label" for="ylp-message">
              <span>Research Statement / Message <span style="color: #ef4444;">*</span></span>
              <span id="ylp-char-count" style="font-weight: 500; font-size: 0.75rem; color: var(--global-text-color-light);">0 / 2000</span>
            </label>
            <textarea id="ylp-message" class="ylp-form-textarea" rows="4" maxlength="2000" placeholder="Briefly describe your background and research interests..." required></textarea>
            <div class="ylp-error-msg" id="err-message">Please enter at least 20 characters.</div>
          </div>

          <div class="ylp-field-block">
            <label class="ylp-form-label" for="ylp-cv-file">
              <span>Resume / CV (PDF, DOC, DOCX)</span>
            </label>
            <div class="ylp-upload-zone" id="ylp-upload-dropzone">
              <input type="file" id="ylp-cv-file" accept=".pdf,.doc,.docx" style="display: none;">
              <div id="ylp-upload-label" style="font-size: 0.82rem; color: var(--global-text-color-light);">
                <i class="fa-solid fa-file-arrow-up" style="color: var(--global-theme-color); margin-right: 0.35rem;" aria-hidden="true"></i>
                Click to select CV file (attach when sending email)
              </div>
            </div>
          </div>

          <button type="submit" class="ylp-btn ylp-btn-primary" style="width: 100%; padding: 0.65rem;">
            <i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Prepare &amp; Send Application
          </button>
        </form>

        <div class="ylp-form-success" id="ylp-form-success-box" role="status" aria-live="polite">
          <div style="font-weight: 700; color: var(--global-theme-color); margin-bottom: 0.4rem;">
            <i class="fa-solid fa-circle-check" aria-hidden="true"></i> Application Validated &amp; Ready
          </div>
          <p style="font-size: 0.84rem; color: var(--global-text-color); margin: 0 0 0.4rem 0;">
            Formatted Subject Line:
          </p>
          <code class="ylp-subject-code" id="ylp-generated-subject" style="margin-bottom: 0.85rem;"></code>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            <a id="ylp-mailto-launch" href="mailto:limyoonpin@nbu.edu.cn" class="ylp-btn ylp-btn-primary">
              <i class="fa-solid fa-envelope" aria-hidden="true"></i> Open in Email Client
            </a>
            <button type="button" id="ylp-reset-form-btn" class="ylp-btn">Edit</button>
          </div>
        </div>
      </div>
    </div>

  </section>
</div>

<script>
  (function () {
    // 1. Open Positions Filter Tabs
    var tabs = document.querySelectorAll(".ylp-pos-tab");
    var cards = document.querySelectorAll(".ylp-pos-card");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var filter = tab.getAttribute("data-filter");
        tabs.forEach(function (t) {
          t.classList.remove("active");
        });
        tab.classList.add("active");
        cards.forEach(function (card) {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.classList.remove("hidden-card");
          } else {
            card.classList.add("hidden-card");
          }
        });
      });
    });

    // 2. Accordions
    var triggers = document.querySelectorAll(".ylp-acc-trigger");
    triggers.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".ylp-acc-item");
        if (item) item.classList.toggle("open");
      });
    });

    // 3. Role Selection
    var roleBtns = document.querySelectorAll(".ylp-select-role-btn");
    var posSelect = document.getElementById("ylp-position");
    var nameInput = document.getElementById("ylp-full-name");
    roleBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var role = btn.getAttribute("data-role");
        if (posSelect && role) posSelect.value = role;
        var formSection = document.getElementById("contact-apply");
        if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(function () {
          if (nameInput) nameInput.focus();
        }, 400);
      });
    });

    // 4. File Upload Placeholder
    var dropzone = document.getElementById("ylp-upload-dropzone");
    var fileInput = document.getElementById("ylp-cv-file");
    var uploadLabel = document.getElementById("ylp-upload-label");
    var selectedFileName = "";
    if (dropzone && fileInput) {
      dropzone.addEventListener("click", function () {
        fileInput.click();
      });
      fileInput.addEventListener("change", function () {
        if (fileInput.files && fileInput.files[0]) {
          var f = fileInput.files[0];
          selectedFileName = f.name;
          uploadLabel.innerHTML =
            '<i class="fa-solid fa-check" style="color:var(--global-theme-color);margin-right:0.35rem;"></i><strong>' +
            f.name +
            "</strong> selected";
        }
      });
    }

    // 5. Character Counter & Form Validation
    var msgInput = document.getElementById("ylp-message");
    var charCount = document.getElementById("ylp-char-count");
    if (msgInput && charCount) {
      msgInput.addEventListener("input", function () {
        charCount.textContent = msgInput.value.length + " / 2000";
      });
    }

    var form = document.getElementById("ylp-application-form");
    var successBox = document.getElementById("ylp-form-success-box");
    var generatedSubj = document.getElementById("ylp-generated-subject");
    var mailtoLaunch = document.getElementById("ylp-mailto-launch");
    var resetBtn = document.getElementById("ylp-reset-form-btn");

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var emailInput = document.getElementById("ylp-email");
        var valid = true;

        if (!nameInput.value.trim()) {
          nameInput.classList.add("input-error");
          document.getElementById("err-full-name").classList.add("visible");
          valid = false;
        } else {
          nameInput.classList.remove("input-error");
          document.getElementById("err-full-name").classList.remove("visible");
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          emailInput.classList.add("input-error");
          document.getElementById("err-email").classList.add("visible");
          valid = false;
        } else {
          emailInput.classList.remove("input-error");
          document.getElementById("err-email").classList.remove("visible");
        }

        if (!posSelect.value) {
          posSelect.classList.add("input-error");
          document.getElementById("err-position").classList.add("visible");
          valid = false;
        } else {
          posSelect.classList.remove("input-error");
          document.getElementById("err-position").classList.remove("visible");
        }

        if (msgInput.value.trim().length < 20) {
          msgInput.classList.add("input-error");
          document.getElementById("err-message").classList.add("visible");
          valid = false;
        } else {
          msgInput.classList.remove("input-error");
          document.getElementById("err-message").classList.remove("visible");
        }

        if (!valid) return;

        var subject = "[Application - " + posSelect.value + "] - " + nameInput.value.trim();
        var bodyLines = [
          "Dear Prof. Lim Yoon Pin (林允斌),",
          "",
          "I am writing to apply / inquire regarding the " + posSelect.value + " position in your laboratory at the Health Science Center, Ningbo University.",
          "",
          "Applicant Name: " + nameInput.value.trim(),
          "Applicant Email: " + emailInput.value.trim(),
          "Position: " + posSelect.value,
          selectedFileName ? "CV File to Attach: " + selectedFileName : "",
          "",
          "Research Statement / Message:",
          msgInput.value.trim(),
          "",
          "Sincerely,",
          nameInput.value.trim()
        ].filter(Boolean);

        generatedSubj.textContent = subject;
        mailtoLaunch.setAttribute(
          "href",
          "mailto:limyoonpin@nbu.edu.cn?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(bodyLines.join("\n"))
        );
        form.style.display = "none";
        successBox.classList.add("visible");
      });
    }

    if (resetBtn && form && successBox) {
      resetBtn.addEventListener("click", function () {
        successBox.classList.remove("visible");
        form.style.display = "block";
      });
    }
  })();
</script>
