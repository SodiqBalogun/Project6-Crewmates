 import { supabase } from "../client.js";

const RunThis = () => {
    const createThis = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Testing')
          .insert({title: "this", author: "is", description: "Just a test.", mogusCount: "700"})
          .select();
      
        window.location = "/";
    }

    const createNew = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Testing')
          .insert({title: "BRUH", author: "SODIQ", description: "TEST2", mogusCount: 2900})
          .select();
      
        window.location = "/";
    }
    
    return (
        <div className="RunThis">
            <h1> This is Run This </h1>  
            <button onClick={createThis}> CHANGE 1 </button> 
            <button onClick={createNew}> CHANGE 2 </button>
        </div>
    )
}

export default RunThis;


