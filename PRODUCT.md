# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite (vanilla template, no UI framework), chosen by the user over Next.js. `index.html` is the page, `src/style.css` and `src/main.js` hold styles and the running-head script, `public/files/` holds the photo and PDFs served at `/files/...`. `npm run dev` / `npm run build` (output `dist/`). Deploy target: Vercel, on an account other than the user's own; not linked yet.

## Users

Primary (inferred): faculty on economics hiring committees and search-committee chairs, opening the site from a JOE/AEA application or a CV link, often late in the evening during the November–January job-market season, spending under a minute deciding whether to read the job market paper and CV in full.

Secondary (inferred): research institutions, policy organizations, and industry recruiters who reach the site from LinkedIn.

## Product Purpose

A personal job-market website for Syeda Jahirin Aktari, Ph.D. candidate in Economics (ABD) at Southern Illinois University Carbondale, on the academic job market for positions starting in 2027 (confirmed by the user). It presents who she is, her job market paper, working papers and work in progress, teaching record, and CV, and gives one clear way to contact her. Success: a committee member finds the job market paper abstract, the CV, and the email within seconds and leaves with an accurate picture of her research and teaching.

## Positioning

Two specific research lines a neighbouring candidate could not truthfully copy: (1) Egypt's 1960s university-fee abolition and public-university construction as a natural experiment for long-run political participation and gender-role attitudes, using World Values Survey birth-cohort variation; (2) an NSF-funded (Grant #2332010) game-theoretic model of privacy zones in spectrum-sharing buyer–seller networks. Nearly a decade in economics across academic study and professional work (BRAC Migration Programme, $2.5M funding secured, 208 returnees reintegrated).

## Operating Context

Committee members compare many candidate sites in one sitting. They expect the conventional academic-site structure (Home/About, Research, Teaching, CV, Contact) and one-click PDF downloads. Syllabi are linked as proof of teaching. The site is the destination linked from the CV, the JOE profile, and LinkedIn.

## Capabilities and Constraints

- Sections required by the supplied content: About, Research (research experience, job market paper, working papers, work in progress, conferences and presentations, research awards), Teaching (courses at SIU Carbondale, BRAC University, and the SIU College of Business online undergraduate program), CV, Contact.
- Contact on the site: email syedajahirin.aktari@siu.edu and LinkedIn only. Phone number appears in the CV and syllabi but is not published on the page.
- No paper PDFs were supplied for the job market paper, working papers, or work in progress; the site must not link to files that do not exist. Show abstracts and keywords instead and leave a clear place for PDFs when they arrive.
- Two syllabus PDFs and one CV (converted from .docx to PDF) are the downloadable files.
- Undecided: whether a Google Scholar / SSRN profile exists.

## Brand Commitments

Name: Syeda Jahirin Aktari. Affiliation: School of Analytics, Finance, and Economics, Southern Illinois University Carbondale. Advisor: Professor Alison Watts. Voice: first-person, plain, factual academic register as written in "Website Content.docx". One professional headshot (dark blazer, white shirt, neutral warm background) at `public/files/syeda-jahirin-aktari.jpg`.

## Evidence on Hand

- `source/Website Content.docx` — all page copy (about, research, teaching).
- `public/files/Syeda_Jahirin_Aktari_CV_Teaching_NO Contact.pdf` — current public CV.
- `public/files/ECON334-Health-Economics-Syllabus-Summer-2025.pdf`, `public/files/ECON113-Economics-of-Contemporary-Social-Issues-Syllabus-Spring-2025.pdf` — syllabi for the two instructor-of-record courses.
- `public/files/syeda-jahirin-aktari.jpg` — headshot, full uncropped frame, 1400×1217 (user asked for the whole image, not a face crop).
- Absent, must not be fabricated: paper PDFs, publications, citations, Google Scholar link, testimonials, teaching evaluations, placement claims.

## Product Principles

1. The job market paper and the CV are the two things the visitor came for; both are one click from the first viewport.
2. Everything on the page is verifiable from the supplied documents; no invented claims, links, or numbers.
3. Reads as a credible economist's site to economists: precise, calm, typographically careful; expression lives in details, never in the way of the abstract.
4. One file to maintain: the candidate or her helper can update copy without a build step.
5. Works on a phone, prints cleanly, and loads fast on a bad hotel connection.

## Accessibility & Inclusion

WCAG 2.1 AA contrast, keyboard-navigable in-page navigation, semantic headings so a screen reader can jump between Research and Teaching, real text for abstracts (no text in images).
