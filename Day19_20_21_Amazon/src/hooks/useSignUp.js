const useSignUp = () =>{



    const signUp= async({name, email, password}) =>{
        console.log("signup called");
        const URL  = 'http://localhost:1400/api/v1/auth/signup';
        const OPTIONS = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email, password}) 
            }
        const res = await fetch(URL, OPTIONS);

        console.log(res);
        
    }

    return {signUp}
}

export default useSignUp;