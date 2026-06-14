<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<img src="./app/icon.ico" alt="Logo" height=50">

<h3 align="center">Clearbook</h3>

  <p align="center">
   This repository consists of the codes of Frontend role assessment for Finecore . It is prototype or mock application that simply informs business owner about; what money came in, what went out, what he/she is owed, what they need to pay for soon, what they are running short, what next actions to take.  It is currently bootstrapped Next and ShadCN which simply uses Tailwind CSS. It also utilizes a hook - "Pre commit hook" that runs lint check and also typescript compiler to check for errors.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Template</a>
      <ul>
        <li><a href="#technologies">Technologies Used</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#conventions-followed">Conventions Followed</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#features-built">Features Built</a>
      <ul>
        <li><a href="#auth-shell">Auth Shell</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#transactions">Transactions</a></li>
        <li><a href="#insights">Insights</a></li>
        <li><a href="#design-system">Design System</a></li>
      </ul>
    </li>
    <li><a href="#what-id-do-differently">What I'd Do Differently</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

`...`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technologies Used

- Framework: Next JS (15) + TypeScript
- UI: Shadcn and Tailwindcss
- Styling: CSS
- Formatting: ESLint and Prettier
- Git hooks: Husky

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Project Structure

    .
    ├── __tests__                                   # All test files
    │   ├── components                              # Component-level tests
    │   ├── layouts                                 # Layout-level tests
    │   └── pages
    │       └── homepage.test.js                   # Homepage test
    ├── .husky                                      # Git hook scripts
    │   ├── commit-msg                              # Enforces commit message standard
    │   ├── post-commit                             # Runs after a commit completes
    │   ├── pre-commit                              # Runs lint + tsc before committing
    │   └── pre-push                                # Runs checks before pushing
    ├── app                                         # Next.js App Router root
    │   ├── (authenticated)                         # Route group — shared authenticated layout
    │   │   ├── alerts                              # Alerts page
    │   │   ├── dashboard                           # Dashboard page
    │   │   │   └── components                      # Dashboard section components
    │   │   │       ├── attention-section.tsx       # Overdue invoices + upcoming obligations
    │   │   │       ├── forecast-section.tsx        # 30-day cash forecast chart + AI chat
    │   │   │       ├── metric-cards.tsx            # Balance, incoming, bills, runway KPIs
    │   │   │       ├── smart-insights.tsx          # AI-generated insight cards
    │   │   │       └── welcome-card.tsx            # Health score radial chart + greeting
    │   │   ├── forecast                            # Forecast page
    │   │   ├── help-and-support                    # Help & support page
    │   │   ├── insights                            # Insights page
    │   │   │   └── components                      # Income chart, expense breakdown, AI analysis
    │   │   ├── settings                            # Settings page
    │   │   ├── transactions                        # Transactions page
    │   │   │   └── components
    │   │   │       ├── columns.tsx                 # TanStack column definitions
    │   │   │       ├── data-table.tsx              # Generic DataTable<TData, TValue>
    │   │   │       ├── transaction-data.ts         # Types + mock dataset
    │   │   │       ├── transactions-filters.tsx    # Search, category and status filter UI
    │   │   │       └── transactions-page.tsx       # Filter state + page composition
    │   │   └── layout.tsx                          # Authenticated shell — sidebar + navbar
    │   ├── auth
    │   │   ├── create-account                      # Sign-up page
    │   │   └── login                               # Login page
    │   │       └── components                      # Login form component
    │   ├── globals.css                             # Global styles + CSS variables
    │   ├── layout.tsx                              # Root layout — ThemeProvider
    │   └── page.tsx                                # Root route "/"
    ├── assets
    │   └── lotties                                 # Lottie animation JSON files
    ├── components
    │   ├── ui                                      # Shadcn UI primitives (modified in-repo)
    │   │   ├── avatar.tsx
    │   │   ├── badge.tsx                           # Extended with success, warning, info variants
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── chart.tsx                           # ChartContainer — injects CSS color vars
    │   │   ├── input.tsx                           # Extended with startAdornment + endAdornment
    │   │   ├── progress.tsx                        # Custom — no Radix dependency
    │   │   ├── sidebar.tsx
    │   │   ├── table.tsx                           # Table primitives for DataTable
    │   │   └── ...
    │   ├── app-sidebar.tsx                         # App navigation sidebar
    │   └── navbar.tsx                              # Top navbar — search, date picker, theme toggle
    ├── hooks                                       # Custom React hooks
    ├── lib
    │   ├── schema                                  # Zod validation schemas
    │   ├── types                                   # Shared TypeScript types and interfaces
    │   └── utils.ts                                # Utility functions (cn, etc.)
    ├── public                                      # Static assets
    ├── babel.config.js                             # Babel config (for Jest)
    ├── commitlint.config.js                        # Commit message linting rules
    ├── components.json                             # Shadcn UI config
    ├── jest.config.ts                              # Jest test runner config
    ├── next.config.ts                              # Next.js config
    ├── package.json                                # Dependencies and scripts
    ├── postcss.config.mjs                          # PostCSS config
    ├── tailwind.config.ts                          # Tailwind — custom colors, dark mode
    └── tsconfig.json                               # TypeScript config

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Conventions Followed

- All Folders are lowercases
- There should be only one level of folder in each component folder (i.e. `/components/{component}/{subcomponent}` should be the deepest tree level in the component folder).
- Functions use camelCases while components use kebab-case for naming comvention, file names should be lowercase (words should be separated by hyphens).
- `...`
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/iwa-temmy/clearbook.git
   ```
2. cd into the project
   ```sh
   cd clearbook
   ```
3. Install packages
   ```sh
   yarn install
   ```
4. Start up project
   ```sh
   yarn run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Working on the Clearbook

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. To Create a page, create a folder in the app directory with the name/route of the page you want and then in that directory create a file named `page.tsx`.io

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- FEATURES BUILT -->

## Features Built

This is a **frontend prototype** — no backend, no real data. The goal was to validate the product's information architecture and visual language before committing to a data layer. Every number rendered in the UI is static mock data.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Auth Shell

Login and account creation pages at `/auth/login` and `/auth/create-account` with no real session handling. Structured using Next.js App Router's `(authenticated)` route group to enforce a hard layout boundary between public and authenticated surfaces — this makes it trivial to add real auth middleware later without touching any page components.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Dashboard

The primary screen after login. Composed of five sections, each answering a distinct user question:

| Section | Question answered |
|---|---|
| Welcome card | Am I financially healthy? |
| Metric cards | Where do I stand right now? |
| Forecast | What's coming in 30 days? |
| Attention | What needs action today? |
| Smart insights | What should I know? |

Each section is a standalone component colocated under the dashboard route. The page itself is a thin server component that only imports and composes them — independently replaceable, no cross-dependencies. The health score renders as a Recharts RadialBar: a single 0–100 value with no legend or axis, which fits the product's low-cognitive-load philosophy. Theming is centralized through a `ChartContainer` wrapper that injects CSS color variables per chart config.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Transactions

A full data table at `/transactions` with search, category filtering, status filtering, and column sorting. Built on TanStack Table v8 — headless for full markup control, with built-in sort logic so comparison functions don't need to be reimplemented.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Insights

A secondary analytical page at `/insights` for users who want more depth than the dashboard summary. Shows a Recharts bar chart comparing income vs expenses over time, a category-by-category expense breakdown using progress bars (proportional data reads faster as bars than as a second chart), and AI analysis cards highlighting notable patterns.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Design System

Built on Tailwind v3 with custom color tokens (`primary`, `background`, `foreground`, `sidebar.*`) and `darkMode: ["class"]` managed by `next-themes`. The app is designed dark-first; light mode is a supported toggle. Components use Shadcn UI copied directly into the repo — no abstraction layer to fight when overriding defaults for dark mode or custom tokens.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- WHAT I'D DO DIFFERENTLY -->

## What I'd Do Differently

**1. Data layer before UI.**
Every metric in this UI is a hardcoded constant. A real version starts with server actions + React Query hooks wired to actual bank data (Mono or Plaid), so components fetch live data from day one rather than being retrofitted.

**2. Health score as a real algorithm.**
The `87` is a constant. A real score is a weighted function of: cash runway in days (heaviest weight), overdue invoice ratio, expense growth month-over-month, and upcoming obligations in a 14-day window. That makes the dashboard the most defensible feature.

**3. Mobile-first shell.**
The product vision targets busy owners checking finances between tasks. The current layout is desktop-centric. It should be a PWA with a bottom-nav mobile shell. The WhatsApp-style daily prompt — the most differentiated feature in the spec — is not built. That is the core retention loop and should have been the first screen designed.

**4. Forecast chart wired to real projections.**
The chart renders static data with a reference line. A real implementation takes recurring transaction patterns, projects them forward, and flags risk zones automatically. The chart component should accept a dynamic data contract, not static points.

**5. Empty states.**
Every screen assumes populated data. A production-ready product needs zero-state UX: guided setup prompt, connect-account CTA, skeleton loaders. Without it the onboarding drop-off is immediate.

**6. Accessibility.**
Custom components — filter pills, sidebar nav, the health score chart — have no ARIA labels, focus management, or keyboard navigation. This would be required before any real user testing.

**7. Test coverage.**
Jest is configured but tests are placeholders. Priority would be integration tests for transaction filter/sort logic and unit tests for any scoring functions — those are the most likely to regress silently as the data layer evolves.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
