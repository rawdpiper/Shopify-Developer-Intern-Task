import axios from 'axios'
import React, { useState } from 'react'

const CreateShipment = ({change}) => {
    const [count, setCount] = useState(1)

    const [shipments, setShipments] = useState([])
    const [name, setName] = useState()
    const [qty, setQty] = useState()
    const [address, setAddress] = useState()
    console.log(shipments)

    const createShipment = () => {
        axios.post("https://Shopify-Developer-Intern-Task.rawdpiper.repl.co/api/create-shipment", {
            items: {
                name: name,
                quantity: qty
            },
            address: address
        })
            .then((res) => { alert("Shipment created successfully"); change("All") })
            .catch(err => alert(err.response.data))
    }
    return (
        <div>
            <div style={{ marginBottom: 30 }}>
                <p>Enter Shipping Address:</p>
                <input onChange={(e) => setAddress(e.target.value)} />
            </div>

            {Array.from(Array(count)).map((c, index) => {
                return (
                    <div style={{ marginBottom: 30 }}>
                        <div>
                            <div>Name: </div>
                            <input onChange={(e) => setName(e.target.value)} key={index} type="text" />
                        </div>
                        <div>
                            <div style={{ marginTop: 5 }}>Quantity: </div>
                            <input onChange={(e) => setQty(e.target.value)} key={index} type="text" />
                        </div>

                        <button onClick={() => setShipments((prev) => prev.concat({
                            name: name,
                            quantity: qty
                        }))}>Add</button>
                    </div>
                )
            })}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
                <button onClick={() => setCount(prev => prev + 1)} style={{ marginTop: 20, height: 30 }}>+ Add more shipments</button>
            </div>
            {
                shipments.length > 0 &&
                (
                    <>
                        <div style={{ marinTop: 30 }}>
                            <b> Goods to be shipped</b>
                        </div>

                        <ul>
                            {shipments.map(good => (
                                <li>
                                    {good.name}: {good.quantity}
                                </li>
                            ))}
                        </ul>

                    </>
                )
            }

            <button onClick={()=> createShipment()}>Submit</button>
        </div>
    )
}

export default CreateShipment