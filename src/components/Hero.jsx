export default function Hero() {
return (
    <div className="bg-zinc-50 mt-[5%]" id="Home">
    <div className="container md:pt-[15%] pt-[25%] py-8 text-center lg:py-5 lg:text-left lg:flex lg:justify-between ">
        <div className="lg:w-1/2 xl:py-14 lg:py-8 ">
            <p className="tracking-widest">OFFER FOR THE BEST INTERIOR</p>
            <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">How does Online <br />Interior Desing work</h1>
            <p className="pb-6 text-gray-500 xl:pb-10">
                Change your view with the best interior design. <br /> We provide the best interior design for your Home. <br />Make every moment beautiful with the best interior design.
            </p>
            <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">Get Started </button>
        </div>
        <div className="w-1/2">
            <img width={800} height={500} className="absolute shadow-lg rounded-lg right-10 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px]  hidden lg:block" src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>

    </div>
</div>
)
}


{/* <img className="object-cover max-w-96" src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}