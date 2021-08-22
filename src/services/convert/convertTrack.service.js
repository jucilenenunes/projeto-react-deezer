const convertTrackService = (itm) => {
  const trackDuration = new Date(itm.duration * 1000).toISOString().substr(14, 5);
  return {
    type: itm.type,
    typeTytle: 'Música',
    title: itm.title,
    artistName: itm.artist.name,
    albumTitle: itm.album.title,
    trackDuration,
    thumbnail: itm.album.cover_medium,
    link: itm.link,
    linkMP3: itm.preview,
  };
}

export default convertTrackService;