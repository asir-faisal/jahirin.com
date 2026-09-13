---
name: Syeda Jahirin Aktari
description: Job-market site for an economics Ph.D. candidate, set as a journal offprint.
colors:
  cover: "#0B3B2E"
  cover-deep: "#072A21"
  paper: "#FDFCFA"
  ink: "#161616"
  ink-2: "#55534E"
  tint: "#BFD3C9"
  gold: "#C9A961"
  rule: "#D9D5CC"
  rule-heavy: "#161616"
typography:
  display:
    fontFamily: "STIX Two Text, Times New Roman, Times, serif"
    fontSize: "clamp(2.5rem, 5.6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "STIX Two Text, Times New Roman, Times, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.005em"
  body:
    fontFamily: "STIX Two Text, Times New Roman, Times, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "STIX Two Text, Times New Roman, Times, serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.09em"
    fontFeature: "tnum"
  section-head:
    fontFamily: "STIX Two Text, Times New Roman, Times, serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  sm: "2px"
spacing:
  gutter: "1.25rem"
  article: "2.75rem"
  gap: "4rem"
  section: "4.5rem"
  overhang: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.cover}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.15rem 0.62rem"
  button-secondary:
    backgroundColor: "{colors.cover}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.15rem 0.62rem"
  button-secondary-hover:
    backgroundColor: "{colors.cover-deep}"
    textColor: "{colors.paper}"
  running-head:
    backgroundColor: "{colors.cover}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    height: "3rem"
  running-head-link-hover:
    textColor: "{colors.tint}"
---

# Design System: Syeda Jahirin Aktari

## Overview

**Creative North Star: "The Journal Offprint"**

The site is set like the front matter of an economics journal article pulled as an offprint. A deep cover-green band carries the author's name and the two actions a hiring committee came for. Below it the interior is bright paper with near-black ink, and everything is typeset the way economists already read: run-in abstracts, italic keyword lines, booktabs tables, dates in a tabular column. Rules and position carry the hierarchy. Size and colour do very little of that work.

Density is that of a well-set journal page: one serif face, a 70ch reading measure, a narrow marginalia column, and generous but not airy vertical rhythm. Expression lives in the typographic details (hairline rules, tracked capitals, a single gold running-head rule) and never gets in the way of the abstract.

The rejected directions are the sidebar-photo-plus-bulleted-list academic template and the hero-banner personal-brand page. Nothing animates on entrance. The one motion is the running head's gold mark moving to the section being read, plus smooth in-page scrolling.

**Key Characteristics:**
- One face, STIX Two Text, at four sizes; hierarchy by rules and placement.
- Cover green for the band and running head only; paper and ink everywhere else.
- Gold appears only as a line: the running-head rule, the active-section mark, and the focus ring on green.
- Section heads are small tracked capitals under a hairline rule.
- A single tipped-in portrait plate carries the only shadow in the system.
- Prints cleanly: the band and running head collapse to black on white.

## Colors

A two-field palette: journal-cover green for the masthead, warm white paper and near-black ink for the interior, with gold kept to hairlines.

### Primary
- **Journal Cover Green** (cover): Masthead band and sticky running-head background, all link text on paper, the job-market-paper role label, text selection fill, and the focus ring on paper.
- **Deep Cover Green** (cover-deep): Hover fill for the bordered action on the band. Used nowhere else.

### Secondary
- **Offprint Gold** (gold): The 1px rule under the running head, the 2px underline on the running-head link for the section in view, and the focus ring inside green areas. A line colour only.

### Neutral
- **Offprint Paper** (paper): Page background, text on green, the filled action's fill, and the plate's 6px border.
- **Press Ink** (ink): Body text, headings, section heads.
- **Grey Ink** (ink-2): Secondary text such as dates in dated lists, contact-block terms, table column heads, keyword lines, metadata lines, and the footer.
- **Green-White Tint** (tint): Secondary text on green (the fields line, the running-head name) and the running-head link hover colour.
- **Hairline Stone** (rule): Light rules: the left rule of abstract blocks and the rule above subsection heads.
- **Heavy Rule** (rule-heavy): Structural rules: above section heads, booktabs top/mid/bottom rules, and the footer's top rule. Its value matches ink, but it is a separate token so rule weight can be tuned on its own.

### Named Rules
**The Gold Hairline Rule.** Gold only ever appears as a border, underline, or outline, never as a fill or as text. If gold is covering an area, it is being misused.

**The Two Fields Rule.** Green belongs to the band and the running head. On paper, green only appears as link text and the role label, never as a background panel.

## Typography

**Display Font:** STIX Two Text (with Times New Roman, Times, serif)
**Body Font:** STIX Two Text (same family)
**Label Font:** STIX Two Text, set in tracked uppercase

**Character:** A scholarly text serif with mathematical-journal lineage. The single face makes the page read as one typeset document rather than as a website with a display font.

### Hierarchy
- **Display** (600, fluid 40px to 68px, line-height 1.02, -0.02em): The author's name in the cover band. It is the only element set this large.
- **Title** (600, 24px, line-height 1.2): Paper titles and the research-experience role title. This step is assigned by role, not heading level, so the second-level titles under a subsection use it too.
- **Body** (400, 17px, line-height 1.55): Prose, abstracts, lists, table cells, and the band's deck line. Reading column capped at 70ch.
- **Section head** (600, 13px, uppercase, 0.12em tracking): Section and subsection names, with a hairline rule above. Section heads use the heavy rule and subsection heads the stone rule.
- **Label** (400, 13px, uppercase, 0.09em tracking, tabular numerals): Running-head name and links, band actions, the role label, and the footer. At 900px and below, running-head links drop to 12px with 0.05em tracking.

Italics carry the run-in journal labels: "Abstract." (italic 600) opens each abstract and "Keywords:" (italic) opens each keyword line. Table column heads are italic grey ink, as in booktabs.

### Named Rules
**The Four Sizes Rule.** Four sizes only: display, title, body, and 13px capitals. A new level of importance is expressed with a rule, a position, or italics, never with a fifth size.

**The Tabular Time Rule.** Years and terms use tabular numerals and sit in their own aligned column (dated definition lists, table term column).

## Layout

A centred wrap is as wide as the 70ch measure plus a 4rem gap plus a 20rem aside, with 1.25rem side gutters. The page uses a two-column grid, with the reading column on the left and marginalia on the right. The cover band uses the same grid, so the portrait plate sits in the aside column and hangs 6rem below the band's bottom edge into the paper. The contact block starts below it, padded by the overhang. The presentations-and-awards marginalia sticks 4.5rem from the top, just under the running head. Teaching spans both columns.

Vertical rhythm: 4.5rem between sections, 2.75rem between articles and subsections, 1.5rem below a section head. Every anchored element scrolls to 4.5rem from the top so the sticky 3rem running head never covers it.

At 900px and below, the grid collapses to one column, the overhang drops to 3rem, the plate narrows to 12rem and aligns left, the marginalia stops sticking, and the running head hides the name and left-aligns its links in a horizontally scrolling row. At 640px and below, the teaching table drops its header row and each course reflows as a text entry: code and title on one line, then role and term in grey ink separated by middle dots, closed by the heavy bottom rule.

Print is part of the system. The running head's links and the actions are hidden, the band turns black on white, the plate shrinks to 10rem without a shadow, and sections avoid page breaks.

## Elevation & Depth

The system is flat. Depth comes from rules and the two-field colour split, not from layering. There is one exception: the portrait plate is a photograph tipped into the page, lifted by a soft, blurred, downward-offset shadow and framed by a paper border.

### Shadow Vocabulary
- **Tipped-in plate** (`box-shadow: 0 18px 40px -14px rgba(0,0,0,.5), 0 4px 10px -4px rgba(0,0,0,.3)`): Only on the portrait plate. It is a diffuse shadow with a large blur radius, not a hard offset.

### Named Rules
**The One Plate Rule.** Only the tipped-in plate casts a shadow. Text blocks, tables, and actions stay flat on the paper.

## Shapes

The page is square-cornered and built from lines. The only radius is 2px on the band actions, just enough to keep them from looking like stamped boxes. Structure comes from horizontal rules: a 1px heavy rule above section heads, a 1px stone rule above subsection heads, a 1px stone rule down the left of abstracts, and booktabs rules (1.5px heavy top, 1px heavy mid, 1.5px heavy bottom, no rules between rows and no vertical rules). The plate is a rectangle with a 6px paper border.

## Components

### Buttons
Quiet, typeset actions that live only in the cover band.
- **Shape:** Near-square (2px radius), 1px paper border, set in 13px tracked capitals.
- **Primary:** A paper fill with cover-green text, used for the CV download. There is exactly one filled action.
- **Secondary:** Transparent on green with a paper border and paper text, used for the job market paper link. On hover it fills with deep cover green.
- **Hover / Focus:** 0.25s background and colour transitions. The primary brightens to pure white on hover. The focus ring is 2px gold, offset by 3px, because the buttons sit on green.

### Links
- **Style:** Cover-green text with a 1px underline, offset 0.18em, at 45% green. On hover the underline turns solid green.
- **Focus:** A 2px cover-green outline offset by 3px on paper, gold inside the band and running head.

### Navigation (running head)
A sticky 3rem cover-green bar with a 1px gold rule under it. The author's name sits left in tint-coloured capitals and the section links sit right in paper-coloured capitals. Hover turns a link tint. The link for the section in view gets a 2px gold underline that fades between links over 0.35s (cubic-bezier(.16,1,.3,1)). The running-head script sets `aria-current` on that link. When About and Contact are both visible, the link the visitor clicked wins. Otherwise the first visible section in document order wins.

### Section head
Small tracked capitals (600 weight, 0.12em tracking) under a full-width rule, with the heavy rule for sections and the stone rule for subsections. It always names the section it opens.

### Article block (signature)
A 24px title, then an optional role line (a green capitals label such as the job market paper marker, or a grey metadata line for funding or co-authors). Next comes the abstract, indented 1.5rem behind a stone left rule and opened by an italic bold "Abstract." run-in. It closes with an italic "Keywords:" line in grey ink.

### Dated list
A two-column definition list with the year or term in grey tabular numerals on the left and the entry on the right. Used for conferences and awards, and in the same form for the contact block's term/value pairs.

### Booktabs table
Full width, left-aligned, with tabular numerals. Column heads are italic grey ink, and institution panels are set as bold row-group heads. Course codes and terms never wrap. The only lines are the three booktabs rules. The mobile reflow is described under Layout.

### Portrait plate
The single photograph, uncropped, with a 6px paper border and the tipped-in shadow. It hangs over the band edge by the overhang distance.

## Do's and Don'ts

### Do:
- **Do** express a new level of hierarchy with a rule (1px heavy, 1px stone, or booktabs 1.5px) or placement before reaching for a size.
- **Do** set years, terms, and course codes in tabular numerals in their own column.
- **Do** open abstracts with an italic "Abstract." run-in and close them with an italic "Keywords:" line.
- **Do** keep the focus ring 2px with a 3px offset: cover green on paper, gold on green.
- **Do** keep anchors scrolling to 4.5rem from the top so the running head never hides a heading.
- **Do** keep the print stylesheet working whenever a section is added.

### Don't:
- **Don't** add a fifth type size or a second typeface, and never put a system display face in the type stack.
- **Don't** use gold as a fill or as text colour.
- **Don't** put a label above a heading that teases or restates it. Tracked capitals under a rule are a section head only when they carry that section's own name.
- **Don't** wrap content in cards, panels, or tinted boxes. The plate is a bordered photograph, not a container for content.
- **Don't** add shadows beyond the plate, and never use a hard offset shadow.
- **Don't** add row rules or vertical rules to tables.
- **Don't** label a contact link with its type ("Email:"). The link text is the address.
- **Don't** animate anything on entrance. The running-head mark and smooth scrolling are the only motion.
