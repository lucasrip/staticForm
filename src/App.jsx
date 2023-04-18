

function App() {
 
 const key = import.meta.env.VITE_STATICFORMKEY;
 const url = `https://api.staticforms.xyz/submit`;

  return (
    <div>
   
    <form action={url} method="post">
 
      <div>
        <label htmlFor="name">
          name
        </label>
        <input type="text" id="name" name="name"/> 
      </div>

      <div>
        <label htmlFor="email">
          email
        </label>
        <input type="text" id="email" name="email"/> 
      </div> 
      
      <div>
        <label htmlFor="phone">
          phone
        </label>
        <input type="text" id="phone" name="phone"/> 
      </div>
      
      <div>
        <label htmlFor="message">
          message
        </label>
        <textarea id="message" name="message"></textarea>    
      </div>

      <input type="submit" value="Submit"/>
      <input type="hidden" name="accessKey" value={key}/> 
      <input type="hidden" name="replyTo" value="lucashccgames@gmail.com" />
      <input type="hidden" name="subject" value="Contact us from - example.com" />
      {/* <input type="hidden" name="redirectTo" value="http://localhost:5173/"></input> */}
    </form>
    </div>
  )
}

export default App
