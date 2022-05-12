import React,{useState} from "react";
import { Zoom } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function InputArea(props){
    const [note,setNote] = useState({
        title:"",
        content:""
    })
    const [isExpand,setIsExpand] = useState(false);

    function handleExpand(){
        setIsExpand(true);
    }
    
    function handleChange(event){
        const {name,value} = event.target;
        setNote(prevValues=>{
            return{
                ...prevValues,
                [name]:value
            }
        })

    }

    function handleClick(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();

    }
    return(
        <div>
            <form className="create-note">
            {isExpand && (
                <input 
                            onChange={handleChange} 
                            value={note.title} 
                            name="title" 
                            placeholder="Title">
                        </input>
            )}
            <textarea 
                onClick={handleExpand}
                onChange={handleChange} 
                value={note.content} 
                name="content" 
                placeholder="Add a note here..."
                rows={isExpand?3:1}>    
                </textarea>
            <Zoom in={isExpand}>
            <Fab onClick={handleClick}>
                <AddIcon/>
            </Fab>
            </Zoom>
            </form>
        </div>
    )
}

export default InputArea;