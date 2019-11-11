import { requestGet } from './http.utils';

const initializeApp = () => requestGet(`${process.env.REACT_APP_FIREBASE_DB}/public/config.json`).then(res => res.body);

export default initializeApp;
