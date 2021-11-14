import Cookies from "js-cookie";
import qs from 'qs';

const BASEAPI = 'http://alunos.b7web.com.br:501';

async function apiFetchFile(endpoint, body) {
  if (!body.token) {
    let token = Cookies.get('token');
    if (token) {
      body.append('token', token);
    }
  }

  const res = await fetch(`${BASEAPI + endpoint}`, {
    method: 'POST',
    body,
  })
  const data = await res.json()

  if (data.notallowed) {
    window.location.href = '/signin';
    return;
  }
  return data;
}


async function apiFetchPost(endpoint, body) {
  if (!body.token) {
    let token = Cookies.get('token');
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(BASEAPI + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await res.json()

  if (data.notallowed) {
    window.location.href = '/signin';
    return;
  }
  return data;
}
async function apiFetchPut(endpoint, body) {
  if (!body.token) {
    let token = Cookies.get('token');
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(BASEAPI + endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await res.json()

  if (data.notallowed) {
    window.location.href = '/signin';
    return;
  }
  return data;
}

// eslint-disable-next-line
async function apiFetchGet(endpoint, body = []) {
  if (!body.token) {
    let token = Cookies.get('token');
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`)
  const data = await res.json()

  if (data.notallowed) {
    window.location.href = '/signin';
    return;
  }
  return data;
}


const OlxApi = {

  login: async (email, password) => {
    const reponse = await apiFetchPost('/user/signin', {
      email,
      password,
    });
    return reponse;
  },
  getStates: async () => {
    const response = await apiFetchGet(
      '/states');
    return response.states;
  },
  getCategories: async () => {
    const response = await apiFetchGet(
      '/categories');
    return response.categories;
  },
  register: async (name, email, password, state) => {
    const response = await apiFetchPost(
      '/user/signup',
      { name, email, password, state }
    );
    return response;
  },

  updateAd: async (formData, idAd) => {
    const response = await apiFetchFile(
      `/ad/${idAd}`,
      formData
    );
    return response;
  },






  getAds: async (options) => {
    const response = await apiFetchGet(
      '/ad/list',
      options
    );
    return response;
  },
  getAd: async (id, other = false) => {
    const response = await apiFetchGet(
      `/ad/item`,
      { id, other }
    );
    return response;
  },
  addAd: async (formData) => {
    const reponse = await apiFetchFile(
      '/ad/add',
      formData
    );
    return reponse;
  },
  getUser: async () => {
    const response = await apiFetchGet(
      '/user/me'
    );
    return response;
  },
  updateUser: async (name, email, state, password) => {
    const response = await apiFetchPut(
      '/user/me',
      { name, email, state, password }
    );
    return response;
  }
}



// eslint-disable-next-line
export default () => OlxApi;