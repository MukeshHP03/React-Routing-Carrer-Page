import { NavLink, Outlet } from "react-router-dom"


const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Architecto cupiditate iste, dolore porro vero accusantium voluptates adipisci 
         non natus doloremque!
        </p>
        <nav>
            <NavLink to='faq'>View to FAQ</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

export default HelpLayout
