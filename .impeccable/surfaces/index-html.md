---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: index.html (whole site, single page)

Scope: the entire job-market site, one page with in-page navigation. Visitor mode: Read.

Audience and job: economics hiring-committee members opening the site from a JOE application or CV link; they want the job market paper abstract, the CV PDF, the teaching record, and an email address within seconds. Secondary: recruiters arriving from LinkedIn.

Proof and content: all copy from source/Website Content.docx; CV at public/files/Syeda_Jahirin_Aktari_CV_Teaching_NO Contact.pdf; two syllabus PDFs in public/files/; headshot public/files/syeda-jahirin-aktari.jpg. No paper PDFs exist yet; abstracts and keywords stand in and no dead links are allowed.

Constraints: Vite vanilla build (index.html + src/style.css + src/main.js), deploy to Vercel, phone number never on the page, WCAG AA.

Unresolved: deploy target; whether paper PDFs and a Google Scholar profile will be added later.

## Direction contract

THESIS: The site is an offprint of the candidate's job-market file: journal front matter where her name is the running head, the job market paper is the lead article, and every section is set the way economists already read (abstract block, keywords, booktabs rules, tabular dates). It refuses the sidebar-photo-plus-bulleted-list academic template and the hero-banner personal-brand page.

OWN-WORLD: Deep journal-cover green (#0B3B2E) owns the masthead band and the sticky running head; bright white paper (#FDFCFA) interior; near-black ink; green as the only link and rule color; a thin gold (#C9A961) hairline for the running-head rule and the active nav mark. One face, STIX Two Text, at four sizes: display name, article title, body, running-head/keyword small caps. Section heads are small tracked capitals with a hairline rule above (journal section heads). Teaching is set as booktabs tables (heavy top and bottom rule, hairline mid rule, no vertical rules). Dates are tabular numerals aligned in their own column. The headshot is a tipped-in plate: 6px paper border, offset soft shadow, hanging over the band's bottom edge into the paper. No cards, no icons, no eyebrows, no gradients.

STORY: The visitor recognises a serious, carefully set economics document within a second, reads who she is and what she studies in the band, sees the two actions they came for (Job Market Paper, Curriculum Vitae PDF) without scrolling, reads the JMP abstract as the lead article, scans working papers, then teaching tables with syllabus links, and writes to the email in the front-matter block.

FIRST VIEWPORT (1440x900): a 3rem sticky running head across the top in cover green: her name in small tracked caps left, the section links right (About, Research, Teaching, CV (PDF), Contact), gold rule beneath. Below it the cover band, same green, about 420px tall, holding a 952px column: left, the name at 4.25rem in paper white, an affiliation deck line, a fields line in tinted green-white, then two actions, "Job Market Paper" (bordered) and "Curriculum Vitae (PDF)" (filled paper on green). Right, the 18rem portrait plate overhanging the band edge by 6rem into the paper. The paper begins with "About" in the left 70ch column and the front-matter contact block (email, LinkedIn, CV, advisor, location) under the plate in the right column. The primary action, the CV PDF, sits in the band and again in the running head.

FORM: The journal offprint, candidate 3 of the grounded list (1 NBER working-paper cover sheet, 2 booktabs regression tables, 3 journal offprint, 4 Beamer job talk, 5 cohort event-study timeline, 6 office door and directory card, 7 Stata codebook). Seed key 7901f6dd, assigned index 3. Challenger verdicts: Swiss poster wall competitive (product clarity; full alternate); curved-crease shell, daylight section, hand-drawn zine, cutting-bench rail, Factory Records sleeve declined. Raises kept from declined challengers: from the curved-crease shell, one governing line (a single running-head rule system organises the page); from the daylight section, tabular time stamps (years and terms in their own aligned column); from the zine, one highlighter (exactly one emphasised element in the first viewport, the name, and one filled action); from the cutting bench, rank by placement not size (a four-step type scale, hierarchy carried by rules and position); from the Factory sleeve, nothing labelled twice (no "Email:" labels before links, contact appears once, no eyebrow above any heading). Signature interaction: the running head tracks the section being read and marks it with the gold rule, like verso and recto running heads turning as the pages turn; motion is that single crossfade plus smooth in-page scrolling, and nothing animates on entrance.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
