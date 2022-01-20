import React from "react";

function Search(props) {

    return (
        <div className="search" >
            <form>
                <input type="text" name="civName"></input>
                <button>Search</button>
            </form>
        </div>
    )
}
export default Search;

{/* <form onSubmit={props.civs}> */}
