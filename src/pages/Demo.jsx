import { useEffect } from "react"

function Demo() {
  
  const getData = async () => {
    let data = await fetch("https://localhost:7097/api/Momos")
    data = await data.json()
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      Demo
    </div>
  )
}

export default Demo
