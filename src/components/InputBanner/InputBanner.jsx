import banner from '../../assets/images/banner.png';

const InputBanner = () => {
    return (
        // <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
        //     <div className="hero-overlay bg-opacity-60"></div>
        //     <div className="hero-content text-center text-neutral-content">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        //             <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
        <div className='relative'>
            <img className='w-full h-[600px]' src={banner} />
            <div className="absolute top-0 flex flex-col justify-center items-center bg-gradient-to-t from-[#969393] to-[rgba(21,21,21,0)] h-[600px] w-full">

                <h2 className='font-bold text-3xl text-center mb-3 text-white'>I grow by helping people in need.</h2>
                <div className=''>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InputBanner;