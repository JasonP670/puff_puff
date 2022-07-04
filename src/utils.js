export async function getData(resource = '') {
  let url;
  if (process.env.NODE_ENV === 'production') {
    url = `https://jasonp670-puffs.herokuapp.com/api/v1/${resource}`;
  } else {
    url = `http://localhost:3001/api/v1/${resource}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
