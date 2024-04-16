
import './App.css';
import Card from './component/card';
import Card2 from './component/card2';
import { useState } from 'react'

function App() {

  const [allData, setAllData] = useState([
    {
      id: 1,
      author: "Uhm Ki-Joon",
      firstName: "Mattew Lee",
      img: "https://asianwiki.com/images/a/a9/The_Escape_of_the_Seven-Uhm_Ki-Joon1.jpg"
    },
    
{
      id: 2,
      author: "Hwang Jung-Eum",
      firstName: "Geum La-Hui",
      img: "https://asianwiki.com/images/d/d9/The_Escape_of_the_Seven-Hwang_Jung-Eum1.jpg"
    },

    {
      id: 3,
      author: "Lee Joon",
      firstName: "Min Do-Hyuk",
      img: "https://asianwiki.com/images/4/49/The_Escape_of_the_Seven-Lee_Joon.jpg"
    },



    {
      id: 4,
      author: "Lee Yoo-Bi",
      firstName: "Han Mo-Ne",
      img: "https://asianwiki.com/images/e/e5/The_Escape_of_the_Seven-Lee_Yoo_Bi.jpg"
    },


 {
      id: 5,
      author: "Shin Eun-Kyung",
      firstName: "Cha Ju-Ran",
      img: "https://asianwiki.com/images/b/b4/The_Escape_of_the_7-Shin_Eun_Kyung.jpg"
    },

     
 {
      id: 6,
      author: "Yoon Jong-Hoon",
      firstName: "Yang Jin-Mo",
      img: "https://asianwiki.com/images/2/2c/The_Escape_of_the_Seven-Yoon_Jong-Hoon.jpg"
    },

    
 {
      id: 7,
      author: "Jo Yoon-Hee",
      firstName: "Go Myoung-Ji",
      img: "https://asianwiki.com/images/5/58/The_Escape_of_the_Seven-Jo_Yoon_Hee1.jpg"
    },

   
 {
      id: 8,
      author: "Jung Lael",
      firstName: "Bang Da-Mi	",
      img: "https://asianwiki.com/images/d/d4/The_Escape_of_the_Seven-Jung_La_El.jpg"
    },



    
  ])

  return (
    <div className="">
     
        <div>
        <Card dataz={allData}/>
        </div>  

        <div>
        <Card2 dataz={allData}/>
        </div>
    </div>
  );
}

export default App;
