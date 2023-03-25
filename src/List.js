import React, {useState} from "react";

const ShoppingList = () => {
    const [list, setList] = useState('')
    const [update, setUpdate] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
    }
    const addNew = () => {
        setUpdate([...update, list])
        setList('')
    }
    const removeItem=(index)=>{
    const updatedList = update.filter((item, i)=>i !==index);
    setUpdate(updatedList)
    }

    return (
        <div className='box'>
            <h2>Items to buy</h2>
            <form onSubmit={handleClick}>
                <input type='text' value={list} onChange={(e) => {
                    setList(e.target.value)
                }}/>
                <input type='submit' value='add' onClick={addNew}/>
            </form>
            <ul>
                {update.map((item, index) => (
                    <li key={index}> {item}
                        <button className='delete' onClick={()=>removeItem(index)}>
                            X
                        </button>
                    </li>

                ))}
            </ul>
        </div>
    )
}
export default ShoppingList

