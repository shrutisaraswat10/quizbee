import '../styles/App.css';
import Menu from './Menu'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../styles/Main.css'
import Main from './Main';
import GoQuiz from './GoQuiz';
import Result from './Result';
import Questions from './Questions';
import SignUp from './SignUp'
import Login from './Login'


const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path : '/signUp',
    element : <SignUp></SignUp>
  },
  {
    path : '/menu',
    element :<Menu></Menu>
  },
  {
    path : '/goquiz',
    element :<GoQuiz></GoQuiz>
  },
  {
    path : '/question',
    element :<Questions></Questions>
  },
  {
    path : '/result',
    element :<Result ></Result>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;