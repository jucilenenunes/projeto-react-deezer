import styled from "styled-components";

export const StyledOverLoading = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000000;
`

export const StyledContainer = styled.div`
    min-width: 1000px;
    display: grid;
    grid-template-columns: 200px auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;    
`

export const StyledSideBar = styled.nav`
    flex-flow: row wrap;
    display: grid;
    grid-template-rows: 60px auto;
    grid-row-gap: 20px;
`

export const StyledSideBarLogo = styled.div`
    width: 200px;
    display: grid;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;

    > img {
        width: 80%;
        height: auto;
    }
`

export const StyledSideBarMenu = styled.nav`
    > ul {
        list-style: none;
        font-family: Roboto;
    }

    > ul > li {
        display: list-item;
        margin-bottom: 16px;
    }

    > ul > li > a {
        font-size: 25px;
        text-decoration: none;
        color: #000000;
    }

    > ul > li > a.ativa, > ul > li > a:hover {
        color: #ef5466;
    }
`

export const StyledParentContent = styled.main`
    display: grid;
    grid-template-rows: 60px auto;
    grid-row-gap: 20px;
    display: grid;
`

export const StyledTopBar = styled.div`
    align-content: center;
`

export const StyledMainContent = styled.div`
    margin: 0;
    padding: 0;
    border: 0;

    h1, h4 {
        margin: 0;
    }
`

export const StyledMainContentItems = styled.div`
    padding-left: 20px;
`

export const StyledMainContentItem = styled.div`
    padding-top: 20px
`