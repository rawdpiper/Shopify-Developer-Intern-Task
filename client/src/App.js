import axios from 'axios'
import React, { useCallback, useState } from 'react'
import AddItem from './addItem'
import ButtonField from './buttonComponent'
import DeleteItem from './deleteItem'
import EditItem from './editItem'
import './App.css';
import List from './listItems'
import CreateShipment from './createShipment'

const App = () => {

  const [items, setItems] = useState()
  const getItems = () => {
    axios.get("https://Shopify-Developer-Intern-Task.rawdpiper.repl.co/api/list-all-items")
      .then((res) => setItems(res.data.items))
      .catch(err => console.log(err))

  }
  const [screen, setScreen] = useState("All")
  console.log(screen)

  const changeScreen = useCallback((newScreen) => {
    setScreen(newScreen)
  }, [])
  return (

    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {
        screen === "All" ?

          (
            <div>
              <div><button className='btn' onClick={() => setScreen("Add")}>Add Item</button></div>
              <div><button className='btn' onClick={() => setScreen("Edit")}>Edit Item</button></div>
              <div><button className='btn' onClick={() => setScreen("Delete")}>Delete Item</button></div>
              <div><button className='btn' onClick={() => {getItems(); setScreen("List")}}>List all Item</button></div>
              <div><button className='btn' onClick={() => setScreen("Create Shipping")}>Create Shipment</button></div>
            </div>
          ) :
          screen === "Add" ?
            (
              <div>
                <AddItem change={changeScreen} />
              </div>
            ) :
            screen === "Edit" ?
              (
                <div>
                  <EditItem change={changeScreen} />
                </div>
              ) :
              screen === "Delete" ?
                (
                  <div>
                    <DeleteItem change={changeScreen} />
                  </div>
                ) :
                screen === "Create Shipping" ?
                  (
                    <div>
                      <CreateShipment change={changeScreen} />
                    </div>
                  ) :
                  screen === "List" &&
                  (
                    <div>
                      <List change={changeScreen} items= {items}/>
                    </div>
                  )
      }
    </div>

  )
}

export default App