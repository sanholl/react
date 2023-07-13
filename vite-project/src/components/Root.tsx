import useRouter from "../hooks/useRouter";

function Root() {
  const push = useRouter();

  return (
    <div className="container">
      <h2>root</h2>
      <button onClick={() => push("/about")}>about</button>
    </div>
  );
}

export default Root;
