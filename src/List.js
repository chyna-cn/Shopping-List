import React, {useState} from "react";
const ShoppingList = () => {
    const [list, setList] = useState('')
    const [update, setUpdate] = useState([])

    const handleClick = (e) => {
        e.preventDefault()
    }
    const addNew = ()=>{
        setUpdate([...update, list])
        setList('')
    }
    return (
        <div className='box'>
            <h2>Items to buy</h2>
            <form onSubmit={handleClick}>
                <input type='text' value={list} onChange={(e) => {
                    setList(e.target.value)
                }}/>
                <input type='submit' value='add' onClick={addNew}  />
            </form>
            <ul>
                {update.map((item,index)=>(
                    <li key = {index}>{item}</li>
                ))}

            </ul>
        </div>
    )
}
export default ShoppingList

