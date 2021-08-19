import { StyledMainContent } from "./styles";
import MainContentItems from './MainContentItems';

function MainContent({data}) {
    return (
        <StyledMainContent>
            <MainContentItems data={data} />
        </StyledMainContent>
    );
}
  
export default MainContent;
