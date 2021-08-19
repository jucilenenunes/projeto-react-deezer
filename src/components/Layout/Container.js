import { StyledContainer } from "./styles";
// import OverLoading from './OverLoading'

function Container({children, loading}) {
    return (
        <>
            {/* <OverLoading loading={loading} /> */}
            <StyledContainer>{children}</StyledContainer>
        </>
    );
}

export default Container;
