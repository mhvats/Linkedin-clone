import './login.css'
export const Login = () => {
  return (
    // main-container
    <div className="hello">
      {/* input fields */}
      <div className="border bg-white w-5/12 mx-auto">
        {/* join linkedin */}
        <div className="border w-3/6 mx-auto">
          <p className="text-2xl">Join Linkedin</p>
        </div>
        {/* join linkedin closed */}
        {/* form div */}
        <div className="mt-8 border w-3/6 mx-auto">
          <form>
            {/* input 1 */}
            <div className="">
              <input
                placeholder="Email"
                type="text"
                className="border border-black outline-none pt-5 px-10 text-xl"
              ></input>
            </div>
            {/* input 2 */}
            <div className="mt-4">
              <input
                placeholder="Password(8+ character)"
                type="password"
                className="border border-black outline-none pt-5 px-10 text-xl"
              ></input>
            </div>
          </form>
        </div>
        {/* form div closed */}
      </div>
      {/* input fields closed */}
    </div>
  );
};
