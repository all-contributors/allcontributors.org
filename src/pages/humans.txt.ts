import fs from "node:fs";
import path from "node:path";
import type { APIRoute } from "astro";

interface Contributor {
  login: string;
  name: string;
  avatar_url?: string;
  profile?: string;
  contributions?: string[];
}

interface ContributorsConfig {
  projectName?: string;
  projectOwner?: string;
  contributors?: Contributor[];
}

export const GET: APIRoute = async () => {
  const configPath = path.resolve(process.cwd(), ".all-contributorsrc");
  let contributors: Contributor[] = [];

  try {
    const rawData = fs.readFileSync(configPath, "utf-8");
    const parsed = JSON.parse(rawData) as ContributorsConfig;
    contributors = parsed.contributors ?? [];
  } catch (error) {
    console.error("Failed to read .all-contributorsrc:", error);
  }

  const lines: string[] = [];

  lines.push("/* TEAM */");
  lines.push("  Maintainer: Jake Bolam");
  lines.push("  Site: https://jakebolam.com");
  lines.push("  GitHub: https://github.com/jakebolam");
  lines.push("");
  lines.push("  Maintainer: Maximilian Berkmann");
  lines.push("  GitHub: https://github.com/Berkmann18");
  lines.push("");
  lines.push("  Maintainer: Tyler Benning");
  lines.push("  GitHub: https://github.com/tbenning");
  lines.push("");
  lines.push("  Maintainer: Jeff Wen");
  lines.push("  GitHub: https://github.com/sinchang");
  lines.push("");

  lines.push("/* CONTRIBUTORS */");
  for (const contributor of contributors) {
    lines.push(`  ${contributor.name} (@${contributor.login})`);
    lines.push(`  GitHub: https://github.com/${contributor.login}`);
    if (
      contributor.profile &&
      contributor.profile !== `https://github.com/${contributor.login}`
    ) {
      lines.push(`  Site: ${contributor.profile}`);
    }
    if (contributor.contributions && contributor.contributions.length > 0) {
      lines.push(`  Contributions: ${contributor.contributions.join(", ")}`);
    }
    lines.push("");
  }

  lines.push("/* SITE */");
  lines.push("  Software: Astro, Starlight, Tailwind CSS, Pagefind");
  lines.push("  Standards: HTML5, CSS3");
  lines.push("  Source: https://github.com/all-contributors/allcontributors.org");
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
