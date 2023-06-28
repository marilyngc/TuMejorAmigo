import useMobile from "../../hooks/useMobile"

export const Inicio = () => {
const isMobile =  useMobile()
    return  (
        <main>
        <section
          id="section1"
          class="w-auto d-flex row justify-content-center"
        >
            <h2>inicio</h2>
            <hr />
            {
              isMobile 
              ? <h3>Estamos en mobile</h3>
              : <h3>Estamos en desk</h3>
            }
           {/* Background IMG */}
       {/*    <div class="position-relative-make"></div> */}
          {/* <div class="row align-items-center position">
            <h1
              class="text-opacity-50 col-12 animate__animated animate__shakeX font-h1"
            >
              ¿Necesitás dejar a tu mascota con alguien de confianza?
            </h1>
            <p class="fw-bolder fs-4 opacity-75">
              Una persona de nuestro equipo la cuida con mucho amor y
              responsabilidad.
            </p>
          </div>
          <div
            class="container-sm d-flex flex-wrap justify-content-center align-items-center text-light box-info"
          >
            <h2 class="fs-5">¿Que tipo de servicio necesitás para tu mascota?</h2>
            <div
              class="btn-toolbar w-100 d-flex flex-wrap justify-content-center"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group" role="group" aria-label="First group">
                <button
                  type="button"
                  class="btn btn-outline-white icon-link icon-link-hover rounded-4 btn-service"
                  style="--bs-icon-link-transform: translate3d(0, -0.125rem, 0)"
                  href="#"
                >
                  <i class="bi bi-hand-thumbs-up mb-2 me-2"
                    ><use xlink:href="#box-seam"></use
                  ></i>
  
                  Hospedaje
                </button>
              </div>
              <div class="btn-group" role="group" aria-label="Second group">
                <button
                  type="button"
                  class="btn btn-outline-white icon-link icon-link-hover rounded-4 btn-service"
                  style="--bs-icon-link-transform: translate3d(0, -0.125rem, 0)"
                  href="#"
                >
                  <i class="bi bi-clock mb-2 me-2"
                    ><use xlink:href="#box-seam"></use
                  ></i>
  
                  Guardería
                </button>
              </div>
              <div class="btn-group" role="group" aria-label="Second group">
                <button
                  type="button"
                  class="d-flex flex-wrap btn btn-outline-white icon-link icon-link-hover rounded-4 btn-service"
                  style="--bs-icon-link-transform: translate3d(0, -0.125rem, 0)"
                  href="#"
                >
                  <i class="bi bi-door-open mb-2 me-2"
                    ><use xlink:href="#box-seam"></use
                  ></i>
  
                  Niñer@ para mascotas
                </button>
              </div>
              <div class="btn-group" role="group" aria-label="Second group">
                <button
                  type="button"
                  class="btn btn-outline-white icon-link icon-link-hover rounded-4 btn-service"
                  style="--bs-icon-link-transform: translate3d(0, -0.125rem, 0)"
                  href="#"
                >
                  <i class="bi bi-tree mb-2 me-2"
                    ><use xlink:href="#box-seam"></use
                  ></i>
  
                  Paseos
                </button>
              </div>
            </div>
            <div
              class="d-flex justify-content-between align-items-center rounded-4 bg-light text-dark mb-1 mt-5 w-100 p-3"
            >
              <p class="mt-3 mx-3 fw-bolder border-bottom border-warning">
                Un miembro de nuestro equipo la cuida por el tiempo que necesites.
              </p>
              <button type="button" class="btn-lg btn-send">Conocer más</button>
            </div>
          </div> */}
        </section>
  
        {/* <section id="section2 ">
          <div
            class="container d-flex flex-column justify-content-center align-items-center"
          >
            <h3 class="fw-bold font-uppercase">¿Cómo funciona?</h3>
            <div class="w-75 my-5 d-none d-sm-block">
              <div class="position-relative m-4">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Progress"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 6px"
                >
                  <div
                    class="progress-bar bg-warning opacity-25"
                    style="width: 100%"
                  ></div>
                </div>
                <button
                  type="button"
                  class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-warning rounded-pill fw-bold numbersProgress"
                  style="width: 3rem; height: 3rem"
                >
                  1
                </button>
                <button
                  type="button"
                  class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-warning rounded-pill fw-bold numbersProgress"
                  style="width: 3rem; height: 3rem"
                >
                  2
                </button>
                <button
                  type="button"
                  class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-warning rounded-pill fw-bold numbersProgress"
                  style="width: 3rem; height: 3rem"
                >
                  3
                </button>
              </div>
            </div>
  
            <div
              class="d-flex flex-wrap align-items-center justify-content-between w-100"
            >
              <div
                class="card cardInfo text-center mb-3 mb-xs-1 mx-2 mx-xs-1"
                style="width: 25rem"
              >
                <div class="card-body">
                  <h5 class="card-title fw-bold">Completar el formulario</h5>
                  <p class="card-text">
                    Elegí el tipo de servicio que necesitás, la fecha en la que
                    querés reservar y completá con la información de tu mascota.
                  </p>
                </div>
              </div>
              <div
                class="card cardInfo text-center mb-3 mb-xs-1 mx-2 mx-xs-1"
                style="width: 25rem"
              >
                <div class="card-body">
                  <h5 class="card-title fw-bold">Esperar confirmación</h5>
                  <p class="card-text">
                    Te contactamos para brindarte toda la información sobre el
                    cuidado y el prestador de nuestro equipo elegido.
                  </p>
                </div>
              </div>
              <div
                class="card cardInfo text-center mb-3 mb-xs-1 mx-2 mx-xs-1"
                style="width: 25rem"
              >
                <div class="card-body">
                  <h5 class="card-title fw-bold">Disfrutar el servicio</h5>
                  <p class="card-text">
                    Pagá para confirmar la reserva y disfrutá de tus actividades
                    con la tranquilidad de que tu mascota está bien cuidad
                  </p>
                </div>
              </div>
            </div>
            <div class="d-grid gap-2 col-3 mx-auto mx-sm-auto my-5">
              <button type="button" class="btn-lg btn-send py-3">Reservar</button>
            </div>
          </div>
        </section> */}
  
        {/* <section id="section3" class="container-fluid">
          <img
            src="./img/section3/dog.png"
            class="img-fluidd imgSticker d-none d-sm-block"
            alt=""
          />
          <div
            class="d-flex flex-column justify-content-center align-items-center py-5"
          >
            <div
              class="col-md-8 col-12 d-flex flex-column justify-content-center align-items-center text-white"
            >
              <h5 class="fw-normal opacity-75 my-4 text-uppercase">Seguridad</h5>
              <h2 class="fw-bold mb-4">¿Por qué Tu Mejor Amigo?</h2>
              <h4 class="mb-4">
                El bienestar de tu mascota es nuestra prioridad.
              </h4>
            </div>
            <div class="container row row-cols-1 row-cols-md-2 g-4 m-3">
              <div class="col">
                <div
                  class="card cardInfo text-white mb-1 mb-lg-5 me-lg-5"
                  style="max-width: 700px"
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="./img/section3/prestador.png"
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body mt-5">
                        <h5 class="card-title fw-bold">Prestadores validados</h5>
                        <p class="card-text">
                          Todos nuestros prestadores son validados cuidadosamente.
                          Por eso sabemos cual es la mejor opción para vos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="card cardInfo text-white mb-1 mb-lg-5 me-lg-5"
                  style="max-width: 700px"
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="./img/section3/encuentro.png"
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body mt-5">
                        <h5 class="card-title fw-bold">Encuentro previo</h5>
                        <p class="card-text">
                          Podés conocer previamente a la persona que se asignó
                          para el servicio que elegiste. Puede ser de manera
                          presencial o virtual.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="card cardInfo text-white mb-1 mb-lg-5 me-lg-5"
                  style="max-width: 700px"
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="./img/section3/contacto.png"
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body mt-5">
                        <h5 class="card-title fw-bold">Estar en contacto</h5>
                        <p class="card-text">
                          Durante el cuidado, vas a poder comunicarte con quién
                          acompañe a tu mascota. Te enviará fotos y videos de ella
                          para no extrañarla.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  class="card cardInfo text-white mb-1 mb-lg-5 me-lg-5"
                  style="max-width: 700px"
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="./img/section3/cobertura.png"
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body mt-5">
                        <h5 class="card-title fw-bold">Cobertura premium</h5>
                        <p class="card-text">
                          Todas las reservas incluyen un seguro que cubre gastos
                          veterinarios y responsabilidad civil.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="section4"
          class="d-flex flex-wrap align-items-center justify-content-center"
        ><div class="text-center col-12 mt-5 pt-5">
         <h5 class="opacity-75 text-uppercase" >Testimonios</h5>
         <h2 class="fw-bold">Qué dicen de nosotros</h2>
        </div>
  
              <div class="card cardDog ">
            <div class="cover">
              <img class="" src="./img/woman.png" alt=""/>
      
            
              <div class="img-back"></div>
            </div>
            <div class="card-body text-center border border-top-0 shadow p-4 p-lg-3 mb-lg-5   bg-body-tertiary rounded">
              <h5>Belu</h5>
              <p class="opacity-50">Buenos Aires | Argentina</p>
              <p class="fs-6">
                Estoy muy contenta de haberlos encontrado, me salvaron de dejar a mi perro en una guardería y ahora puedo estar tranquila de que lo van a estar cuidando igual que yo
              </p>
  
            </div>
          </div>
          <div class="card cardDog ">
            <div class="cover">
              <img class="" src="./img/old-man.png" alt=""/>
              
              <div class="img-back"></div>
            </div>
            <div class="card-body text-center border border-top-0 shadow p-4 p-lg-3 mb-lg-5  bg-body-tertiary rounded">
              <h5>Fede</h5>
              <p class="opacity-50">Buenos Aires | Argentina</p>
              <p class="fs-6">
                Realmente no puedo creer que no sabía que esto existía, me solucionaron las vacaciones, ahora puedo irme tranquilo sabiendo que roco está en buenas manos.
              </p>
  
            </div>
          </div>
          <div class="card cardDog ">
            <div class="cover">
              <img src="./img/woman2.png" alt=""/>
             
            
              <div class="img-back"></div>
            </div>
            <div class="card-body text-center border border-top-0 shadow p-4 p-lg-3 mb-lg-5 mb-5 bg-body-tertiary rounded">
              <h5>Luli</h5>
              <p class="opacity-50">Buenos Aires | Argentina</p>
              <p class="fs-6">
                Salió todo genial! La cuidadora me mando miles de fotos y cuidó de milo como si fuera su madre, igual que yo! Muchas gracias! Los voy a recomendar!
              </p>
  
            </div>
          </div>
          <div class="card cardDog">
            <div class="cover">
              <img src="../img/news/8602082.png" alt="" />
              <div class="img-back"></div>
            </div>
            <div class="card-body">
              <h5>Prestadores validados</h5>
              <p>
                Todos nuestros prestadores son validados cuidadosamente. Por eso
                sabemos cual es la mejor opción para vos.
              </p>
              <a href="" class="btn btn-primary">Button</a>
            </div>
          </div>
  
          <div class="card cardDog">
            <div class="cover">
              <img src="../img/news/8602082.png" alt="" />
              <div class="img-back"></div>
            </div>
            <div class="card-body">
              <h5>Titulo</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                quidem?
              </p>
              <a href="" class="btn btn-primary">Button</a>
            </div>
          </div>
          <div class="card cardDog">
            <div class="cover">
              <img src="../img/news/8602082.png" alt="" />
              <div class="img-back"></div>
            </div>
            <div class="card-body">
              <h5>Titulo</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                quidem?
              </p>
              <a href="" class="btn btn-primary">Button</a>
            </div>
          </div>
          <div class="card cardDog">
            <div class="cover">
              <img src="../img/news/8602082.png" alt="" />
              <div class="img-back"></div>
            </div>
            <div class="card-body">
              <h5>Titulo</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                quidem?
              </p>
              <a href="" class="btn btn-primary">Button</a>
            </div>
          </div> 
        </section>
        <section
          id="section5"
          class="container-fluid position-relative d-flex justify-content-center align-items-center"
        >
          <div class="container">
            <div class="row">
              <div
                class="col-xs-12 col-md-5 col-lg-6 mt-4 mx-4 px-5 me-auto w-auto fs-5 fw-bolder fst-italic text-light"
              >
                <p><i class="bi bi-stars me-2"></i>Comunidad</p>
              </div>
              <div
                class="col-xs-12 col-md-5 col-lg-6 me-5 text-center fs-1 lead text-light"
              >
                Todos los <span class="colorText"> cuidadores </span>
                nos envían fotos y videos de las
                <span class="colorText"> mascotas</span>
                y nos encanta compartirlo con
                <span class="colorText"> ustedes </span>
              </div>
            </div>
  
            <div class="d-grid gap-2 d-md-flex justify-content-md-star mt-5 pt-5">
              <button
                type="button"
                class="btn btn-lg p-3 border-2 fw-bolder loginInverse"
              >
                <svg>
                  <rect x="0" y="0" fill="none"></rect>
                </svg>
                Descubre más de nuestro trabajo
              </button>
            </div>
          </div>
          <img
            src="./img/index/shelter.png"
            class="img-fluid w-25 position-absolute bottom-0 end-0 d-none d-sm-block"
            alt=""
          />
        </section> */}
      </main>
  
    )
}