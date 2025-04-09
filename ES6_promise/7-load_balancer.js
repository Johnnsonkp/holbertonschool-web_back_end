/*
Write and export a function named loadBalancer.
It should accept 2 arg chinaDownload (Promise) & USDownload (Promise).
The func should return the value returned by the promise
that resolved the first.
*/

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
