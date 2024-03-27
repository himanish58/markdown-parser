import { FC } from 'react';
import { HeaderComponent } from './StyledComponents';

interface Props {
	headerText: string;
}
const Header: FC<Props> = ({ headerText }) => (
	<HeaderComponent>{headerText}</HeaderComponent>
);

export default Header;
