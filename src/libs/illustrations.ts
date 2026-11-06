export const AVATARS = {
	contributor: { shirt: "#F3D2B3", skin: "#C77B58" },
	designer: { shirt: "#F6C85F", skin: "#F9BE6C" },
	developer: { shirt: "#F4E3A8", skin: "#F9BE6C" },
	maintainer: { shirt: "#B9C0DC", skin: "#F9BE6C" },
	"product-manager": { shirt: "#B8C3F2", skin: "#FBCB8A" },
	researcher: { shirt: "#B8B6F2", skin: "#A05A4B" },
} as const;

export type AvatarKind = keyof typeof AVATARS;

export const SPARKLE_PATH =
	"M0 -1C0.12 -0.3 0.3 -0.12 1 0C0.3 0.12 0.12 0.3 0 1C-0.12 0.3 -0.3 0.12 -1 0C-0.3 -0.12 -0.12 -0.3 0 -1Z";
