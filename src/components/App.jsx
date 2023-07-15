import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNotes(noteItem){
    return (<Note 
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
    />);
}


function App(){
    return <div>
       <Header />
       {/* <Note title="this is new title " content="this is new title content"/> */}
       {notes.map((noteItem) => {
            return (<Note 
                key={noteItem.key}
                title={noteItem.title}
                content={noteItem.content}
            />);
        })};
       <Footer />
    </div>
}

export default App;