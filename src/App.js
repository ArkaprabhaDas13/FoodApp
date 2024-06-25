import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import Body from './Components/Body'




const AppLayout = ()=>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const heading = React.createElement("h1", {id:"heading"}, "Namaste React");

const root = ReactDOM.createRoot(document.getElementById('root'));          // create a Root to render in the index.html

root.render(<AppLayout/>)