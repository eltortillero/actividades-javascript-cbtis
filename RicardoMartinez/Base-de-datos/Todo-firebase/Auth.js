const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

auth.laguageCode = "es";

export async function login() {
    try{
        const response = await auth.sigInWithPopup(provider);
        console.log(response);
        return response.user;
    }catch(error) {
        throw new Error(error);
    }
}

export function logout(){
    auth.signOut();
}