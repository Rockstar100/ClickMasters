import { useState} from 'react';
import { supabase } from '../../../utils/supabaseClient';
import { set } from 'mongoose';

export default function Auth(){
    const [loading , setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: '',
    //         password: '',
    //         error: false,
    //         message: ''
    //     }
    // }
    const handleLogin = async () => {
       
       try{
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email: 'example@email.com',
            password: 'example-password',
          })
          console.log(data,error) 


       }
         catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(true)
         }
        
    }
   
        // const { email, password, error, message } = this.state;
        return (
            <div>
                <h1>Auth</h1>
                <form method='POST' action="">
                    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={handleLogin}>Login</button>
                </form>

                {/* {error && <p>{message}</p>} */}
            </div>
        )
    

}