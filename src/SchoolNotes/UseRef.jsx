import { useRef, useState, useEffect } from "react";

//the child component
//another component should created in another file
export function CustomInput({ ref, ...rest }) {
  return <input ref={ref} placeholder="ex" type="text" />; //takes ref as parents, spreads the rest attributes
}

//the parent component
export function UseRef() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  // ref is a variable that remebers any type of value
  const aboutSectionRef = useRef(null);

  // ref can be a prop so a parent can control a child
  // good when there is library of components and they cant share the same logic
  // the parent holds the logic and the child executes it.
  const forwardInputRef = useRef(null);

  // useEffect(() => {
  //   // what will be focues once entering the page
  //   inputRef.current.focus(); // always .current when refereing to the ref
  // }, []); //first time visit - run it once

  // console.log("render"); //trigger on button click

  //difference between state and ref = both store value
  // ref - UI does not re-render, state does
  // ref - remembers over render

  // ref used often for | Previous state
  function handleCount() {
    setCount((prevState) => prevState + 1); // prevState looks at previous value
    // safest way to set a state if not very simple logic
  }

  // Common use for ref | section on same page to scroll down to,
  // ref can be used as a 'scrolling to certain part of your page'
  function handleGoToAbout() {
    if (!aboutSectionRef.current) return;
    aboutSectionRef.current.scrollIntoView({ behaviour: "smooth" });
  }

  function handleFocusClick() {
    if (!forwardInputRef) return;
    forwardInputRef.current.focus();
  }

  // Normal for audio/video
  // videoRef.current.play()
  // videoRef.current.pause()

  return (
    <>
      <h1>useref</h1>
      <div>
        <CustomInput ref={forwardInputRef} />
        <button onClick={handleFocusClick}>Focus on the forward input</button>
        {/* <input ref={inputRef} type={"text"} placeholder={"name"} />
        <h1>{count}</h1>
        <h1>{countRef.current}</h1>
        <button onClick={handleCount}>increment</button>
        <button
          onClick={() => {
            countRef.current = countRef.current + 1; //this will not show
            console.log(countRef.current); //this will show
          }}
        >
          increment ref count
        </button>
        <div>
          <button onClick={handleGoToAbout}>Go to about</button>
        </div>
        <div>
          <h1>not About</h1>
          <h1>not About</h1>
          <h1>not About</h1>
          <h1>not About</h1>
          <h1>not About</h1>
          <h1>not About</h1>
          <h1>not About</h1>
          <h1>not About</h1>
          <h1>not About</h1>
          <h1>not About</h1>
          <h1>not About</h1>
          <p>lorem</p>
        </div>
        <section ref={aboutSectionRef}>
          <h2>About</h2>
        </section> */}
      </div>
    </>
  );
}
