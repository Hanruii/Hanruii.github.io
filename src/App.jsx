import React, { useState } from "react";

// === Simple data you can edit ===
const profile = {
  name: "Hanrui Zeng",
  title: "Ph.D. Candidate in Economics",
  institution: "University of Pittsburgh",
  location: "Pittsburgh, PA",
  email: "hanruizeng@example.edu",
  scholar: "https://scholar.google.com/",
  linkedin: "https://www.linkedin.com/in/hanruizeng/",
  github: "https://github.com/hanruizeng",
  twitter: "https://x.com/",
  //cvUrl: "/cv.pdf", // replace with your CV file path
  //headshot: "https://placehold.co/240x240/png" // replace with your headshot URL
};

const researchInterests = [
  "Causal inference",
  "Econometrics",
  "Language acquisition & development",
  "Marketing analytics",
];

const news = [
  { date: "Sep 2025", text: "Presented at XYZ Conference on causal estimation with synthetic DiD." },
  { date: "Aug 2025", text: "Completed Economist Internship at Amazon Devices Science." },
];

const publications = [
  {
    year: 2025,
    title: "Downstream Impacts of Assortment Changes: Evidence from OOS Events",
    authors: "Zeng, H.",
    venue: "Working Paper",
    link: "#",
    bibtex: `@article{zeng2025assortment,
  title={Downstream Impacts of Assortment Changes: Evidence from OOS Events},
  author={Zeng, Hanrui},
  year={2025},
  note={Working paper}
}`,
  },
  {
    year: 2024,
    title: "Railways and Language Assimilation in Colonial India",
    authors: "Zeng, H.",
    venue: "Draft available upon request",
    link: "#",
    bibtex: `@unpublished{zeng2024railways,
  title={Railways and Language Assimilation in Colonial India},
  author={Zeng, Hanrui},
  year={2024}
}`,
  },
];

const teaching = [
  {
    term: "Fall 2025",
    course: "Latin American Economic Development (TA)",
    role: "Teaching Assistant",
    notes: "Sections, office hours, and grading."
  },
];

const service = [
  { item: "Referee: Journal of Applied Econometrics (ad-hoc)" },
  { item: "Organizer: Graduate Causal Inference Reading Group" },
];

// === Components ===
function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl font-semibold tracking-tight mb-6">{title}</h2>
      {children}
    </section>
  );
}

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#research", label: "Research" },
    { href: "#publications", label: "Publications" },
    { href: "#teaching", label: "Teaching" },
    { href: "#cv", label: "CV" },
    { href: "#contact", label: "Contact" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        <a href="#about" className="font-bold text-lg">{profile.name.split(" ")[0]} <span className="text-gray-500">{profile.name.split(" ")[1] || ''}</span></a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-700 hover:text-black">{l.label}</a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm">Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#teaching">Teaching</a>
            <a href="#cv">CV</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Pill({ children }) {
  return <span className="inline-block rounded-full border px-3 py-1 text-xs mr-2 mb-2">{children}</span>;
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition-shadow bg-white">{children}</div>
  );
}

function Publication({ p }) {
  const [showBib, setShowBib] = useState(false);
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="text-sm text-gray-500">{p.year} · {p.venue}</div>
        <a href={p.link} className="text-lg font-medium hover:underline">{p.title}</a>
        <div className="text-sm text-gray-700">{p.authors}</div>
        <div className="flex gap-2 mt-2">
          <a href={p.link} className="text-sm underline">PDF</a>
          <button onClick={() => setShowBib(!showBib)} className="text-sm underline">{showBib ? 'Hide' : 'BibTeX'}</button>
        </div>
        {showBib && (
          <pre className="mt-3 text-xs bg-gray-50 p-3 rounded-lg overflow-x-auto">
{p.bibtex}
          </pre>
        )}
      </div>
    </Card>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Nav />

      {/* Hero / About */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{profile.name}</h1>
            <p className="mt-2 text-lg text-gray-700">{profile.title} · {profile.institution}</p>
            <p className="mt-1 text-sm text-gray-600">{profile.location}</p>
            <p className="mt-6 leading-7 text-gray-800">
              I am an economist and data scientist interested in causal inference, econometrics, and the
              interplay between language and economic outcomes. My current work studies downstream
              impacts of assortment changes and out-of-stock events on customers and sellers.
            </p>
            <div className="mt-4">
              {researchInterests.map((ri, i) => <Pill key={i}>{ri}</Pill>)}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={profile.cvUrl} className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium">Download CV</a>
              <a href="#contact" className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium">Contact</a>
              <a href={profile.scholar} className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium">Google Scholar</a>
            </div>
          </div>
          <div className="md:col-span-1">
            <img src={profile.headshot} alt="Headshot" className="w-48 h-48 rounded-2xl object-cover border shadow mx-auto" />
            <div className="mt-4 text-sm text-gray-600 text-center">
              <a className="underline" href={profile.github}>GitHub</a> · <a className="underline" href={profile.linkedin}>LinkedIn</a> · <a className="underline" href={profile.twitter}>X</a>
            </div>
          </div>
        </div>

        {/* News */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {news.map((n, idx) => (
            <Card key={idx}>
              <div className="text-sm text-gray-500">{n.date}</div>
              <div className="mt-1">{n.text}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Research */}
      <Section id="research" title="Research">
        <div className="grid gap-4">
          <Card>
            <h3 className="font-medium">Downstream Impacts of Assortment Changes</h3>
            <p className="text-sm text-gray-700 mt-2">Measures how removing certain ASINs influences customer behavior and third-party seller performance using DML and Synthetic DiD.</p>
            <div className="mt-2 text-sm"><a className="underline" href="#">Paper</a> · <a className="underline" href="#">Slides</a></div>
          </Card>
          <Card>
            <h3 className="font-medium">Railways and Language Assimilation in Colonial India</h3>
            <p className="text-sm text-gray-700 mt-2">Studies transportation shocks and linguistic outcomes using historical data and modern causal methods.</p>
            <div className="mt-2 text-sm"><a className="underline" href="#">Draft</a> · <a className="underline" href="#">Data Appendix</a></div>
          </Card>
        </div>
      </Section>

      {/* Publications */}
      <Section id="publications" title="Publications & Working Papers">
        <div className="grid gap-4">
          {publications.map((p, i) => <Publication p={p} key={i} />)}
        </div>
      </Section>

      {/* Teaching */}
      <Section id="teaching" title="Teaching">
        <div className="grid gap-4">
          {teaching.map((t, i) => (
            <Card key={i}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <div className="text-sm text-gray-500">{t.term}</div>
                  <div className="font-medium">{t.course}</div>
                  <div className="text-sm text-gray-700">{t.role}</div>
                </div>
                {t.syllabus && <a href={t.syllabus} className="text-sm underline">Syllabus</a>}
              </div>
              {t.notes && <p className="mt-2 text-sm text-gray-700">{t.notes}</p>}
            </Card>
          ))}
        </div>
      </Section>

      {/* CV */}
      <Section id="cv" title="CV">
        <Card>
          <p className="text-sm text-gray-700">Download a full CV or browse key sections above.</p>
          <a href={profile.cvUrl} className="mt-3 inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium">Download CV (PDF)</a>
        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid gap-4">
          <Card>
            <div className="text-sm text-gray-700">Email: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
            <div className="mt-1 text-sm text-gray-700">Google Scholar: <a className="underline" href={profile.scholar}>{profile.scholar}</a></div>
            <div className="mt-1 text-sm text-gray-700">LinkedIn: <a className="underline" href={profile.linkedin}>{profile.linkedin}</a></div>
          </Card>
        </div>
        <p className="text-xs text-gray-500 mt-8">© {new Date().getFullYear()} {profile.name}. Last updated Sep 4, 2025.</p>
      </Section>
    </div>
  );
}
