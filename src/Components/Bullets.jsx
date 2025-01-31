export default function Bullets(){
    return (
        <div className="p-10 h-full">
        <ul>
        <li className=" text-gray-400 tracking-wide text-3xl font-poppins hover:scale-125 hover:text-white transition-transform "><a href="#overview">Overview</a></li>
        <br />
        <li className=" text-gray-400 tracking-wide text-3xl font-poppins hover:scale-125 hover:text-white transition-transform "><a href="#work">Work Experience</a></li>
        <br />
        <li className=" text-gray-400 tracking-wide text-3xl font-poppins hover:scale-125 hover:text-white transition-transform "><a href="#techstack">Tech Stack</a></li>
        {/* <br /> */}
        {/* <li className=" text-gray-400 tracking-wide text-3xl font-poppins hover:scale-125 hover:text-white transition-transform ">Projects</li> */}
        <br />
        <li className=" text-gray-400 tracking-wide text-3xl font-poppins hover:scale-125 hover:text-white transition-transform "><a href="#dsa">DSA Journey</a></li>
        </ul>
        </div>
    )
}