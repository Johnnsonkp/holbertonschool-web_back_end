// Use the prototype func signUpUser(firstName, lastName) {}
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
