import React , {useEffect, useState}from 'react'
import Navbar from './components/Navbar'
import axios from 'axios';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Saved from './components/Saved';

const App = () => {
  const API_KEY="zot1rnOe278QRj6sdLuF41NhuifnRwfEUaJ64OsauUsdPWlL9H4GsrJZ";
  const [images,setImages] = useState([]);
  const [search,setSearch] = useState("nature");
  const [loader,setLoader] = useState(true);
  const [saved,setSaved] = useState([]);

 useEffect(()=>{
  const fetchImage = async () => {
    const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,{
      headers:{
        Authorization:API_KEY
      }
    })
    setImages(res.data.photos)
    setLoader(false);
    // console.log(images);
  }

  fetchImage();
  const data = JSON.parse(localStorage.getItem("images"))
  if(data){
    setSaved(data)
  }

 },  [search])

 useEffect(()=> {
  if(saved.length !=0){
    const json = JSON.stringify(saved);
    localStorage.setItem("images",json);
  }
 },[saved])
 
  return (
   <>
 <BrowserRouter>
 <Navbar setSearch={setSearch}/>
 <Routes>
 
  <Route path='/' element={<Home images={images} loader={loader} saved={saved} setSaved={setSaved}/>} />
  <Route path='/saved' element={<Saved saved={saved} loader={loader}/>}/>
 </Routes>
 </BrowserRouter>
   </>
  )
}

export default App
