import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Narayan Chowdhury (Nixon) | Urologist & Surgeon | Rangpur" },
      {
        name: "description",
        content:
          "Dr. Narayan Chowdhury (Nixon) — MBBS, BCS (Health), MS (Urology). Urologist & Surgeon at Asia Diagnostic Center, Dhap, Rangpur. Kidney stone, prostate & urinary problem treatment.",
      },
      {
        property: "og:title",
        content: "Dr. Narayan Chowdhury (Nixon) | Urologist & Surgeon | Rangpur",
      },
      {
        property: "og:description",
        content:
          "Urology specialist & surgeon in Rangpur. Kidney stone, prostate and urinary problem treatment at Asia Diagnostic Center, Dhap, Rangpur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/index.html" });
  },
  component: () => null,
});
