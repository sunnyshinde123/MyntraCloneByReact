import { useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeItem from './HomeItem'
import {Outlet} from "react-router-dom"
import FetchDataFromServer from '../components/FetchDataFromServer'
import Spinner from '../components/Spinner'
import {useSelector} from "react-redux"

function App() {
  let fetchStatus = useSelector((store) => store.fetchServerData);

  return (
    <>
      <Header></Header>
      <FetchDataFromServer></FetchDataFromServer>
      {fetchStatus.markFetchDone ? <Spinner/> : <Outlet/>}
      <Footer></Footer>
    </>
  )
}

export default App
