import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return Promise.resolve({
      photo, user,
    });
  } catch (err) {
    return promise.resolve({
      photo: null,
      user : null,
    });
  }
}
