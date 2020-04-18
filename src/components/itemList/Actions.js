import React, {useEffect} from "react";
import {connect} from "react-redux";

function Actions(props) {
    const {item} = props
    
    const delateItem = () => {

    }

    const changeStatus = () => {
      
    }
   

    return (
      <>
        <button 
          onClick={delateItem} 
          type="button" 
          className="btn btn-outline-danger">
            delete
        </button>
        <hr />
        <button 
          onClick={changeStatus} 
          type="button" 
          className="btn btn-primary">
            Make as done
        </button>
      </>
    );
}

const mapStateToProps = state => {
    return {
    };
};

const mapStateToAction = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapStateToAction)(Actions);