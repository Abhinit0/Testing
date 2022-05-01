//import { Table } from "jspdf";
import React from "react";
import Export from "./export"
import Tablex from "./Table";
import axios from 'axios'
import styles from "./search.css"
const useStyles = {
    inputClass:{
        marginTop:"1vh",
        marginBottom:"1vh"
    },

}
const SearchBar = () => {
    const [searchQuery,setSearchQuery] =React.useState("")
    const [data,setData] =React.useState([])
  
       const searchBarHandle = (e) =>{
           console.log("Search",e.target.value,e)

           setSearchQuery(e.target.value)
       }
    const searchDataHandler = () => {
        axios.get('/temp/snb', {
            params: {
                searchText: searchQuery
            }
        })

            .then(function (response) {
                console.log(response);
                 setData(response.data)

            })
            .catch(function (error) {
                console.log("axios error", error)
            });

    }
    //const classes =useStyles
    return (


        <>
            <div>
                <div>
                <center>
                    
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search Data"
                        onChange={(e)=>searchBarHandle(e)}
                         style={{marginTop:"5vh",marginBottom:"5vh" }}
                      className={styles.inputClass}
                  
                    />
                  
                    <button className={styles.searchButton} onClick={() => { searchQuery.length>=2 && searchDataHandler() }}>Search</button>

                    </center>
                </div>
                <Export data={data}/>
            </div>

            <div>
                <Tablex data={data}/>
            </div>
        </>
    )
};
//  };
export default SearchBar