import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config';
import { useNavigate } from "react-router-dom";

function CreatePost({isAuth}) {
    const[title, setTitle] = useState('');
    const[bodyText, setBodyText] = useState('');
    let navigate = useNavigate();

    const postCollectionRef = collection(db, "posts")

    const createPost = async () =>{
        await addDoc(postCollectionRef, { title, bodyText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } })
        navigate("/");
    }

    useEffect(() => {
        if(!isAuth){
            navigate("/login")
        }
    }, [])
    

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create a Post</h1>
                <div className="inputGp">
                    <label> Title: </label>
                    <input type="text" placeholder='Title...' onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div className="inputGp">
                    <label> Body: </label>
                    <textarea placeholder='Body...' cols="30" rows="10" onChange={(e) => setBodyText(e.target.value)} ></textarea>
                </div>
                <button onClick={createPost} >Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost