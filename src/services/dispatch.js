async function fetchDispatchData() {
  const response = await fetch('/fake-api/front-dispatch-en.json');
  return response.json();
}
export default fetchDispatchData;
