import React from 'react'

const List = ({ items, change }) => {
    return (
        <>
        <p style={{textAlign: 'center'}}><b>All Items</b></p>
            <ol>
                {
                    items && items.map((item, index) => (
                        <li key={index}>
                            <p style={{fontSize:"18px"}}>
                                {item.name} - {item.quantity}
                            </p>
                        </li>
                    ))
                }
            </ol>
            <div style={{display:'flex', justifyContent:'center'}}>
            <button onClick={() => change("All")}>Back</button>
            </div>
        </>
    )
}

export default List