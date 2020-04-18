import React from 'react';
import {connect} from 'react-redux';
//Action
import {changeFormInput} from '../../redux/ToDo/ToDoAction'
//Components
import filds from "./Filds"
import TextArea from "../FormElements/TexArea"
import Datapicker from "../FormElements/Datapicker"
import TextInput from "../FormElements/TexInput"
function CreateItem(props) {
    const {changeFormInput, formData, errors} = props;
     
    const onChange = e => {
        const {value, name} = e.target;
        changeFormInput(name, value)
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
                            onChange={onChange}
                            value={formData.title}
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