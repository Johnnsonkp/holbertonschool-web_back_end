// A function named handleProfileSignup. accepts 3 arg
// firstName, lastName, and fileName.
// The func should call the two other functions.
// When the promises are all settled it should return
// an array with the following structure:
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then(
    (results) => results.map(
      (result) => {
        const newResult = {
          status: result.status,
        };

        if (result.status === 'rejected') {
          newResult.value = result.reason.toString();
        } else {
          newResult.value = result.value;
        }

        return newResult;
      },
    ),
  );
}
