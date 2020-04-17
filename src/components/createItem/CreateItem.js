import React from 'react';
import {connect} from 'react-redux';
//Components
import Modal from './Modal'

function CreateItem(props) {
    const {open} = props

    return (
        <div className='list'>
            {open && 
              <Modal open={open} />
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        open:state.createItem.open
    };
};

const mapStateToAction = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapStateToAction)(CreateItem);