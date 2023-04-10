import { signInWithGooglePopup, createUserDocumentFormAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFormAuth(user);
  }


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        sign in with googlepopup
      </button>
    </div>
  );
};

export default SignIn;