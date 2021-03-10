import React from 'react'
import "./Home.css";
import {Link} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core";
import Search from '../Search';


function Home() {
    return (
        <div>
           <div className="home__header">
               <div className="home__headerLeft">
                   <Link to="/about">About</Link>
                   <Link to="/store">Store</Link>
               </div>
           <div className="home__headerRight">
                   <Link to="/gmail">Gmail</Link>
                   <Link to="/images">Images</Link>
                   <AppsIcon />
                   <Avatar />
                
          </div>

           </div>
          
           <div className="home__body">
               <img
               src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
               alt=""
               >
               </img>
               <div className="home__inputContainer">
                   <Search/>
               </div>
           </div>
        </div>
    )
}

export default Home

     {/* Search 
                   if you add hideButtons to the search component
                   the buttons wont render. The bar is used in the search page.
                   If we refresh it does it work
                   If you hit the enter key, it still works, even without the button present
                   Display : none
                   if the hypehns class is passed it goes display none
                   */}
