import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    prompt: "",
    answer: "",
  });

  const [prompts, setPrompts] = useState([
    {
      prompt: "",
      answer: "",
      timestamp: new Date().getTime(),
    },
  ]);

  console.log(userInfo);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    console.log(userInfo);
  };

  const handlePrompt = (e, i) => {
    const { name, value } = e.target;
    const newPrompts = [...prompts];
    newPrompts[i][name] = value;
    setPrompts(newPrompts);
  };

  const handleAddPrompt = () => {
    setPrompts([
      ...prompts,
      {
        prompt: "",
        answer: "",
        timestamp: new Date().getTime(),
      },
    ]);
  };

  const handleDelete = (i) => {
    const deletePrompts = [...prompts];
    deletePrompts.splice(i, 1);
    setPrompts(deletePrompts);
  };

  console.log(prompts);
  return (
    <>
      <h1 className="text-3xl text-center my-4 py-2">React Forms</h1>
      <form className="w-5/6 max-w-sm mx-auto">
        <fieldset className="flex flex-col border mb-6 py-1 px-4">
          <legend className="text-2xl font-semibold">About You</legend>
          <div className="py-2">
            <label className="text-3xl font-semibold">What's your name?</label>
            <input
              className="w-4/5 border rounded text-lg leading-tight px-2 py-3 focus:outline-indigo-200 my-2"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              onChange={handleInput}
            />
            <input
              className="w-4/5 border rounded text-lg leading-tight px-2 py-3 focus:outline-indigo-200 my-2"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              onChange={handleInput}
            />
          </div>

          <div className="py-2">
            <label className="text-3xl font-semibold">What's your email?</label>
            <input
              className="w-4/5 border rounded text-lg leading-tight px-2 py-3 focus:outline-indigo-200 my-2"
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              onChange={handleInput}
            />
          </div>
          <div className="py-2">
            <label className="text-3xl font-semibold">What's your DOB?</label>
            <input
              className=" w-4/5 border rounded text-lg leading-tight px-2 py-3 focus:outline-indigo-200 my-2"
              type="date"
              id="dob"
              name="dob"
              max="2007-05-25"
              placeholder="Date of birth"
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-3xl font-semibold">
              What's your Gender?
            </label>
            <select
              className="w-3/5 border rounded text-lg leading-tight px-2 py-3 focus:outline-indigo-200 my-2"
              id="gender"
              name="gender"
              onChange={handleInput}
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="MTF">MTF</option>
              <option value="FTM">FTM</option>
              <option value="Non-binary">Non-binary</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="flex flex-col border mb-6 py-1 px-4">
          <legend className="text-2xl font-semibold">Prompts</legend>
          {prompts.map((prompt, i) => (
            <div key={prompt.timestamp} className="flex flex-col">
              <label className="text-3xl font-semibold">Select a Prompt</label>
              <div className="flex flex-row gap-2 items-center">
                <select
                  className="w-full border rounded text-lg leading-tight px-2 py-3 focus:outline-indigo-200 my-2"
                  id="prompt"
                  name="prompt"
                  onChange={(e) => handlePrompt(e, i)}
                >
                  <option value="">Select a prompt</option>
                  <option value="Dating me is like...">
                    Dating me is like...
                  </option>
                  <option value="Fact about me that surprises people:">
                    Fact about me that surprises people:
                  </option>
                  <option value="I want someone who...">
                    I want someone who...
                  </option>
                  <option value="I spend most of my money on:">
                    I spend most of my money on:
                  </option>
                  <option value="The most spontaneous thing I've done:">
                    The most spontaneous thing I've done:
                  </option>
                  <option value="We're the same type of weird if...">
                    We're the same type of weird if..."
                  </option>
                </select>
                <button
                  onClick={() => handleDelete(i)}
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  -
                </button>
              </div>
              <textarea
                className="min-w-full border border-dashed py-3 px-2 rounded text-lg"
                name="answer"
                id="answer"
                rows="5"
                placeholder="Let your true colours shine through"
                onChange={(e) => handlePrompt(e, i)}
              ></textarea>
            </div>
          ))}
          <div className="w-full flex justify-center my-4">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleAddPrompt}
            >
              Add Prompt
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
