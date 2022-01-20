import React from "react";

function Search(props) {

    return (
        <div className="search" >
            <form onSubmit={props.civs}>
                <input type="text" name="civName"></input>
                <button>Search</button>
            </form>
        </div>
    )
}
export default Search;
