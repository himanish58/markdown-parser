import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: 1rem;
	display: flex;
	gap: 1rem;
	height: calc(100vh - 4rem);
	box-sizing: border-box;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

export const EditorWrapper = styled.div`
	flex: 1;
	box-sizing: border-box;
`;

export const EditorTitle = styled.h3`
	margin: 0.5rem 0;
	font-size: 1rem;
	font-weight: 500;
	color: var(--primary-color);
	box-sizing: border-box;
`;

export const EditorBody = styled.div`
	padding: 1rem;
	border: 0.125rem solid var(--primary-color);
	border-radius: 0.5rem;
	box-shadow: 0.25rem 0.125rem 0.125rem #c6c6c6;
	height: calc(100% - 4.25rem);
	overflow: auto;
`;
