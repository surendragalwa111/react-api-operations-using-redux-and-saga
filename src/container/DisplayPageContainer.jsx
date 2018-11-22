import React from 'react';
import {connect} from 'react-redux';
import DisplayComponent from '../components/DisplayComponent';
import { fetchItem } from '../actions/addEdit';

const DisplayPageContainer=(props)=>{
    
        console.log("we've reached inside DisplayPageConatiner");
        return(<div>
                <button onClick={()=>props.dispatch(fetchItem())}>Fetch API</button>
                 
                { props.isLoading ?
                <p>Loading...</p>:
                <DisplayComponent items={props.items} /> }
        </div>);
}

const mapStateToProps=(state)=>{
        return {
                items:state.items.data,
                isLoading:state.isLoading,
                error:state.error
        };
}

export default connect(mapStateToProps)(DisplayPageContainer);

//set isLoading false in reducer to load initial state
//initial state will be empty
//after fetching data,we'll set that data to state and will set isLoading:false
//so that we can see that loaded data in DisplayComponent