import useRouter from "../hooks/useRouter";

function About() {
  const push = useRouter();

  return (
    <div className="container">
      <h2>about</h2>
      <button onClick={() => push("/")}>root</button>
    </div>
  );
}

export default About;
