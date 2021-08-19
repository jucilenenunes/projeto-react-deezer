import { StyledMainContentItem } from "./styles";

function MainContentItem({item}) {
    return (
        <StyledMainContentItem>
            <img src={item.thumbnail} alt={item.title} />
            <h4>{item.title}</h4>
            <span>{item.description}</span>
        </StyledMainContentItem>
    );
}

export default MainContentItem;
