import request from 'superagent';

export const requestGet = (path, query = {}, headers = {}, timeout = 5000) =>
  request
    .get(path)
    .set(headers)
    .query(query)
    .timeout(timeout)
    .set('Content-Type', 'application/javascript')
    .set('Accept', 'application/javascript')
    .set('Access-Control-Allow-Origin', true);

export const requestPost = (path, body, query = {}, headers = {}, timeout = 5000) =>
  request
    .post(path)
    .set(headers)
    .query(query)
    .send(body)
    .timeout(timeout)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', true);
