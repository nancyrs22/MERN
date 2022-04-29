import React,{useState} from "react";

const UserForm = () =>
{
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirm,setConfirm] = useState("");
    const[hizoSubmit,setHizoSubmit] = useState(false);

    const createUser = (e) =>
    {
        e.preventDefault();
        const newUser = {firstName, lastName,email,password};
        console.log("Welcome",newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
        setHizoSubmit(true);
    }

    // const dataForm=()=>
    // {
    //     if(hizoSubmit)
    //     {
    //         return(
    //             <div>
    //             <p>Your Form Data</p>
    //             <p>First Name: {firstName}</p>
    //             <p>Last Name: {lastName}</p>
    //             <p>Email: {email}</p>
    //             <p>Password: {password}</p>
    //             <p>Confirm Password: {confirm}</p>
    //         </div>
    //         )

    //     }
    // }

    const mensajeNombre = () =>
    {
        if(hizoSubmit)
        {
            if(firstName.length <= 2 || lastName.length <= 2)
            {
                return "el nombre y el apellido deben tener mas de 2 caracteres.";
            }
        }
    }

    const mensajeEmail = () =>
    {
        if(hizoSubmit)
        {
            if(email.length <=5)
            {
                return "El campo email debe tener mas de 5 caracteres.";
            }
            if(password !== confirm)
            {
                return "la contraseña y la confirmacion no son iguales";
            }
        }
    }

    const mensajePassword = () =>
    {
        if(hizoSubmit)
        {
            if(password !== confirm)
            {
                return "la contraseña y la confirmacion no son iguales";
            }
        }
    }

    return(
        <div>
            <form onSubmit={createUser}>
            <div>
                <label>Fist Name: </label>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            </div>
            {mensajeNombre()}
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </div>
            {mensajeNombre()}
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            {mensajeEmail()}
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
            {mensajePassword()}
            <div>
                <label>Confirm password: </label>
                <input type="password" onChange={(e)=>setConfirm(e.target.value)} value={confirm}/>
            </div>
            {mensajePassword()}
            <input type="submit" value="Create User"></input>
            </form>
            {/* {dataForm()} */}
            
            <p>Your Form Data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
        </div>
        
    );
};

export default UserForm;