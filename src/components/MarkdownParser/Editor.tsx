import { FC } from 'react';

import { EditorID } from './constants';
import { EditorWrapper, EditorTitle, EditorBody } from './StyledComponents';

interface Props {
	title: string;
	id: EditorID;
	isEditable?: boolean;
	previewContent?: string;
	onChangeHandler?: (event: unknown) => void;
}

const Editor: FC<Props> = ({
	title,
	id,
	isEditable = false,
	previewContent = '',
	onChangeHandler,
}) => (
	<EditorWrapper>
		<EditorTitle>{title}</EditorTitle>
		<EditorBody
			id={id}
			contentEditable={isEditable}
			onInput={onChangeHandler}
			{...(!isEditable && {
				dangerouslySetInnerHTML: { __html: previewContent },
			})}></EditorBody>
	</EditorWrapper>
);

export default Editor;
