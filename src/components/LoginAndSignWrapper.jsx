import React from "react";
import Container from "./Container";

const LoginAndSignWrapper = ({ children }) => {
  return (
    <section className="bg-linear-to-br  from-gray-800 to-black">
      <Container>
        <div className="min-h-screen grid grid-cols-12 grid-rows-12">
          <div className="col-span-10 col-start-2 row-start-5 row-end-12 md:col-span-4 md:row-span-8 bg-red-900 md:row-start-3 md:col-start-9 text-white">{children}</div>
        </div>
      </Container>
    </section>
  );
};

export default LoginAndSignWrapper;
