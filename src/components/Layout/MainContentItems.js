import { StyledMainContentItems } from "./styles";
import MainContentItem from './MainContentItem';

function MainContentItems({data}) {
    let itemsRedered = data.items.map((item, index) => {
        return <MainContentItem key={index} item={item} />;
    });

    return (
        <StyledMainContentItems>
            <h1>{data.title}</h1>
            {itemsRedered}
        </StyledMainContentItems>    
    );
}

export default MainContentItems;
