import React from 'react';
import {connect} from 'react-redux';
//Action
import {changeFormInput} from '../../redux/ToDo/ToDoAction'
//Components
import filds from "./Filds"
import TextArea from "../elements/TexArea"
import Datapicker from "../elements/Datapicker"
import TextInput from "../elements/TexInput"
function CreateItem(props) {
    const {changeFormInput, formData, errors} = props;
     
    const onChange = e => {
        const {value, name} = e.target;
        changeFormInput(name, value)
    }
    const changeDate = e => {
        changeFormInput('date', e)
    }

    return (
        <div className='create-form'>
            <form>
                {filds.map(fild => {
                    return <div key={fild.name}>
                        {fild.form === "input"?
                            <TextInput 
                            fild={fild} 
                            onChange={onChange}
                            value={formData.title}
                            errors={errors}
                            />:
                        fild.form === "textarea"?
                            <TextArea 
                            fild={fild} 
                            onChange={onChange}
                            value={formData.description}
                            errors={errors}
                            />:
                        fild.form === "datepicker"?
                            <Datapicker 
                            fild={fild} 
                            onChange={changeDate}
                            value={formData.date}
                            errors={errors}
                            />
                            :null
                        }
                    </div>
                })}
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        formData:state.toDoList.formData,
        errors:state.toDoList.errors,
    };
};

const mapStateToAction = dispatch => {
    return {
        changeFormInput:(key, value) => dispatch(changeFormInput(key, value))
    };
};

export default connect(mapStateToProps, mapStateToAction)(CreateItem);