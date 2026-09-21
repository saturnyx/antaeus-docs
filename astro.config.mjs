// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://antaeus.saturnyx.dev/",
  base: "/",
  integrations: [
    starlight({
      title: "Antaeus Documentation",
      favicon: "/favicon.png",
      customCss: ["./src/styles/main.scss"],
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Saturnyx/antaeus",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [{ autogenerate: { directory: "intro" } }],
        },
        {
          label: "Concepts",
          items: [{ autogenerate: { directory: "concepts" } }],
        },
        {
          label: "Writing User Programs",
          items: [{ autogenerate: { directory: "user" } }],
        },
        {
          label: "API Reference",
          link: "https://docs.rs/antaeus/latest/antaeus/",
        },
      ],
    }),
  ],
});
