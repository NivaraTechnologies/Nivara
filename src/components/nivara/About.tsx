import { motion } from "framer-motion";

const values = [
  {
    title: "Built to last",
    description: "We write clean, maintainable code on a modern stack — not throwaway demos that break the moment you need to change something.",
  },
  {
    title: "Client-first",
    description: "Every build starts with your goals and your users, not a template. We ask questions before we write a single line of code.",
  },
  {
    title: "Fast, honest delivery",
    description: "Clear timelines, straight communication, and no scope surprises — you always know where your project stands.",
  },
];

const stack = ["React", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare"];

export function About() {
  return (
    <>
      {/* Intro */}
      <section className="px-4 pb-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground">
            About Us
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
            We're <span className="text-brand-navy">Nivara Technologies</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We're a web development studio that designs and builds premium
            websites and web applications for businesses that want their
            digital presence to feel as sharp as the work they actually do.
            No cookie-cutter templates — every project is built around what
            you need to grow.
          </p>
        </motion.div>
      </section>

      {/* Founder */}
      <section className="px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-[24px] border border-border bg-card p-8 md:flex-row md:p-10"
        >
          <img
            src="/team/sai-nithin.jpeg"
            alt="Sai Nithin, Founder of Nivara Technologies"
            className="h-40 w-40 shrink-0 rounded-2xl object-cover md:h-48 md:w-48"
          />
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl font-extrabold tracking-[-0.03em]">
              Sai Nithin
            </h2>
            <p className="mt-1 text-sm font-medium text-brand-navy">
              Founder, Nivara Technologies
            </p>
            <p className="mt-4 text-muted-foreground">
              Sai Nithin started Nivara Technologies to close the gap he kept
              seeing between what businesses actually needed online and what
              most agencies were shipping them — generic templates dressed up
              as custom work. He's hands-on with every project that comes
              through the studio, from the first conversation to the last
              line of deployed code, and believes a website should work as
              hard as the business behind it.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <h2 className="text-center font-display text-2xl font-extrabold tracking-[-0.03em] md:text-3xl">
            What we stand for
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-[20px] border border-border bg-card p-6"
              >
                <h3 className="font-display text-lg font-bold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stack */}
      <section className="px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 rounded-[20px] border border-border bg-card p-6"
        >
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl font-extrabold tracking-[-0.03em] md:text-3xl">
            Got a project in mind?
          </h2>
          <a
            href="/#inquire"
            className="mt-6 inline-block rounded-full bg-brand-navy px-8 py-3 font-medium text-white transition-transform hover:scale-105"
          >
            Let's talk
          </a>
        </motion.div>
      </section>
    </>
  );
}

export default About;
