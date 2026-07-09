export default function Toast({ message }) {

    if (!message) return null;


    return (

        <div
            className="toast show position-fixed bottom-0 end-0 m-3"
            role="alert"
        >

            <div className="toast-body bg-success text-white rounded">

                <i className="bi bi-check-circle me-2"></i>

                {message}

            </div>

        </div>

    );
}