const convertAlbumService = (itm) => {
  return {
    type: itm.type,
    typeTytle: 'Álbum',
    title: itm.title,
    artistName: itm.artist?.name,
    thumbnail: itm.cover_medium,
    link: itm.link
  };
}
export default convertAlbumService;