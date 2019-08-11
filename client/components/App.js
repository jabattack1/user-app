// import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionCreators.js";
import Main from "./Main";

function mapStateToProps(state){
	return {
		user: state.user,
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App;