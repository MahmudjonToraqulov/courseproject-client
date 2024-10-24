import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [ templates, setTemplates ] = useState([])

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const res = await axios.get('http://localhost:8080/templates')
        setTemplates(res.data)
        console.log('successful -> ', res.data);
      }
      catch (error) {
        console.log('error -> ', error); 
      }
    }
    fetchTemplate()
  }, [])

  return (
    <div style={{ padding: '20px ', background: 'wheat' }}>
      <h2> Templates </h2> <br /><br />
      <Link to={'/question-forms'} style={{ background: 'black', color: 'white', padding: '10px' }}> Create New Template + </Link>
      <br /><br /><br />
      <div className="templates" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', margin: '0 auto' }}>
        {
          templates.map((el) => {
            return <div key={el.id} style={{ background: 'white', width: '350px',   margin: '5px', padding: '10px', border: '2px solid white', borderRadius: '10px' }}>
              <div className="img-box" style={{ width: '100%', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'silver' }}> Place to Img </div>
              <br />
              <h2> title - { el.title } </h2>
              <h2> description - { el.description } </h2>
              <h2> text - {el.text} </h2>
              <span> created time - {el.createdAt} </span><br />
              <span> updated time - {el.updatedAt} </span>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Home
