import { Bounce, ToastContainer } from "react-toastify";


const ToastContent = () => {
    return (
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />

    )
}

export default ToastContent
