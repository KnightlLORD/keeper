import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";



function App(){
    const [notes,setNotes] = useState([]);
    function addNote(newNote){
        setNotes(prevValues=>{
            return [...prevValues,newNote];
        })
    }
    function deleteNote(id){
        setNotes(prevValues=>{
            return prevValues.filter((prop,index)=>{
                return index !== id;
            })
        })
    }
    return(
        <div>
            <Header />
            <InputArea onAdd={addNote} />

            {notes.map((prop,index)=>{
                return(
                    <Note onDelete={deleteNote} key={index} id={index} title={prop.title} content={prop.content}/>
                )
            })}
            <Footer />
        </div>
    );
}

export default App;