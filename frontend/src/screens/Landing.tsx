import { useNavigate } from "react-router-dom"

export const Landing = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className=" mt-2">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex justify-center">
                        <img src={"/homePage.jpeg"} className="max-w-97" />
                    </div>
                    <div className="pt-5">
                        <div className="flex justify-center">
                            <h1 className="text-4xl font-bold text-white">
                                Play Chess Online on the #3 Site!
                            </h1>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button onClick={() => {
                                navigate("/game")
                            }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-4 px-8 rounded">
                                Play Online
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}