import React, { useEffect, useReducer } from "react";

const FETCH_INIT = "FETCH_INIT";
const FETCH_START = "FETCH_START";
const FETCH_ERR = "FETCH_ERR";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, loading: true, error: null };
    case FETCH_START:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Multistate = () => {
  const [reduceState, dispatchReduceState] = useReducer(dataReducer,initialState);
  const dataHandler = async() => {
    try{
        dispatchReduceState({type : FETCH_INIT })
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        dispatchReduceState({type : FETCH_START,payload : data})
    }catch(err){
        dispatchReduceState({type : FETCH_ERR,payload : err.message})
    }
  }

  useEffect(() => {
    dataHandler()
  },[])
  return <div>
    {reduceState?.loading && <p>Loading...</p>}
    {reduceState?.data?.map((e,i)=> {
        return (
            <h2 key={i}>{e.name}</h2>
        )
    })}
    {reduceState?.err && <div>{alert(reduceState.error)}</div>}
  </div>;
};

export default Multistate;
