

import { ListNetworks } from "./ListNetworks";
export  const Networks = () => {

    return(
        <div className="col-xs-12 col-lg-4 ps-lg-5 mt-lg-0 mt-2">
        <h5 className="fw-bold mb-4 position-relative footerLinks">
          Nuestras Redes
        </h5>
        <div className="container__icons col-xs-12 col-md-6 col-lg-3 w-auto">
            <ListNetworks />
         
        </div>
      </div>
    )
}