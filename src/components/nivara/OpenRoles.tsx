
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { bentoStagger } from "./TiltCard";

type Role = {
  title: string;
  type: string; // e.g. "Full-time · Remote"
  summary: string; // shown on the front of the card
  requirements: string[]; // shown on the back, after it's flipped
};

// ─────────────────────────────────────────────────────────────
// This is the only part you need to touch when hiring needs change.
// Add a role object below and a flashcard appears on the site.
// Remove it and the card disappears. Empty array = section is
// hidden entirely (nothing renders on the homepage).
// ─────────────────────────────────────────────────────────────
const roles: Role[] = [
  {
    title: "Sales Associate",
    type: "Full-time · Remote",
    summary: "Help us bring in new client projects and manage outreach.",
    requirements: [
      "Comfortable with cold outreach and follow-ups",
      "Basic understanding of web development services is a plus",
    ],
  },
];

function RoleCard({ role }: { role: Role }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
      className="[perspective:1200px]"
    >
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={`${role.title} — tap to ${flipped ? "see overview" : "see requirements"}`}
        className="relative h-56 w-full text-left transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="bento-card absolute inset-0 flex flex-col justify-between p-6 [backface-visibility:hidden]">
          <div>
            <span className="chip w-fit">{role.type}</span>
            <h3 className="mt-4 text-xl font-bold">{role.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{role.summary}</p>
          </div>
          <span className="text-xs text-primary">Tap to see requirements →</span>
        </div>

        {/* Back */}
        <div
          className="bento-card absolute inset-0 flex flex-col justify-between p-6 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-lg font-bold">What we're looking for</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {role.requirements.map((req) => (
                <li key={req}>• {req}</li>
              ))}
            </ul>
          </div>
          <span className="text-xs text-primary">← Tap to go back</span>
        </div>
      </button>
    </motion.div>
  );
}

export function OpenRoles() {
  if (roles.length === 0) return null;

  return (
    <section id="careers" className="mx-auto w-full max-w-6xl px-4 pb-24">
      <SectionHeading eyebrow="Join us">
        Roles we're currently <span className="accent-word">hiring</span> for
      </SectionHeading>
      <motion.div
        variants={bentoStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {roles.map((role) => (
          <RoleCard key={role.title} role={role} />
        ))}
      </motion.div>
    </section>
  );
}
