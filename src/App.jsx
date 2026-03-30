import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Students.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import OnChanged from './OnChange.jsx'
import ColorPicker from './ColorPicker/ColorPicker.jsx'
import Arrays from './Arrays.jsx'

function App() {
    // const fruits = [{id: 1,name: "apple", calories: 95},
    //             {id: 2,name: "orange", calories:45}, 
    //             {id:3,name: "banana", calories:105}, 
    //             {id:4,name: "coconut", calories:159}, 
    //             {id:5,name: "pineapple", calories:37}];

    return(
      <>
      {/* <List items={fruits} category="Fruits"/>
      <Header/>
      <Food/>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={20} isStudent={false}/>
      <Student />
      <UserGreeting isLoggedIn = {true} username ="Jacob"/>
      <Card/>
      <Button/>
      <Footer/> */}

      {/* <Button/>
      <ProfilePicture/> */}
      {/* <MyComponent/> */}
      {/* <Counter/> */}
      {/* <OnChanged/> */}
      {/* <ColorPicker/> */}
      <Arrays/>
      </>  
    );
}

export default App
