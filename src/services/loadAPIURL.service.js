import axios from "axios";
import { store, actionLoadAPIURL } from "../reducers";
import convertService from './convert';

function loadAPIURL(url) {
  axios.get(url).then((rs) => {
    const items = rs.data.data.map((itm) => { return convertService(itm) });
    const prev = rs.data.prev ? rs.data.prev : null;
    const next = rs.data.next ? rs.data.next : null;
    store.dispatch(actionLoadAPIURL({ items, prev, next }));
  })
  .catch((err) => {
    console.log("Err: ", err);
  });
};

export default loadAPIURL;