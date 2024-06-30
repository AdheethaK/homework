// import ADDButton from "../../components/Button/ADD";

import { useState } from "react";

export default function ToDoList() {

    const [list,setList] = useState<String[]>([]);

    const addToDoList = (e:any) => {
        e.preventDefault();
        setList([...list, e.target[0].value]);

        clearTxt();
    }
    const clearTxt = function myFunction() {
        
    }

  return (
    <>
        {list && 
            <div className="list">
                <ul>
                    {list.map((item ,index) => 
                        <li key={index}>{item}</li>
                    )}
                </ul>
            </div>
        }
        <div className="form">
            <form onSubmit={addToDoList}>
                <input id="txtField" type="text" placeholder="Enter the text" />
                <button type="submit">ADD</button>
            </form>
        </div>

    </>
  );
}