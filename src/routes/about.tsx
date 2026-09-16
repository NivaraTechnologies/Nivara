
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SmoothScroll } from "@/components/nivara/SmoothScroll";
import { Navbar } from "@/components/nivara/Navbar";
import { About } from "@/components/nivara/About";
import { FloatingContact } from "@/components/nivara/FloatingContact";
import { InquiryModal } from "@/components/nivara/InquiryModal";
import { Footer } from "@/components/nivara/Footer";

const title = "About Us — Nivara Technologies";
const description =
  "Meet the team behind Nivara Technologies, a web development studio designing and building premium, cloud-native websites and web applications.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SmoothScroll />
      <Navbar onInquire={() => setOpen(true)} />
      <main>
        <About />
      </main>
      <Footer />
      <FloatingContact onClick={() => setOpen(true)} />
      <InquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
