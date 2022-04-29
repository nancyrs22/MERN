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

    return(
        <div>
            <form onSubmit={createUser}>
            <div>
                <label>Fist Name: </label>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
            <div>
                <label>Confirm password: </label>
                <input type="password" onChange={(e)=>setConfirm(e.target.value)} value={confirm}/>
            </div>
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