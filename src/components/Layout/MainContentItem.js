import { StyledMainContentItem } from "./styles";
import { addPreferedMusicService, removePreferedMusicService } from '../../services'

function MainContentItem({item, index}) {
    const mp3Player = item.linkMP3 ? <div className="mp3-player"><audio src={item.linkMP3} type="audio/mpeg" controls /></div> : null;
    const linkButton = item.link ? <button onClick={() => { window.open(item.link, '_blank').focus(); }}>Abrir no Deezer</button> : null; 
    const prefAddButton = item.type === 'track' ? <button onClick={() => { addPreferedMusicService(item);  }}>Adicionar as Favoritas</button> : null;
    const prefDelButton = item.type === 'track' ? <button onClick={() => { removePreferedMusicService(index); }}>Remover das Favoritas</button> : null;
    const prefButton = item.prefered ? prefDelButton : prefAddButton;
    return (
        <StyledMainContentItem>
            <div><img src={item.thumbnail} alt={item.title} /></div>
            <div>
                <h4> {item.typeTytle}: "{item.title}"</h4>
                {(item.description) ? <span>{item.description}<br /></span> : null}
                {(item.artistName) ? <span>Artista: {item.artistName}<br /></span> : null}
                {(item.albumTitle) ? <span>Album: {item.albumTitle}<br /></span> : null}
                {(item.trackDuration) ? <span>Duração: {item.trackDuration}</span> : null}
            </div>
            <div>
                {mp3Player}
                {linkButton}
                {prefButton}
            </div>
        </StyledMainContentItem>
    );
}

export default MainContentItem;