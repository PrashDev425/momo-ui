import { Link, useSearchParams } from 'react-router-dom';

const Success = () => {
    const [searchParms] = useSearchParams();
    let data = searchParms.get("data");
    data = JSON.parse(atob(data));
    console.log(data);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center space-y-6">
                <h1 className="text-4xl font-extrabold text-gray-800">Success</h1>
                <h1 className="text-2xl font-extrabold text-gray-800">Status: {data.status}</h1>
                <h1 className="text-2xl font-extrabold text-gray-800">Total Amount: {data.total_amount}</h1>
                <h1 className="text-2xl font-extrabold text-gray-800">Transaction Code: {data.transaction_code}</h1>
                <h2 className="text-3xl font-bold text-gray-800">Payment done successfully via esewa</h2>
                <p className="text-gray-600">
                    Thank you for using our service
                </p>

                <Link
                    to="/"
                    className="inline-block mt-4 px-6 py-2 bg-accent text-white font-medium rounded-lg shadow hover:bg-accent/90 transition"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
}

export default Success;