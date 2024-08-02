import React from 'react'
import Loader from './Loader';
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = ({ images, loader, saved, setSaved }) => {

    const saveImage = (img) => {
        let flag = false;

        if (saved !== null && saved.length > 0) {
            for (let i = 0; i < saved.length; i++) {
                if (saved[i].id === img.id) {
                    flag = true;
                    toast.info(' Image already exist !', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                        });
                    break;
                }
            }
        }
        if (!flag) {
            setSaved([...saved, img])
            toast.success(' Image Saved Successfully !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }

    }


    return (
        <>

            <ToastContainer />

            {
                loader && <Loader />
            }

            <div className="container-fluid text-center" id="top">
                <div className="flex">
                    {
                        images.map((image) =>
                            <div key={image.id} className='items'>

                                <img src={image.src.medium} alt={image.photographer} onClick={() => saveImage(image)} />

                            </div>)
                    }

                </div>
                {
                    images.length !== 0 && <a href="#top" className="btn btn-warning my-5">Back To Top</a>
                }

            </div>
        </>
    )
}

export default Home
