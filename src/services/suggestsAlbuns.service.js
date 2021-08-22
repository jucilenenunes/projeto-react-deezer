import axios from "axios";
import { store, actionGetSuggestsAlbuns } from "../reducers";
import convertService from './convert';

function suggestsAlbunsService() {
  axios.get(`https://api.deezer.com/chart/0/albums`).then((rs) => {
    const items = rs.data.data.map((itm) => { return convertService(itm) });
    const prev = rs.data.prev ? rs.data.prev : null;
    const next = rs.data.next ? rs.data.next : null;
    store.dispatch(actionGetSuggestsAlbuns({ items, prev, next }));
  })
  .catch((err) => {
    console.log("Err: ", err);
  });
};

export default suggestsAlbunsService;