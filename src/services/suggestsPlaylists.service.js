import axios from "axios";
import { store, actionGetSuggestsPlaylists } from "../reducers";
import convertService from './convert';

function suggestsPlaylistsService() {
  axios.get(`https://api.deezer.com/chart/0/playlists`).then((rs) => {
    const items = rs.data.data.map((itm) => { return convertService(itm) });
    const prev = rs.data.prev ? rs.data.prev : null;
    const next = rs.data.next ? rs.data.next : null;
    store.dispatch(actionGetSuggestsPlaylists({ items, prev, next }));
  })
  .catch((err) => {
    console.log("Err: ", err);
  });
};

export default suggestsPlaylistsService;