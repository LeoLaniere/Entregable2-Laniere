import {object, string, mixed} from "yup"

let userSchema = object( {
    fullname: string().required("El campo Nombre es requerido"),
    phone: mixed().required("El campo Telefono es requerido"),
    email: string().email().required("El campo Email es requerido")
})

const validateForm = async(dataForm) =>{
    
    try{
        await userSchema.validate(dataForm)
        return {status: "success"}
    }catch(error){
        console.log(error)
        return { status: "error", message: error.message }
    }

}

export default validateForm