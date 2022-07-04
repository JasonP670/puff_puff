export async function getData(url = 'https://jasonp670-puffs.herokuapp.com/api/v1/', body = '') {
  const response = await fetch(url, {
    body: body,
  });
  const data = await response.json();
  return data;
}
