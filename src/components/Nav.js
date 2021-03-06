import whitelogo from '../images/tinder_logo_white.png'
import colorlogo from '../images/color-logo-tinder.png'
const Nav = ({minimal,setshowModal,showModal,setIsSignUp}) => {
  const handleClick = () =>{
    setshowModal(true)
    setIsSignUp(false)
  }
  const authToken=true
  return (
      <nav>
    <div className="logo-container">
        <img className="logo" src={minimal ? colorlogo : whitelogo}/>
    </div>
    {!authToken && !minimal && <button 
    className='nav-button' 
    onClick={handleClick}
    disabled={showModal}
    >Log in</button>}
    </nav>
  )
}

export default Nav