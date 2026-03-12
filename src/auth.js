const CLIENT_ID = "dbfd904e085b41948c24dd2023ffd0b5";
const REDIRECT_URI = "http://127.0.0.1:3000/callback";
const SCOPES = "user-read-private user-read-email user-top-read";

// Generate code verifier
function generateCodeVerifier() {
    const array = new Uint8Array(64);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array))
        .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

// Hash it into a challenge
async function generateCodeChallenge(verifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

// Redirect user to Spotify login
export async function loginWithSpotify() {
    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);
    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: "code",
        redirect_uri: REDIRECT_URI,
        scope: SCOPES,
        code_challenge_method: "S256",
        code_challenge: challenge,
    });

    window.location = `https://accounts.spotify.com/authorize?${params}`;
}

// Exchange code for token
export async function getAccessToken(code) {
    const verifier = localStorage.getItem("verifier");

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            client_id: CLIENT_ID,
            grant_type: "authorization_code",
            code,
            redirect_uri: REDIRECT_URI,
            code_verifier: verifier,
        }),
    });

    const data = await response.json();
    localStorage.setItem("access_token", data.access_token);
    return data.access_token;
}