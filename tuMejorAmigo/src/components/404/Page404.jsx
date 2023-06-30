import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((state) => state - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) navigate(-1);
  }, [seconds]);


  return (
    <div>
      <div className="hit-the-floor">404</div>
      <hr />
      Será redirigido a la página anterior en {seconds} segundos...
    </div>
  );
};

export default Page404;
