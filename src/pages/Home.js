import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mb-4">Homeページ</h1>
      <div className="text-blue-500 hover:underline text-center my-1.5">
        <Link to={'/about'}>Aboutページを開く</Link>
      </div>
      <div className="text-blue-500 hover:underline text-center my-1.5">
        <Link to={'/contents'}>Contentsページを開く</Link>
      </div>
      <div className="text-blue-500 hover:underline text-center my-1.5">
        <Link to={'/state-sample'}>StateSampleページを開く</Link>
      </div>
      <div className="text-blue-500 hover:underline text-center my-1.5">
        <Link to={'/state-sample2'}>StateSample2ページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={'/list-sample'}>ListSampleページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={'/message-sample'}>MessageSampleページを開く</Link>
      </div>
    </>
  );
}

export default Home;