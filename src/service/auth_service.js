import {firebaseAuth, githubProvider, googleProvider, facebookProvider} from './firebase';

class AuthService {

    signIn (email, password) {
        return firebaseAuth.signInWithEmailAndPassword(email, password);
    }
    signUp (email, password) {
        return firebaseAuth.createUserWithEmailAndPassword(email, password);
    }
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user)
        });
    }

    logout() {
        return firebaseAuth.signOut();
    }
    getProvider(providerName) {
        switch (providerName) {
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProvider;
            case 'Facebook':
                return facebookProvider;
            default:
                 throw new Error (`not supported provider : ${providerName}`);
        }
    }
}

export default AuthService;