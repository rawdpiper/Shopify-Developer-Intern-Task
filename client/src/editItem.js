import axios from 'axios'
import React, { useState } from 'react'

const EditItem = ({ change }) => {

    const EditItem = () => {
        axios.post("https://Shopify-Developer-Intern-Task.rawdpiper.repl.co/api/edit-item", {
            name: name,
            quantity: quantity,
            operation: operation
        })
            .then((res) => { alert("Item edited successfully"); change("All") })
            .catch(err => alert(err.response.data))
    }
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    const [operation, setOperation] = useState('increase')
    console.log(operation)
    return (
        <div>
            <button onClick={() =>change("All")}>Back</button>
            <div>
                <p>Name: </p>
                <input onChange={(e) => setName(e.target.value)} style={{ borderColor: 'black', width: 200, height: 30 }} />
            </div>

            <div>
                <p>Quantity: </p>
                <input onChange={(e) => setQuantity(e.target.value)} style={{ borderColor: 'black', width: 200, height: 30 }} />
            </div>

            <div>
                <p>Operation: </p>
                <select onChange={(e) => setOperation(e.target.value)} style={{ borderColor: 'black', width: 200, height: 30 }}>
                    <option>increase</option>
                    <option>decrease</option>
                </select>
            </div>

            <button onClick={() => EditItem()} style={{ marginTop: 20, width: 210, height: 30 }}>Edit Item</button>

            
        </div>
    )
}

export default EditItem