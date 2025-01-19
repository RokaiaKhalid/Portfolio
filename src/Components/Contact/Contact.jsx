import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import Done from "../../animation/Animation - 1726771598537.json";
import ContactUs from "../../animation/Animation - 1726772380886.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("xpwagwnl");
  
 
  
  return (
    <section className='contact-us' id='contact'>
      <h1 className='title'>
        <span className='icon-envelope-o'></span>
        Contact us
      </h1>
      <p className='sub-title'>Contact aus for more information and Get notified when I publish something new</p>
      <div className="flex">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required autoComplete='off' type="email" name="email" id="email" placeholder='Email Address' />  
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message" placeholder='Your message'></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <p style={{ fontSize: "16px", marginTop: "1.7rem" }}>
              <Lottie 
                loop={false}
                style={{ height: 37 }}
                animationData={Done}
              />
              Your message has been sent successfully 👌</p>
          )}
        </form>
        <div className="right-section">
         {window.scrollY > 1500 && <Lottie className='animation'
            loop={false}
            style={{ height: 350 }}
            animationData={ContactUs}
          />}
        </div>
      </div>
    </section>
  )
}

export default Contact
