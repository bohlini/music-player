import { useRef, useEffect, useState } from "react";

export default function MultiForm() {
  const nameInputRef = useRef(null);
  const nameFocusRef = useRef(null);
  const emailInputRef = useRef(null);

  useEffect(() => {
    if (!nameInputRef) return;
    nameInputRef.current.focus();
    if (!emailInputRef) emailInputRef.current.focus();
  }, []);

  function clearAndNameFocus(target) {
    nameFocusRef.current.focus();
    nameInputRef.current.value = "";
    console.log(nameFocusRef.current);
  }

  return (
    <>
      <h1>UseRef exerecises</h1>
      <input type="text" placeholder={"name"} ref={nameInputRef} />
      <button onClick={clearAndNameFocus}>clear n focus on name</button>
      <input type="email" placeholder={"email"} ref={emailInputRef} />
      <p ref={nameFocusRef}>name to focus</p>
      <p ref={nameFocusRef}>email to focus</p>
      <p ref={nameFocusRef}>message to focus</p>
    </>
  );
}

//
