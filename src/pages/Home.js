import Nav from '../components/Nav'
import AuthModal from '../components/AuthModal'
import {useState} from 'react'
const Home = () => {
  const [showModal, setshowModal] = useState(false)
  const [isSignUp, setIsSignUp] = useState(true)
    const authToken = false

    const handleClick = () => {
        console.log('Clicked')
        setshowModal(true)
        setIsSignUp(true)
    }
  return (
      <div className='overlay'>
      <Nav minimal={false} 
      setshowModal={setshowModal} 
      showModal={showModal}
      setIsSignUp={setIsSignUp}/>
    <div className="home">
        <h1 className='primary-title'>Swipe Right®</h1>
        <button className="primary-button" onClick={handleClick}>
            {authToken ? 'Signout' : 'Create Account'}
        </button>

        {showModal &&(<AuthModal setshowModal={setshowModal} isSignUp={isSignUp}/>)}
    </div>
    </div>
  )
}
export default Home