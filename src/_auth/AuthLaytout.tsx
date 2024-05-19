import { Outlet, Navigate } from "react-router-dom";

const AuthLaytout = () => {
  const isAuth = false;

  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 flex-col py-10 justify-center items-center">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLaytout;
