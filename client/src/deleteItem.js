import axios from 'axios'
import React, { useState } from 'react'

const DeleteItem = ({change}) => {

    const EditItem = () => {
        axios.post("https://Shopify-Developer-Intern-Task.rawdpiper.repl.co/api/delete-item", {
            name: name,
        })
            .then((res) => { alert("Item deleted successfully"); change("All") })
            .catch(err => alert(err.response.data))
    }
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    return (
        <div>
            <button onClick={() =>change("All")}>Back</button>
            <div>
                <p>Name: </p>
                <input onChange={(e) => setName(e.target.value)} style={{ borderColor: 'black', width: 200, height: 30 }} />
            </div>

            <button onClick={() => EditItem()} style={{ marginTop: 20, width: 210, height: 30 }}>Delete Item</button>

            
        </div>
    )
}

export default DeleteItem