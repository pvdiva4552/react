import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './components/Header'
import {Body} from './components/Body'
import {RestaurantCard} from './components/RestaurantCard'


const App=()=>{

    
    return(
        <div className="app">
            <Header />
            <Body />
            <RestaurantCard />
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

