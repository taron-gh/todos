import React from "react";
function Filter({setFilter}) {
    const filterHandler = (e) => {
        setFilter(e.target.id)
    }
    return (
        <>
            <div onClick={filterHandler}>
                <input id="all" name="status" type='radio' /><label for="all">All</label>
                <input id="active" name="status" type='radio' /><label for="active">Active</label>
                <input id="complete" name="status" type='radio' /><label for="complete">Complete</label>
            </div>
        </>
    )
}
export default Filter;