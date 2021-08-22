const convertPlaylistService = (itm) => {
  return {
    type: itm.type,
    typeTytle: 'Playlist',
    title: itm.title,
    description: itm.user.name ? 'Playlist do usuário ' + itm.user.name : '',
    thumbnail: itm.picture_medium,
    link: itm.link
  };
}

export default convertPlaylistService;