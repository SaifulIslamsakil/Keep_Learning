import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Route/Route'
import Provider from './Provider/Provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const qurayClint = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' max-w-7xl mx-auto bg-green-50'>
      <Provider>
        <QueryClientProvider client={qurayClint}>
          <RouterProvider router={Router}></RouterProvider>
        </QueryClientProvider>
      </Provider>
    </div>
  </React.StrictMode>,
)
