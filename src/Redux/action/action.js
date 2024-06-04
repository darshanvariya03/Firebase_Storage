
import { app } from '../../firebase';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

export const GET_USER = () => {
    return async (dispatch) => {
        try {
            const db = getFirestore(app)
            const data = await collection(db, "user");
            const alldata = await getDocs(data);
            dispatch(SET_USER(alldata))
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

const SET_USER = (data) => {
    return {
        type: 'getusers',
        payload: data
    }
}

export const ADD_USER = (data) => {
    return async (dispatch) => {
        try {
            const db = getFirestore(app);
            const addemp = await addDoc(collection(db, 'users'), {
                name: data.name,
                phone: data.phone
            })
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

export const DELETE_USER = (userid) => {
    return async (dispatch) => {
        try {
            const db = getFirestore(app);
            const user = doc(db, 'users', userid);
            await deleteDoc(user)
            dispatch(GET_USER())
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

export const EDIT_USER = (data) => {
    return async (dispatch) => {
        try {
            const db = getFirestore(app);
            const user = await doc(db, 'users', data.id);
            await updateDoc(user, {
                name: data.name,
                phone: data.phone
            })
            dispatch(GET_USER());
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}