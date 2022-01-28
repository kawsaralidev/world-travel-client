import React, { useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendEmailVerification,
    signOut,
} from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                verifyEmail();
                const user = result.user;

                const newUser = { email, displayName: name };
                setUser(newUser);

                navigate("/home");
                // save user to the database
                saveUser(email, name, "POST");
            })
            .catch((error) => {})

            .finally(() => setIsLoading(false));
    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
        });
    };

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || "/home";
                navigate(destination);
            })
            .catch((error) => {})
            .finally(() => setIsLoading(false));
    };

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, "PUT");

                const destination = location?.state?.from || "/";
                navigate(destination);
            })
            .catch((error) => {})
            .finally(() => setIsLoading(false));
    };

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    };

    //save user to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://damp-wildwood-60851.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then();
    };

    // check admin
    useEffect(() => {
        fetch(`https://damp-wildwood-60851.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);

    return {
        user,
        isLoading,
        admin,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
    };
};

export default useFirebase;
