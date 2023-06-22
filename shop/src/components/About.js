import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
    <div>About 페이지</div>
      <Outlet />
    </>
  );
};

export default About;