
import { Networks } from "../Data";
export const ListNetworks = () => {

  const Network = Networks.map((icon) => (
    <li key={icon.id}  className="m-2">
    <a
      className="rounded-5 btn btn-outline-info"
      href="#"
      target="_blank"
    >
  {icon.icon}
    
    </a>
  </li>
  ))

    return(

        <ul className="navbar-nav flex-row justify-contend-between">
            {Network}
        
      </ul>
    )
}