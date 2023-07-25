import { getByDisplayValue } from '@testing-library/react';
import React, { useState } from 'react'

const Todolist = () => {
    let [name, setName] = useState("");
    let [date, setDate] = useState("");
    let [todo, setTodo] = useState([]);
    let [btntext, setButton] = useState("Add");
    let [uid, setUid] = useState();

    const obj = {
        listName: name,
        listDate: date
    }

    const HandleAdd = ((e) => {
        e.preventDefault();
        if (uid >= 0) {
            todo.filter((val, i) => {
                if (uid === i) {
                    val.listName = name;
                    val.listDate = date;
                    setTodo([...todo]);
                    setUid(-1);
                    setButton("Add")
                }
            })

        }
        else {
            setTodo([...todo, obj])
        }
        console.log(obj);
        setName("");
        setDate("");

    })

    const HandleUpdate = (index) => {

        todo.map((item, i) => {

            if (index === i) {
                console.log(index, i);
                setName(item.listName);
                setDate(item.listDate)
                setUid(index);
                setButton("Update")
            }
        })
    }


    return (

        <div className='maindiv'>
            <form onSubmit={HandleAdd} >
                <h1>Todo List</h1>
                <div>
                    <input value={name} className='box' placeholder='Enter Your Todo' type="text" onChange={(e) => setName(e.target.value)} ></input>
                </div>
                <div>
                    <input value={date} className='box' type="date" onChange={(e) => setDate(e.target.value)} ></input>
                </div>
                <input type="submit" className='btn' value={btntext} ></input>
            </form>
            <br></br>
            <h4 style={{ display:todo.length>0?'block':'none'}}>My TODO</h4>
            {
                
                todo.length > 0 &&
                todo.map((item, id) => {
                    return (
                        
                            <div className='listdiv' key={id}>
                                <div>{item.listName}</div>
                                <div> {item.listDate}</div>
                                <div className='divbtn'><button onClick={() => HandleUpdate(id)}>Edit</button>
                                <button onClick={() =>setTodo( todo.filter((e, i) => id !== i))}>Delete</button></div>
                            </div>
                        
                    );
                })
            }
        </div>
    )
}

export default Todolist