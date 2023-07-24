import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Projects from './Components/Projects/Projects';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Forgotpassword from './Components/Forgotpassword/Forgotpassword';
import Inbox from './Components/Inbox/Inbox';
import Todolist from './Components/To-do-list/Todolist';
import UserProvider from './Useprovider';
import Team from './Components/Team/Team';
import Task from './Components/Task/Task';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
   <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/register' element={<Registration/>}></Route>
        <Route exact path='/forgotpassword' element={<Forgotpassword/>}></Route>
        <Route exact path='/Dashboard' element={<Dashboard/>}></Route>
        <Route exact path='/projects' element={<Projects/>}></Route>
        <Route exact path='/inbox' element={<Inbox/>}></Route>
        <Route exact path='/to-do-list' element={<Todolist/>}></Route>
        <Route exact path='/team' element={<Team/>}></Route>
        <Route exact path='/task' element={<Task/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
        
      </Routes>
     </BrowserRouter>
     </UserProvider>
  );
}

export default App;
