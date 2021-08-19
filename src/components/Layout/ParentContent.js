import { StyledParentContent } from "./styles";

function ParentContent({children}) {
    return (
        <StyledParentContent>{children}</StyledParentContent>
    );
}
  
export default ParentContent;
