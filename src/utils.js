function buildUrl(resource) {
  let url;
  if (process.env.NODE_ENV === 'production') {
    url = `https://jasonp670-puffs.herokuapp.com/api/v1/${resource}`;
  } else {
    url = `http://localhost:3001/api/v1/${resource}`;
  }
  return url;
}

export async function getData(resource = '') {
  const url = buildUrl(resource);
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function postData(resource = '', body = {}) {
  const url = buildUrl(resource);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}
