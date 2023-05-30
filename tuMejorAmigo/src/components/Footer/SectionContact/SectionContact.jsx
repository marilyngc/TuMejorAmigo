import { Links } from "./Links"
import { Networks } from "./Networks"
import { Text } from "./Text"
import {FooterContact} from "./FooterContact"


export const SectionContact = () => {
    return(
      <div className="container justify-content-center align-items-center">
      <div className=" m-5  ">
        <FooterContact />
      </div>
      <hr />
    
      <div className="container justify-content-center align-items-center">
     
        <div className="d-flex row m-5 ">
       <Text/>
       <Links/>
       <Networks/>
       
      </div>
     
      
       
        
      </div>
  
    </div>
      
    )
}