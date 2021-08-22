import axios from "axios";
import { store, actionSearchByTerm } from "../reducers";
import convertService from './convert';

function searchService(term) {
  axios.get(`https://api.deezer.com/search?q=${term}`).then((rs) => {
    const items = rs.data.data.map((itm) => { return convertService(itm) });
    const prev = rs.data.prev ? rs.data.prev : null;
    const next = rs.data.next ? rs.data.next : null;
    store.dispatch(actionSearchByTerm({ term, items, prev, next }));
  })
  .catch((err) => {
    console.log("Err: ", err);
  });
};

export default searchService;