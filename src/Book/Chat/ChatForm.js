import React, { useState } from "react";
import Navbar from "../../Home/HomeComponents/Navbar";


// const ChatForm = (props) => {
  
//   return (
//     <div>
//       <Navbar />
//       <div style={{ margin: "30px" }}>
        
//         ChatForm
//       </div>
//     </div>
//   );
// };

// export default ChatForm;

const  ChatForm = ({onSendButton}) => {
  const [content, setContent] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      //alert(`Submitting Content ${content}`)
      onSendButton(content)
      setContent("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Content:
        <input
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ChatForm;