---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed publications by Prof. Lim Yoon Pin (林允斌) and the YLP Lab in reversed chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<style>
  #search-toggle .nav-link {
    font-size: 0 !important;
  }
  #search-toggle .nav-link i {
    font-size: 1rem !important;
  }
</style>

<div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem; padding: 0.85rem 1.15rem; margin-bottom: 1.25rem; border-radius: 10px; border: 1px solid var(--global-divider-color); background: var(--global-card-bg-color);">
  <span style="font-size: 0.92rem; color: var(--global-text-color);">
    Showing <strong>66 peer-reviewed publications</strong> indexed on Google Scholar.
  </span>
  <a href="https://scholar.google.com/citations?user=-csRnRQAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.4rem 0.85rem; border-radius: 8px; font-size: 0.85rem; font-weight: 600; background: var(--global-theme-color); color: #ffffff !important; text-decoration: none;">
    <i class="ai ai-google-scholar" aria-hidden="true"></i> View Full Google Scholar Profile
  </a>
</div>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
