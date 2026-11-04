const SCREENSHOTS = import.meta.glob<{ default: ImageMetadata }>(
	"/src/assets/screenshots/*.png",
	{ eager: true },
);

export function getScreenshot(name: string, variant: "dark" | "light") {
	const screenshot = SCREENSHOTS[`/src/assets/screenshots/${name}-${variant}.png`];

	if (!screenshot) {
		throw new Error(
			`Missing screenshot \`${name}-${variant}.png\` in \`src/assets/screenshots\`.`,
		);
	}

	return screenshot.default;
}
