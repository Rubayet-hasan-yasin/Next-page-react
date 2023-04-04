import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './conponents/Home/Home';
import About from './conponents/About/About';
import Books from './conponents/Books/Books';
import BookDetailsCard from './conponents/bookDetailsCard/BookDetailsCard';
import Error from './conponents/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'books',
        element: <Books />,
        loader: ()=> fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:id',
        element: <BookDetailsCard />,
        loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
        

      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
