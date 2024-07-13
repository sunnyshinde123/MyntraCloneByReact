import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BagItem from './routes/BagItem.jsx'
import HomeItem from './routes/HomeItem.jsx'
import {Provider} from 'react-redux'
import store from './store/index.js';

// import './index.css'

const router=createBrowserRouter([
  {
    path:"/", element:<App/>, children:[
      {path:"/", element:<HomeItem/> /*, loader:getData*/},
      {path:"/Bag", element:<BagItem/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>

</RouterProvider>
    </Provider>
  </React.StrictMode>,
)
