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
      <div className="text-center">
        <Link to={'/form-sample'}>FormSampleページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={'/context-sample'}>ContextSampleページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={'provider-sample'}>ProviderSampleページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={'theme-sample'}>ThemeSampleページを開く</Link>
      </div>
      <hr />
      <div className="text-center">ここからHooksのサンプル</div>
      <div className="text-center">
        <Link to={`hook-sample`}>HookSampleページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={`hook-count-sample`}>HookCountSampleページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={`hook-two-state-sample`}>HookTwoStateSampleページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={`hook-sample2`}>HookSample2ページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={`hook-form-sample`}>HookFormSampleページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={`use-effect-sample`}>UseEffectSampleページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={`use-effect-sample2`}>UseEffectSample2ページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={`original-hook-sample`}>OriginalHookSampleページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={`original-hook-sample2`}>OriginalHookSample2ページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={`original-hook-sample3`}>OriginalHookSample3ページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={`local-storage-sample`}>LocalStorageSampleページを開く</Link>
      </div>
      <div className="text-center">
        <Link to={`memo`}>Memoページを開く</Link>
      </div>
    </>
  );
}

export default Home;