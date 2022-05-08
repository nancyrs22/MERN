
import React, { useState } from 'react';
import './App.css';
import PersonaCard from './componentes/PersonaCard/PersonaCard';
// import React from 'react';
import UserForm from './componentes/Formulario/Formulario';
import reducer from './componentes/ReducerForm/ReducerForm';
import ReducerForm from './componentes/ReducerForm/ReducerForm';
import Groceries from './componentes/Map/Map';
import MessageForm from './componentes/MessageForm/MessageForm';
import MessageDisplay from './componentes/MessageDisplay/MessageDisplay';
import MyComponent from './componentes/MyComponent/MyComponent';


// class App extends React.Component {
//   render()
//   {
//     
//     return(
//       <div className="App">
//         {/* <PersonaCard firstName="Jane" lastName = "Doe" age={45} hairColor={"Black"}/>
//         <PersonaCard firstName="John" lastName = "Smith" age={88} hairColor={"Brown"}/>
//         <PersonaCard firstName="Millard" lastName = "Fillmore" age={50} hairColor={"Brown"}/>
//         <PersonaCard firstName="Maria" lastName = "Smith" age={62} hairColor={"Brown"}/> */}
//         <UserForm></UserForm>
//         <Groceries></Groceries>
//       </div>
//     );
//   }
// }

function App() {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");

    const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
  }
  
  return (
      <>
          <MessageForm onNewMessage={ youveGotMail } />
          <MessageDisplay message={ currentMsg } />

          <MyComponent></MyComponent>
      </>
  );
}
export default App;
