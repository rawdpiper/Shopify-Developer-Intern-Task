import axios from 'axios'
import React, { useState } from 'react'

const AddItem = ({change}) => {

    const addItem = () => {
        axios.post("https://Shopify-Developer-Intern-Task.rawdpiper.repl.co/api/create-item", {
            name: name,
            quantity: quantity
        })
            .then((res) => {alert("Item added successfully"); change("All")})
            .catch(err => alert(err.response.data))
    }
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    return (
        <div>
            <div>
            <button onClick={() =>change("All")}>Back</button>
                <p>Name: </p>
                <input onChange={(e) => setName(e.target.value)} style={{borderColor: 'black', width: 200, height: 30}}/>
            </div>

            <div>
                <p>Quantity: </p>
                <input onChange={(e) => setQuantity(e.target.value)} style={{borderColor: 'black', width: 200, height: 30}} />
            </div>

            <button onClick={() =>addItem()} style={{marginTop: 20, width: 210, height: 30}}>Add Item</button>

            
        </div>
    )
}

export default AddItem