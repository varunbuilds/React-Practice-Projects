import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}?";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-blue-200 mt-9 p-5 rounded-2xl">
          <div className="text-xl text-center pt-4">Password Generator</div>
          <div className="flex justify-center p-6">
            <input
              type="text"
              className="border-2 bg-white rounded-xs"
              value={password}
              readOnly
              placeholder="Password"
              ref={passwordRef}
            />
            <button
              className="bg-yellow-300 border-2 rounded-xs"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Number </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Character </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
