class Request {

  get(url) {
    return fetch(url)
    // .then((res) => res.json());
    .then(res => res.text())
    .then(text => console.log(text))
  }
}

export default Request;
