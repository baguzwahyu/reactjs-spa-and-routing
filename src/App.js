import React, { Component } from 'react'
import { BrowserRouter,Routes,Route,Link,useParams } from 'react-router-dom'

function Home(){
  return <h2>Halaman Home</h2>
}

function ListView(){
  return (
    <div>
      <h2>Semua User</h2>
      <ul>
        <Link to='/user/bagus'> Bagus </Link>
        <br/>
        <Link to='/user/wahyu'> Wahyu </Link>
      </ul>
    </div>
  )
}

function DetailView(){
  let { name } = useParams()
  return <h2>ini halaman {name}</h2>
}

function NoMatch(){
  return <h2>404, halaman tidak ditemukan</h2>
}

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/users'> User </Link> </li>
          </nav>
          <main> 
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/users' element={<ListView/>} />
            <Route path='/user/:name' element={<DetailView/>} />
            <Route path='*' element={<NoMatch/>} />
          </Routes>  
          </main>
        </div>
      </BrowserRouter>
    )
  }
}
