import { store, actionGetPrefereds } from '../reducers';
import { popUpMessageService } from '../services';

const preferedsKey = 'ju-prefs';

export const addPreferedMusicService = (item) => {
  let prefereds = [];
  if (localStorage[preferedsKey])
    prefereds = JSON.parse(localStorage[preferedsKey]);
  const fiteredResults = prefereds.filter(itmFilter => itmFilter.title === item.title && itmFilter.artistName === item.artistName && itmFilter.albumTitle === item.albumTitle);
  if (fiteredResults.length === 0) {
    prefereds.push({ ...item, prefered: true });
    localStorage[preferedsKey] = JSON.stringify(prefereds);
    popUpMessageService('Música adicionada as favoritas com sucesso!', 2);
  }
  else
    popUpMessageService('ATENÇÃO! Esta música já consta em suas favoritas.', 2);
}

export const removePreferedMusicService = (index) => {
  let prefereds = JSON.parse(localStorage[preferedsKey]);
  prefereds.splice(index, 1);
  localStorage[preferedsKey] = JSON.stringify(prefereds);
  store.dispatch(actionGetPrefereds({ items: prefereds }));
  popUpMessageService('Música removida das favoritas com sucesso!', 2);
}

export const getPreferedMusicService = () => {
  let prefereds = [];
  if (localStorage[preferedsKey])
    prefereds = JSON.parse(localStorage[preferedsKey]);
  return prefereds
}