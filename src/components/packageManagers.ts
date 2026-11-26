export const packageManagers = ['pnpm', 'npm', 'bun', 'deno', 'yarn'] as const;

type PackageManager = (typeof packageManagers)[number];

export const packageManagerLabels = {
  bun: 'Bun',
  deno: 'Deno',
  npm: 'npm',
  pnpm: 'pnpm',
  yarn: 'Yarn',
} satisfies Record<PackageManager, string>;
