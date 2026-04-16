import { visit } from "unist-util-visit";

export function rehypeStepIds() {
	return (tree: any) => {
		let stepCount = 0;

		visit(tree, (node: any) => {
			if (node.type === "mdxJsxFlowElement" && node.name === "Steps") {
				visit(node, (listContainer: any) => {
					if (
						listContainer.type === "list" ||
						listContainer.tagName === "ol" ||
						listContainer.tagName === "ul"
					) {
						const items = listContainer.children || [];

						for (const child of items) {
							if (child.type === "listItem" || child.tagName === "li") {
								stepCount++;

								child.data = child.data || {};
								child.data.hProperties = child.data.hProperties || {};
								child.data.hProperties.id = `step-${stepCount}`;

								child.properties = child.properties || {};
								child.properties.id = `step-${stepCount}`;
							}
						}
						return "skip";
					}
				});
			}
		});
	};
}
