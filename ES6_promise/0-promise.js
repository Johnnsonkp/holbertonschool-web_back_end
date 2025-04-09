// Return a Promise using this prototype

function getResponseFromAPI() {
  function settlePromise(resolve, reject) { // eslint-disable-line no-unused-vars
    resolve('did nothing');
  }

  return new Promise(settlePromise);
}

export default getResponseFromAPI;
