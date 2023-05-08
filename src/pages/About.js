import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mb-4">Aboutページ</h1>
      <div className="text-blue-500 hover:underline text-center my-1.5">
        <Link to={'/'}>Homeページを開く</Link>
      </div>
      <div className="text-blue-500 hover:underline text-center my-1.5">
        <Link to={'/contents'}>Contentsページを開く</Link>
      </div>
    </>
  );
}

export default About;