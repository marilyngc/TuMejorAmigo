import {Button} from "react-bootstrap"
export const NavLogin = ({textLogin}) => {
    return(
        <span
        href="./pages/login.html"
          type="button"
          className="btn fw-bolder me-4 login mb-2 mb-lg-0"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <svg>
            <rect x="0" y="0" fill="none"></rect>
          </svg>
          
         {textLogin}
        
        </span>
       
    )
}