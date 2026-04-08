
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import Form from './pages/Form'
import HookPage from './pages/HookPage'
import ScrollPage from './pages/ScrollPage'
// test
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/form' element={<Form />} />
        <Route path='/hooks' element={<HookPage />} />
        <Route path='/scroll' element={<ScrollPage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
// npm run dev - להריץ את האפליקציה
export default App
