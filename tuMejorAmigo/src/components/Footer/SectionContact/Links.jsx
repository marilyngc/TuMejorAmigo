import { ListLinks } from "./ListLinks"


export const Links = () => {

    return(
        <div className="col-xs-12 col-lg-4 ps-lg-5 mt-lg-0 mt-2 ">
        <h5 className="fw-bold mb-4 position-relative footerLinks">
          Enlaces útiles
        </h5>

        <div className="d-flex col">
          <ListLinks/>
         
        </div>
      </div>
    )
}