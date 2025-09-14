export const checkValidData = (email, password) =>{
    const isEmailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/.test(password)

    if(!isEmailvalid){
        return "Email is not valid"
    }

    if(!isPasswordValid){
        return "Password is not valid"
    }

    return null
}