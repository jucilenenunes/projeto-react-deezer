import convertAlbumService from './convertAlbum.service';
import convertPlaylistService from './convertPlaylist.service';
import convertTrackService from './convertTrack.service';
import convertArtistService from './convertArtist.service';

const convertService = (itm) => {
  itm = { ...itm, type: itm.type && itm.type.length > 0 ? itm.type : itm.record_type };
  switch(itm.type) {
    case 'album':
      return convertAlbumService(itm);
    case 'playlist':
      return convertPlaylistService(itm);
    case 'track':
      return convertTrackService(itm);
    case 'artist':
      return convertArtistService(itm);
    default:
      return itm;
  }
};

export default convertService;