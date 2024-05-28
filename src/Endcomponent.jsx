import { useState } from "react"


const Endcomponent=()=>{
    const[formdata,setformdata]=useState({
        email:""
    })

    const [showedit,setShowedit]=useState(false)

    const handleChange=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
       e.preventDefault()
       if(formdata.email.trim() !== ""){
        setShowedit(!showedit)
       }else{
        alert("Email is empty")
       }
       
    }



    return(
        <>
            <div className="condainer-fluid bg-primary background p-5 text-center text-black">
                <form onSubmit={handleSubmit}>

                    <h2>Ready to get started? Sign up now! </h2><br/>
                    
                      {!showedit  && (<label htmlFor="email">Email</label>)}   
                           <input id="email" type="email" name="email" onChange={handleChange} value={formdata.email}/>
                         {!showedit && (<input type="submit" className='button p-1'/>)}  
                           {showedit && (<>
                            <h4>Form submission successful!</h4>
                           <h4>To activate this form, sign up at</h4><br/><br/>
                           <a href="https://startbootstrap.com/solution/contact-forms
" target='-block'>https://startbootstrap.com/solution/contact-forms
</a>
                           
                           </>)}
                           
                </form>

            </div>

        
        </>
    )
}

export default Endcomponent