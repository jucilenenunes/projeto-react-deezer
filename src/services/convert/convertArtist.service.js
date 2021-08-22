const convertArtistService = (itm) => {
  return {
    type: itm.type,
    typeTytle: 'Artista',
    title: itm.name,
    description: '(Sem descrição)',
    thumbnail: itm.picture_medium,
    link: itm.link
  };
}
export default convertArtistService;