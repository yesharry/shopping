import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export const login = () => {
  signInWithPopup(auth, provider).catch(console.error);
};

export const logout = () => {
  signOut(auth).catch(console.error);
};

export const onUserStateChange = (
  callback: (updateUser: Object | null) => void
) => {
  onAuthStateChanged(auth, async (user) => {
    const updateUser = user ? await adminUser(user) : null;
    console.log(
      "onAuthStateChanged에 들어오는 인자 type check ->",
      typeof user // object
    );
    console.log(
      "onAuthStateChane에서 만든 변수 updateUser 관리자체크 변수 type check ->",
      typeof updateUser // object
    );
    callback(updateUser);
  });
};

const adminUser = async (user: User) => {
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
};
