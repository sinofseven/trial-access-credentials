import { useState } from "react";

function App() {
  const [response, setResponse] = useState<string>("");
  const [status, setStatus] = useState<null | number>(null);
  const [cookie, setCookie] = useState("");

  async function request() {
    const resp = await fetch(
      "https://xaxvdrpuiorpxot7thfp2dx7s40tpgnj.lambda-url.ap-northeast-1.on.aws/",
      { credentials: "include" },
    );

    setStatus(resp.status);
    const data = await resp.json();
    setResponse(JSON.stringify(data, null, 2));
  }

  function clear() {
    setResponse("");
    setStatus(null);
  }

  function getCookie() {
    const data = document.cookie;
    setCookie(data);
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
      <hr />
      <p>
        <button onClick={getCookie}>get cookie</button>
      </p>
      <p>
        <button onClick={() => setCookie("")}>clear</button>
      </p>
      <pre>{cookie}</pre>
    </>
  );
}

export default App;
