import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/main"
import SideBar from "./components/SideBar"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const today = new Date().toISOString().slice(0,10)
      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}` + `&api_key=${NASA_KEY}`

      
      const localKey = `NASA-${today}`
      /*
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log(data)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()
      */

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
        console.log('DATA\n', apiData)
      } catch (err) {
        console.log(err.message)
      }
    }

    fetchAPIData()
  }, [])
  return (
    <>
      {data ? (<Main data={data}/>): (
        <div className="loadingState">
          <i className="fa-solid fa-gears"></i>
        </div>
      )}
      {showModal && (<SideBar data={data} handleToggleModal={handleToggleModal} />)}
      {data && (
        <Footer data={data} handleToggleModal={handleToggleModal} />
      )}

      
    </>
  )
}

export default App
