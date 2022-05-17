import React from 'react'

function ButtonField({ title, setScreen }) {
    return (
        <div>
            <button
            onClick={setScreen("Add")}
                // onClick={
                //     title === "Add Item" ? () =>setScreen("Add") :
                //     title === "Edit Item" ? setScreen("Edit") :
                //     title === "Delete Item" ? setScreen("Delete") :
                //     title === "Create Shipment" && setScreen("Create Shipping") 
                // }
                style={{ width: 200, height: 50, marginBottom: 20 }}
            >
                {title}
            </button>
        </div>
    )
}

export default ButtonField