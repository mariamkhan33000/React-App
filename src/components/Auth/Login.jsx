
function Login() {
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Handel is submited Mubark ho mohsin bhaya")
    }
  return (
    <div className="flex w-screen h-screen items-center justify-center">
        <div className="border-2 border-emerald-600 p-20">
            <form onSubmit={submitHandler}
             className="flex flex-col items-center justify-center">
                <input required className=" w-[450px] outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-gray-400" type="email" placeholder="Enter Your Email"/>
                <input required className="w-[450px] outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-gray-400 mt-8" type="password" placeholder="Enter Your Password"/>
                <button className="text-white outline-none bg-transparent bg-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-white mt-5 border-none cursor-pointer hover:bg-emerald-800">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login