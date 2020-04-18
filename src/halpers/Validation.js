export const Validation = {

  title : (value) => {
    if(value){
      if(value.length < 5){
         return {
          type:'min',
          message:'Minimum 5 characters required'
        }
      }else{
        return
      }
    }else{
      return {
        type:'required',
        message:'Title is required'
      }
    }

  },
  
  description : (value) => {
    if(value){
      if(value.length < 15){
         return {
          type:'min',
          message:'Minimum 15 characters required'
        }
      }else{
        return
      }
    }else{
      return {
        type:'required',
        message:'Description is required'
      }
    }
  }

}
export const  checkAll = (data, filds) => {
  let errors = null;
  Object.values(filds).map(fild => {
    const error = Validation[fild.name] && Validation[fild.name](data[fild.name])
    if(error){
      (!errors) && (errors = {});
      errors[fild.name] = error
    }
    return error;
  })
  return errors;
}
