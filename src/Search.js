import React, { useState } from 'react'
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Search({ hideButtons = false }) {

    const [input, setInput] = useState ("");
    const history = useHistory();


    const search = (e) => {
        e.preventDefault();

    console.log('You hit the search button >> ', input)

    // dispatch({
    //     type: actionTypes.SET_SEARCH_TERM,
    //     term: input 
    //     // NO STRING MISTAKES
    //     // Dispacthes an action
    //     // User goes to search page and it also
    //     // goes into the data layer
    //     // inside the searh component we can pull the search term
    //     // 
    // })

    history.push('/search')
};

return (
        <form className='search'>
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} 
                onChange={e => setInput(e.target.value)} 
                />
                <MicIcon />
            </div>

            {!hideButtons ? (
             <div className="search__buttons">
             <Button type="submit"
              onClick={search} 
              variant="outlined">Google Search</Button>
             <Button variant="outlined">Im Feeling Lucky</Button>
         </div>   
            ): (
                // Ternary operator the buttons at the bottom
                // The button is hidden in a very clever way
                // 
                <div className="search__buttons">
                <Button 
                 type="submit"
                 className="search__buttonsHidden"
                 onClick={search} 
                 variant="outlined">Google Search
                 </Button>
                <Button 
                variant="outlined"
                className="search__buttonsHidden">Im Feeling Lucky
              </Button>
            </div> 
            )}
        </form>
)};

export default Search;

        //  
        //      You want the entire input to act as a form. 
        //     all we did is to change the outer div to a form and
        //     changed the button that we want to trigger on the enter key 
        //     to type submit.
        //    This is a simple trick: all the children elements are part of 
        //    the form and chanhge the button type of the thing you want to submit.
        //    button type submit means that when you are in any element in that form
        //    when you hit the enter key it will submit this button which triggers the onclick.
          // Doing something with input 
    // Preventing the refresh
    // The search function 
    // useHistory is a react hook provides us with browsers history
    // When you hit the search button it says push this to the search page
    // We want to now push the search page into the data layer
    // The data layer in this case is the react hook api
    // It doesnt matter where you are in the app
    // 
    // 
    // 
