import { FC, useState, useCallback } from 'react';

import { debounce, markdownToHtml } from '../../utils';

import Editor from './Editor';

import { EditorID } from './constants';
import { Wrapper } from './StyledComponents';

const MarkdownParser: FC = () => {
	const [previewContent, setPreviewContent] = useState('');

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onChangeHandler = useCallback((event: any) => {
		const markdownText = event.target.innerText;
		setPreviewContent(markdownToHtml(markdownText));
	}, []);

	return (
		<Wrapper>
			<Editor
				id={EditorID.Markdown}
				title="Markdown"
				isEditable
				onChangeHandler={debounce(onChangeHandler, 200)}
			/>
			<Editor
				id={EditorID.Preview}
				title="Preview"
				previewContent={previewContent}
			/>
		</Wrapper>
	);
};

export default MarkdownParser;
