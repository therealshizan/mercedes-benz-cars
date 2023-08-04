import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
import SearchBox from './Components/SearchBox'

const App = () => {

  return (
    <div className='main-app'>
      <Header/>
      <SearchBox/>
      <Main/>
    </div>
  )
}

export default App
