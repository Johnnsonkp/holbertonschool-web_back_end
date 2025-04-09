// Using the function handleResponseFromAPI(promise)
// Append three handlers to the function:
// When the Promise resolves, return an obj w/ the following
// status: 200
// body: success
// When the Promise rejects, return empty Error obj
// For every resolution, log "Got a response from the API" to console

export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error()) // eslint-disable-line no-unused-vars
    .finally(() => { console.log('Got a response from the API'); });
}
