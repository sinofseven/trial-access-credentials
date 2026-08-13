import { useState } from "react";

function App() {
  const [response, setResponse] = useState<string>("");
  const [status, setStatus] = useState<null | number>(null);

  async function request() {
    const resp = await fetch(
      "https://xaxvdrpuiorpxot7thfp2dx7s40tpgnj.lambda-url.ap-northeast-1.on.aws/",
      { credentials: "omit" },
    );

    setStatus(resp.status);
    const data = await resp.json();
    setResponse(JSON.stringify(data, null, 2));
  }

  function clear() {
    setResponse("");
    setStatus(null);
  }

  return (
    <>
      <h1>Trial Access Credentials</h1>
      <hr />
      <p>
        <button onClick={request}>request</button>
      </p>
      <p>
        <button onClick={clear}>clear</button>
      </p>
      <hr />
      <p>status: {status}</p>
      <textarea readOnly value={response} />
    </>
  );
}

export default App;
