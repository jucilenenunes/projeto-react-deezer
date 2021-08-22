import axios from "axios";
import { store, actionGetMainTracks } from "../reducers";
import convertService from './convert';

function mainTracksService() {
  axios.get(`https://api.deezer.com/chart/0/tracks`).then((rs) => {
    const items = rs.data.data.map((itm) => { return convertService(itm) });
    const prev = rs.data.prev ? rs.data.prev : null;
    const next = rs.data.next ? rs.data.next : null;
    store.dispatch(actionGetMainTracks({ items, prev, next }));
  })
  .catch((err) => {
    console.log("Err: ", err);
  });
};

export default mainTracksService;