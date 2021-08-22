import { useSelector } from "react-redux";
import { StyledSideBar, StyledSideBarLogo, StyledSideBarMenu } from "./styles";
import { store, actionGetMainTracks, actionGetSuggestsAlbuns, actionGetSuggestsPlaylists, actionGetSuggestsArtists, actionGetPrefereds } from '../../reducers'
import { mainTracksService, suggestsAlbunsService, suggestsPlaylistsService, suggestsArtistService, getPreferedMusicService } from '../../services';

function SideBar() {
    const key = useSelector((state) => state.key);
    const onClick = (actionDispatch, actionService) => {
        let items = actionService();
        store.dispatch(actionDispatch({ items }));
    }
    return (
        <StyledSideBar>
            <StyledSideBarLogo>
                <img src="logo.png" className="App-logo" alt="logo" />
            </StyledSideBarLogo>
            <StyledSideBarMenu>
                <ul>
                    <li><button onClick={() => {onClick(actionGetMainTracks, mainTracksService)}} className={key === "home" ? "ativa" : null}>Home</button></li>
                    <li><button onClick={() => {onClick(actionGetSuggestsAlbuns, suggestsAlbunsService)}} className={key === "album" ? "ativa" : null}>Álbuns</button></li>
                    <li><button onClick={() => {onClick(actionGetSuggestsPlaylists, suggestsPlaylistsService)}} className={key === "playlist" ? "ativa" : null}>Playlists</button></li>
                    <li><button onClick={() => {onClick(actionGetSuggestsArtists, suggestsArtistService)}} className={key === "artist" ? "ativa" : null}>Artistas</button></li>
                    <li><button onClick={() => {onClick(actionGetPrefereds, getPreferedMusicService)}} className={key === "prefereds" ? "ativa" : null}>Favoritas</button></li>
                </ul>
            </StyledSideBarMenu>
        </StyledSideBar>
    );
}
  
export default SideBar;
  