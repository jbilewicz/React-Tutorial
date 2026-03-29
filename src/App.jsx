import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Students.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {
    return(
      <>
      <Header/>
      <Food/>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={20} isStudent={false}/>
      <Student />
      <UserGreeting isLoggedIn = {true} username ="Jacob"/>
      <Card/>
      <Button/>
      <Footer/>
      </>  
    );
}

export default App
