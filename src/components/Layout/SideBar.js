import { StyledSideBar, StyledSideBarLogo, StyledSideBarMenu } from "./styles";

function SideBar({data}) {
    return (
        <StyledSideBar>
            <StyledSideBarLogo>
                <img src="logo.png" className="App-logo" alt="logo" />
            </StyledSideBarLogo>
            <StyledSideBarMenu>
                <ul>
                    <li><a href="/#teste" className={data.key === "home" ? "ativa" : null}>Home</a></li>
                    <li><a href="/#teste" className={data.key === "album" ? "ativa" : null}>Álbuns</a></li>
                    <li><a href="/#teste" className={data.key === "playlist" ? "ativa" : null}>Playlists</a></li>
                    <li><a href="/#teste" className={data.key === "artist" ? "ativa" : null}>Artistas</a></li>
                </ul>
            </StyledSideBarMenu>
        </StyledSideBar>
    );
}
  
  export default SideBar;
  