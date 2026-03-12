import { loginWithSpotify } from "../../auth";

export default function Home() {
  const token = localStorage.getItem("access_token");

  return (
    <div>
      {token ? (
        <h1>Home</h1>
      ) : (
        <button onClick={loginWithSpotify}>Login</button>
      )}
    </div>
  );
}
