// import { homeData, albumData, playlistData, artistData } from '../App.mock'

import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import { mainTracksService } from '../services'

// INITIAL STORE -> Estado Inicial Global da Aplicação
const INITIAL_STATE = {
  isLoading: true,
  key: null,
  title: null,
  items: []
};

// ACTIONS -> Coisas que você deseja fazer
export const actionsType = {
  LOAD_API_URL: 'LOAD_API_URL',
  GET_MAIN_TRACKS: 'GET_MAIN_TRACKS',
  SEARCH_CONTENT_BY_TERM: 'SEARCH_CONTENT_BY_TERM',
  GET_SUGGESTS_ALBUNS: 'GET_SUGGESTS_ALBUNS',
  GET_SUGGESTS_PLAYLISTS: 'GET_SUGGESTS_PLAYLISTS',
  GET_SUGGESTS_ARTISTS: 'GET_SUGGESTS_ARTISTS',
  GET_PREFERED_MUSICS: 'GET_PREFERED_MUSICS'
}

export const actionLoadAPIURL = ({ items, prev, next }) => { 
  return { type: actionsType.LOAD_API_URL, items, prev, next }; 
}

export const actionGetMainTracks = ({ items, prev, next }) => { 
  return { type: actionsType.GET_MAIN_TRACKS, payload: null, key: 'home', title: 'Músicas Mais Ouvidas', items, prev, next }; 
}

export const actionSearchByTerm = ({ term, items, prev, next }) => { 
  return { type: actionsType.SEARCH_CONTENT_BY_TERM, payload: term, key: 'searched', title: `Resultado da Pesquisa por "${term}"`, items, prev, next };
}

export const actionGetSuggestsAlbuns = ({ items, prev, next }) => {
  return { type: actionsType.GET_SUGGESTS_ALBUNS, payload: null, key: 'album', title: `Álbuns Sugeridos para Você`, items, prev, next }; 
}

export const actionGetSuggestsPlaylists = ({ items, prev, next }) => {
  return { type: actionsType.GET_SUGGESTS_PLAYLISTS, payload: null, key: 'playlist', title: `Playlists Sugeridas para Você`, items, prev, next };
}

export const actionGetSuggestsArtists = ({ items, prev, next }) => {
  return { type: actionsType.GET_SUGGESTS_ARTISTS, payload: null, key: 'artist', title: `Artistas Sugeridos para Você`, items, prev, next };
}

export const actionGetPrefereds = ({ items }) => { 
  return { type: actionsType.GET_PREFERED_MUSICS, payload: null, key: 'prefereds', title: 'Minhas Músicas Favoritas', items }; 
}

// REDUCER -> Os reducers basicamente mostram como as ACTIONS alteral seu STORE (estado global)
export const reducerDeezer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case actionsType.LOAD_API_URL:
      return { ...state, items: action.items, prev: action.prev, next: action.next };
    case actionsType.GET_MAIN_TRACKS:
      return { ...state, isLoading: false, key: action.key, title: action.title, items: action.items, prev: action.prev, next: action.next };
    case actionsType.SEARCH_CONTENT_BY_TERM:
      return { ...state, isLoading: false, key: action.key, title: action.title, items: action.items, prev: action.prev, next: action.next };

    case actionsType.GET_SUGGESTS_ALBUNS:
      return { ...state, isLoading: false, key: action.key, title: action.title, items: action.items, prev: action.prev, next: action.next };
    case actionsType.GET_SUGGESTS_PLAYLISTS:
      return { ...state, isLoading: false, key: action.key, title: action.title, items: action.items, prev: action.prev, next: action.next };
    case actionsType.GET_SUGGESTS_ARTISTS:
      return { ...state, isLoading: false, key: action.key, title: action.title, items: action.items, prev: action.prev, next: action.next };
    case actionsType.GET_PREFERED_MUSICS:
      return { ...state, isLoading: false, key: action.key, title: action.title, items: action.items, prev: action.prev, next: action.next };
    default:
      return state;
  }
};

// STORE
export const store = createStore(reducerDeezer, applyMiddleware(logger));

// LOGGER do STORE
store.subscribe(() => console.log(store.getState()));

// DISPATCHER -> Esse é o cara responsável por realmente executar as ações ou melhor ele despacha a ação desejada para que o REDUCER faça seu trabalho
const items = mainTracksService();
store.dispatch(actionGetMainTracks({ items }));