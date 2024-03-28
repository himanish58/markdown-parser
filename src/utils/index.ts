export const debounce = (
	callback: { apply: (arg0: undefined, arg1: unknown[]) => unknown },
	delay: number
) => {
	let inDebounce: number | undefined;
	return (...args: unknown[]) => {
		clearTimeout(inDebounce);
		inDebounce = setTimeout(() => callback.apply(this, args), delay);
	};
};

export const markdownToHtml = (markdown: string): string => {
	// Regular expressions for basic Markdown syntax
	const patterns = [
		[
			/^(#{1,6})\s(.*?)\n/gm,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			(_, p1, p2) => `<h${p1.length}>${p2}</h${p1.length}>`,
		], // Headers
		[/\*\*(.*?)\*\*/g, '<strong>$1</strong>'], // Bold
		[/__(.*?)__/g, '<strong>$1</strong>'], // Bold
		[/\*(.*?)\*/g, '<em>$1</em>'], // Italic
		[/_([^_]+)_/g, '<em>$1</em>'], // Italic
		[/\[x\]/gi, '<input type="checkbox" checked disabled>'], // Checked checkbox
		[/\[\s\]/gi, '<input type="checkbox">'], // Unchecked checkbox
		[/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>'], // Links
		[/(-|\*|\+)\s(.*?)\n/g, '<ul><li>$2</li></ul>'], // Unordered list
		[/1\.\s(.*?)\n/g, '<ol><li>$1</li></ol>'], // Ordered list
		[/^\s*(>|&gt;)\s(.*?)\n/gm, '<blockquote>$2</blockquote>'], // Blockquote
		[/`(.*?)`/g, '<code>$1</code>'], // Inline code
		[/```([^`]+)```/g, '<pre>$1</pre>'], // Code block
		[/___+/g, '<hr />'], // Line Separator
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		[(/\n/g, '</p><p>')], // Paragraphs
	];

	// Apply each pattern to the markdown
	for (const [pattern, replacement] of patterns) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		markdown = markdown.replace(pattern, replacement);
	}

	// Convert remaining line breaks to <br> tags
	markdown = markdown.replace(/\n/g, '<br>');

	return markdown.trim();
};
