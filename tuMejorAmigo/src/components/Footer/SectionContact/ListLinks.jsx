
import { Links } from '../Data';
export const ListLinks = () => {

  const list = Links.map((link)  => (
    <ul className="list-unstyled me-5 me-lg-auto" key={link.id}>
    
      {link.link.map((element) => (
        <li className="pb-2" key={element}>
          <a className="text-decoration-none opacity-75" href="">
            {element}
          </a>
        </li>
      ))}
    </ul>
   
     ))
    return(
      <>
       
          {list}
     
     
      </>
    )
}