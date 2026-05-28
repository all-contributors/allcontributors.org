interface LocaleConfig {
	label: string;
	lang?: string;
	dir?: "ltr" | "rtl";
}

export const Locales: { [dir: string]: LocaleConfig } = {
	en: {
		label: "English",
	},
	ar: {
		// Arabic
		label: "العربية",
		dir: "rtl",
	},
	de: {
		// German
		label: "Deutsch",
	},
	es: {
		// Spanish
		label: "Español",
	},
	fr: {
		// French
		label: "Français",
	},
	hi: {
		// Hindi
		label: "हिन्दी",
	},
	id: {
		//Indonesian
		label: "bahasa Indonesia",
	},
	ja: {
		// Japanese
		label: "日本語",
	},
	ko: {
		// Korean
		label: "한국어, 조선말",
	},
	nl: {
		// Dutch, Flemish
		label: "Nederlands",
	},
	pl: {
		// Polish
		label: "Polski",
	},
	pt: {
		// Portuguese
		label: "Português",
	},
	ro: {
		// Romanian, Moldavian, Moldovan
		label: "Română, Ромынэ",
	},
	ru: {
		// Russian
		label: "Русский язык",
	},
	"zh-cn": {
		// Chinese
		label: "简体中文",
		lang: "zh-CN",
	},
};
