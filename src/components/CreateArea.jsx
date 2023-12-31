import React, { useState } from "react";

function CreateArea(props){

    const [note, setNote] = useState({
        title: "",
        content:  ""
    });


    function handleChange(event){
       const {name, value} = event.target;
       setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        };
       });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content:""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form action="">
                <input type="text" onChange={handleChange} value={note.title} name="title" placeholder="Title"/>
                <textarea name="content" id="content" onChange={handleChange} value={note.content} cols="30" rows="3" placeholder="Take a note..."></textarea>
                <button onClick={submitNote}><h1>+</h1></button>
            </form>
        </div>
    );
}



export default CreateArea;