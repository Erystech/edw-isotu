/**
 * Article data source.
 * `content` is raw markdown, parsed at render time by <ArticleContent />.
 * Swap featuredImage placeholders for real assets during the content pass.
 */

const PLACEHOLDER = (label) =>
  `https://placehold.co/1200x675/121212/A1A1AA?text=${encodeURIComponent(label)}`;

export const articles = [
  {
    id: '1',
    slug: 'the-momentum-principle-in-leadership',
    title: 'The Momentum Principle in Leadership',
    subtitle: 'Why small, consistent actions compound into extraordinary results',
    author: 'Edwin Isotu',
    publishedDate: '2024-07-15',
    readTime: 5,
    category: 'Leadership',
    featuredImage: PLACEHOLDER('Momentum'),
    excerpt:
      "Leadership isn't about making one perfect decision. It's about building momentum through consistent, intentional actions.",
    content: `# The Momentum Principle

In my years as a keynote speaker and mentor, I've watched a pattern repeat across industries: the leaders who win aren't the ones with the single brilliant idea. They're the ones who show up, again and again, with small deliberate actions.

## Small Wins Compound

It's not about the masterstroke. It's about relentless, intentional progress.

> "Momentum is the invisible force that separates dreamers from doers."

### Three Pillars of Momentum

1. **Clarity** — Know exactly what you're building toward
2. **Consistency** — Show up every single day
3. **Calibration** — Measure, learn, adjust

When you combine these three, momentum becomes inevitable rather than accidental.

## The Math Behind It

A 1% daily improvement compounds to roughly a 37x multiplier over a year.

\`\`\`
yearly_improvement = (1.01) ^ 365 ≈ 37.78x
\`\`\`

Small actions, repeated faithfully, create exponential returns — not linear ones.

## Your Challenge

This week, pick one area of your work where you can commit to a small, consistent action. Not a grand gesture — a daily micro-improvement.

Momentum rewards the patient.`,
    tags: ['leadership', 'momentum', 'strategy'],
  },

  {
    id: '2',
    slug: 'sustainability-beyond-corporate-responsibility',
    title: 'Sustainability Beyond Corporate Responsibility',
    subtitle: 'Making environmental action personal and profitable',
    author: 'Edwin Isotu',
    publishedDate: '2024-07-10',
    readTime: 6,
    category: 'Sustainability',
    featuredImage: PLACEHOLDER('Sustainability'),
    excerpt:
      'Corporate sustainability initiatives often miss the mark. Real environmental progress starts when leaders make it personal.',
    content: `# Sustainability Beyond Corporate Responsibility

Too many organizations treat sustainability as a checkbox — a line item in an annual report rather than a living practice.

## The Compliance Trap

When sustainability exists only to satisfy a regulator or a shareholder deck, it never survives contact with a tight quarter.

> Real environmental leadership begins the moment sustainability stops being a department and starts being a habit.

## What I've Seen Work

- Leaders who tie sustainability metrics to personal performance reviews
- Teams that measure environmental impact with the same rigor as revenue
- Organizations that treat their local community as a stakeholder, not a footnote

### A Framework for Personal Accountability

1. Audit your own footprint before auditing the company's
2. Choose one environmental commitment you can sustain for a full year
3. Report on it publicly — accountability accelerates follow-through

## Closing Thought

Sustainability that depends on a mandate will die with the mandate. Sustainability that depends on identity outlives every policy change.`,
    tags: ['sustainability', 'environment', 'business'],
  },

  {
    id: '3',
    slug: 'mentoring-at-scale-lessons-from-350-leaders',
    title: 'Mentoring at Scale: Lessons from 350+ Leaders',
    subtitle: 'What it actually takes to build a mentoring culture, not just a program',
    author: 'Edwin Isotu',
    publishedDate: '2024-06-28',
    readTime: 7,
    category: 'Mentorship',
    featuredImage: PLACEHOLDER('Mentorship'),
    excerpt:
      'Mentoring one person well is a skill. Mentoring hundreds without diluting the experience is an entirely different discipline.',
    content: `# Mentoring at Scale

Over the last decade I've mentored more than 350 emerging leaders across public health, environmental sustainability, and business. The lessons from mentoring one person do not automatically scale to mentoring hundreds.

## Why Most Mentorship Programs Fail at Scale

They try to replicate a single mentor's time across too many mentees, and quality erodes long before quantity plateaus.

## The Hub Model

Rather than one mentor spread thin, we built distinct hubs — each with its own focus, cohort, and cadence:

- **Environment & Public Health Leadership**
- **Career & Business Growth Accelerator**
- **Strategic Leadership & Enterprise**

Each hub gets a dedicated structure rather than a diluted version of a single mentor's calendar.

## Three Non-Negotiables

1. Regular, scheduled check-ins — not "reach out anytime"
2. A defined arc with milestones, not an open-ended relationship
3. Peer accountability within cohorts, not just mentor-to-mentee

> A mentorship program that scales without structure isn't scaling — it's diluting.

## What's Next

We're building toward one million mentored African leaders by 2063. That number only means something if every single mentee gets the same quality of attention as mentee number one.`,
    tags: ['mentorship', 'leadership', 'scale'],
  },

  {
    id: '4',
    slug: 'why-most-change-initiatives-stall-at-month-three',
    title: 'Why Most Change Initiatives Stall at Month Three',
    subtitle: 'The pattern shows up everywhere — and it\u2019s fixable',
    author: 'Edwin Isotu',
    publishedDate: '2024-06-15',
    readTime: 6,
    category: 'Leadership',
    featuredImage: PLACEHOLDER('Change'),
    excerpt:
      'There\u2019s a predictable point where change initiatives lose steam. Understanding why is the first step to preventing it.',
    content: `# Why Most Change Initiatives Stall at Month Three

Ask any operations leader when their transformation projects tend to lose momentum, and you'll hear the same answer: somewhere around month three.

## The Enthusiasm Curve

Month one runs on adrenaline. Month two runs on inertia from month one. By month three, both are spent — and nothing has replaced them.

### What's Actually Happening

- The initial announcement energy has worn off
- Early wins have already been celebrated and forgotten
- The people doing the work haven't yet built new habits

> Change doesn't fail from lack of vision. It fails from lack of scaffolding.

## The Fix: Build Scaffolding, Not Just Vision

1. Identify the specific daily behaviors the change requires
2. Build checkpoints at week 2, week 6, and week 10 — before month three arrives
3. Replace the initial excitement with a visible tracking system

## A Simple Test

If your change initiative depends on people *remembering* to do something differently, it will fail by month three. If it depends on a *system* that makes the new behavior the path of least resistance, it has a chance.`,
    tags: ['change management', 'leadership', 'execution'],
  },

  {
    id: '5',
    slug: 'the-one-on-one-question-most-managers-skip',
    title: 'The One-on-One Question Most Managers Skip',
    subtitle: 'A single question that surfaces problems weeks earlier',
    author: 'Edwin Isotu',
    publishedDate: '2024-06-02',
    readTime: 4,
    category: 'Leadership',
    featuredImage: PLACEHOLDER('One-on-One'),
    excerpt:
      'Most one-on-ones cover status updates. The best ones surface the thing your report hasn\u2019t said out loud yet.',
    content: `# The One-on-One Question Most Managers Skip

Most one-on-ones default to status updates: what's done, what's blocked, what's next. Useful, but shallow.

## The Question

> "What's something you haven't told me yet because you weren't sure how I'd react?"

It's uncomfortable the first time you ask it. That discomfort is exactly why it works.

## Why It Surfaces Problems Early

Status updates report what's already visible. This question surfaces what's still forming — the hesitation, the half-formed concern, the thing your report is still deciding whether to raise.

### How to Use It Well

1. Ask it consistently, not just when things feel tense
2. Sit in the silence after asking — don't rush to fill it
3. Respond to what you hear without defensiveness, or you'll never hear it again

## The Payoff

Teams that surface friction early spend far less time firefighting later. One question, asked consistently, can be the difference between catching a problem in week two versus discovering it in week ten.`,
    tags: ['management', 'feedback', 'one-on-ones'],
  },

  {
    id: '6',
    slug: 'how-to-give-feedback-that-actually-lands',
    title: 'How to Give Feedback That Actually Lands',
    subtitle: 'The delivery habit that determines whether advice sticks',
    author: 'Edwin Isotu',
    publishedDate: '2024-05-20',
    readTime: 5,
    category: 'Leadership',
    featuredImage: PLACEHOLDER('Feedback'),
    excerpt:
      'Good feedback content delivered poorly gets ignored. The delivery matters as much as the substance.',
    content: `# How to Give Feedback That Actually Lands

Most feedback fails not because it's wrong, but because of how it's delivered.

## The Three Failure Modes

- **Too vague** — "Just be more strategic" gives no path forward
- **Too late** — feedback on a project that already shipped changes nothing
- **Too one-directional** — feedback delivered *at* someone rather than discussed *with* them

## What Actually Works

1. Deliver feedback close to the moment it's relevant
2. Be specific about the behavior, not the person
3. End with a question, not a verdict — invite a response

> Feedback that ends in a question gets absorbed. Feedback that ends in a verdict gets defended against.

## A Simple Structure

"When [specific behavior] happened, [specific impact] followed. What's your read on it?"

This isn't a script to recite — it's a shape to internalize. Once the shape becomes habit, the delivery stops feeling like a performance and starts feeling like a conversation.`,
    tags: ['feedback', 'communication', 'management'],
  },

  {
    id: '7',
    slug: 'leading-through-environmental-change',
    title: 'Leading Through Environmental Change',
    subtitle: 'What public health leadership teaches about guiding people through uncertainty',
    author: 'Edwin Isotu',
    publishedDate: '2024-05-08',
    readTime: 6,
    category: 'Sustainability',
    featuredImage: PLACEHOLDER('Environmental Change'),
    excerpt:
      'Environmental and public health crises share a leadership pattern: uncertainty without paralysis.',
    content: `# Leading Through Environmental Change

Public health leadership during environmental crises taught me something that applies far beyond that field: how to guide people through uncertainty without losing their trust.

## The Core Tension

People want certainty. Crises rarely offer it. The leader's job isn't to manufacture false certainty — it's to be honest about what's unknown while still moving forward.

### Three Practices That Held Up

1. **Name the uncertainty explicitly** — don't pretend to know what you don't
2. **Commit to the next concrete step**, even when the full path isn't visible
3. **Communicate more often, not less**, when the situation is unclear

> Silence during uncertainty reads as absence. Presence during uncertainty reads as leadership.

## Applying This Beyond Crisis Response

Most organizational change carries a smaller version of this same uncertainty. The same discipline — name what's unknown, commit to the next step, communicate consistently — applies whether you're managing a pandemic response or a product pivot.`,
    tags: ['sustainability', 'leadership', 'crisis management'],
  },

  {
    id: '8',
    slug: 'strategy-to-execution-closing-the-gap',
    title: 'Strategy to Execution: Closing the Gap',
    subtitle: 'The plan on the slide and the work on the ground rarely match',
    author: 'Edwin Isotu',
    publishedDate: '2024-04-22',
    readTime: 7,
    category: 'Leadership',
    featuredImage: PLACEHOLDER('Execution'),
    excerpt:
      'Most strategies don\u2019t fail in the boardroom. They fail six weeks later, in the calendar.',
    content: `# Strategy to Execution: Closing the Gap

Most strategies don't fail in the room where they're presented. They fail six weeks later, when the plan on the slide meets the reality of a full calendar.

## Where the Gap Opens

- The strategy assumes capacity that doesn't exist
- No one owns the translation from strategic priority to weekly task
- Success metrics are defined at the strategic level but never broken down operationally

## Closing the Gap

1. Translate every strategic priority into a weekly, ownable action
2. Assign a single accountable owner per priority — not a committee
3. Review execution weekly, review strategy quarterly — don't conflate the two cadences

> A strategy without a weekly rhythm is a wish, not a plan.

## The Test

If you asked ten people on your team what they're doing *this week* to advance the strategy, and got ten different (or blank) answers, the gap isn't in your strategy. It's in your translation layer.`,
    tags: ['strategy', 'execution', 'leadership'],
  },

  {
    id: '9',
    slug: 'building-high-trust-teams',
    title: 'Building High-Trust Teams',
    subtitle: 'Practical habits that compound into durable team performance',
    author: 'Edwin Isotu',
    publishedDate: '2024-04-05',
    readTime: 5,
    category: 'Leadership',
    featuredImage: PLACEHOLDER('Trust'),
    excerpt:
      'Trust isn\u2019t a soft metric. It\u2019s the infrastructure that makes every other team practice work faster.',
    content: `# Building High-Trust Teams

Trust is often treated as a "nice to have" — a soft outcome of good culture. In practice, it's infrastructure. Without it, every other process runs slower.

## What Low Trust Actually Costs

- Decisions get relitigated because no one trusts the reasoning behind them
- Feedback gets softened until it's useless
- People protect themselves instead of the mission

## Habits That Build Trust

1. **Say what you'll do, then do it** — consistency is trust's raw material
2. **Give credit specifically and publicly** — vague praise builds nothing
3. **Deliver hard news directly** — trust erodes faster from omission than from bad news delivered honestly

> Teams don't trust leaders who are always positive. They trust leaders who are always honest.

## The Compounding Effect

High-trust teams move faster not because they work harder, but because they spend less energy managing each other and more energy managing the actual problem.`,
    tags: ['trust', 'teams', 'culture'],
  },

  {
    id: '10',
    slug: 'the-clarity-habit-cutting-through-noisy-priorities',
    title: 'The Clarity Habit: Cutting Through Noisy Priorities',
    subtitle: 'A daily practice for leaders drowning in competing demands',
    author: 'Edwin Isotu',
    publishedDate: '2024-03-18',
    readTime: 4,
    category: 'Leadership',
    featuredImage: PLACEHOLDER('Clarity'),
    excerpt:
      'The busiest leaders aren\u2019t the ones with the most on their plate. They\u2019re the ones who\u2019ve stopped confusing urgency with importance.',
    content: `# The Clarity Habit

The busiest leaders I've worked with aren't managing the most tasks. They're managing the clearest priorities.

## The Confusion at the Root

Urgency and importance get treated as synonyms. They aren't. Urgent things demand attention now. Important things determine whether the next quarter succeeds.

## A Daily Practice

Each morning, before opening email or messages, answer one question in writing:

> "If I only accomplish one thing today, what makes the rest of the week easier?"

Everything else is negotiable. That one thing isn't.

### Why Writing It Down Matters

An unwritten priority competes with every notification that arrives during the day. A written priority has already won before the day starts.

## The Long Game

Clarity isn't a personality trait some leaders are born with. It's a habit, repeated daily, that eventually becomes indistinguishable from instinct.`,
    tags: ['clarity', 'productivity', 'leadership'],
  },
];

/** Lookup a single article by its slug. Returns undefined if not found. */
export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

/**
 * Related articles: same category, excluding the current article,
 * capped at `limit`. Falls back to most recent other articles if
 * fewer than `limit` share the category.
 */
export function getRelatedArticles(currentSlug, category, limit = 3) {
  const sameCategory = articles.filter(
    (a) => a.category === category && a.slug !== currentSlug
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const fallback = articles.filter(
    (a) => a.slug !== currentSlug && !sameCategory.includes(a)
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}