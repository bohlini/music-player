import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "./auth";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      getAccessToken(code).then(() => navigate("/"));
    }
  }, []);

  return <p>Logging in...</p>;
}
