import styled from "styled-components";

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

    > ul > li > button {
        border: 0;
        background-color: transparent;
        font-size: 25px;
        text-decoration: none;
        color: #000000;
        cursor: pointer;
    }

    > ul > li > button.ativa, > ul > li > button:hover {
        color: #ef5466;
    }
`

export const StyledParentContent = styled.main`
    display: grid;
    grid-template-rows: 60px;
    grid-row-gap: 20px;
    display: grid;
`

export const StyledTopBar = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;
`

export const StyledSearchBar = styled.div`
    display: grid;
    min-width: 650px;
    display: grid;
    grid-template-columns: 500px 150px;
    grid-column-gap: 0;
    flex-flow: row wrap;

    > div > input, > div > input:focus {
        font-size: 14px;
        font-weight: bold;
        color: #333333;
        border: solid 1px #ef5466;
        width: 500px;
        height: 25px;
        box-shadow: none;
    }

    > div > button {
        border: 0;
        background-color: #ef5466;
        color: #ffffff;
        font-weight: bold;
        width: 150px;
        height: 29px;
    }

    > div > button:hover {
        background-color: #dd4850;
        cursor: pointer;
    }
`

export const StyledMainContent = styled.div`
    margin: 0;
    padding: 0;
    // border: solid 1px blue;

     h1, h4 {
        color: #ef5466;
        margin: 0;
    }
`

export const StyledMainContentItems = styled.div`
    padding-left: 20px;
    // border: solid 1px pink;

    > div:last-child {
        padding-bottom: 10px;
        border-bottom: dashed 1px #ef5466;
    }

    > div.pagination {
        display: block;
        text-align: center;
    }

    > div.pagination > button {

        width: 80px;
        height: 25px;
        margin-top: 6px;
        border: solid 1px #ef5466;
        background-color: white;
        font-weight: bold;
        cursor: pointer;
    }

    > div.empty {
        width: 100%;
        text-align: center;
        padding: 20px 0 20px 0;
        color: #ff0000;
        font-weight: bold;
        font-size: 20px;
    }
`

export const StyledMainContentItem = styled.div`
    display: grid;
    grid-template-columns: 80px auto 300px;
    grid-template-rows: auto;
    border-top: dashed 1px #ef5466;
    padding-top: 10px;
    margin-bottom: 10px;

    > div {
        // border: solid 1px red;
    }

    > div > h4, > div > span {
        padding: 0 5px 0 5px;
    }

    > div > img {
        width: 80px;
        height: 80px;
        border: dashed 1px #ef5466;
    }

    > div > button {
        width: 300px;
        height: 25px;
        margin-top: 6px;
        border: solid 1px #ef5466;
        background-color: white;
        font-weight: bold;
        cursor: pointer;
    }
`