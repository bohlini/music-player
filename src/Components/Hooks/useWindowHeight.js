import { useState, useEffect } from "react";

export function useWindowHeight() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        setWindowHeight(window.innerHeight);
    }, []);

    return windowHeight
}
