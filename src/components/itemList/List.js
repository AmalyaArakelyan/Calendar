import React from 'react';
import {connect} from 'react-redux';
//Components

function List() {

  return (
    <div className='list'>
    </div>
  );
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(mapStateToProps)(List);