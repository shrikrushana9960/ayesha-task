import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import NavScrollExample from './components/NavbarTop';
import { TopHeader } from './components/TopHeader';
import { TopTabs } from './components/TopTabs';
import PostItem from './components/PostItem';

const data={
  img:"https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg",
  type:"✍️ Article",
  title:"What if famous brands had regular fonts? Meet RegulaBrands!",
  desc:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
  user:{
    name:"Sarthak Kamra",
    img:"https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_1280.jpg"
  },
  view:"1.4k"

}

function App() {
  return (
   <div>
    <NavScrollExample/>
    <TopHeader/>
    <div style={{padding:"50px 100px"}}>
    <TopTabs/>
    <PostItem data={data}/>
    </div>
   </div>
  );
}

export default App;
