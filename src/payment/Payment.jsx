import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from "crypto-js";

const Payment = () => {
  const location = useLocation();
  const totalPrice = location.state?.totalPrice;
  let transitionid = uuidv4()
  console.log(totalPrice);
  let message = `total_amount=${totalPrice},transaction_uuid=${transitionid},product_code=EPAYTEST`
  let hash = CryptoJS.HmacSHA256(message,"8gBm/:&EnhH.1/q");
  let hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  return (
       <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={totalPrice}
            required
            disabled
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div>
          <input
            type="hidden"
            id="tax_amount"
            name="tax_amount"
            value="0"
            required
            />
        </div>

        <div>
          <label htmlFor="total_amount" className="block text-sm font-medium text-gray-700">
            Total Amount
          </label>
          <input
            type="text"
            id="total_amount"
            name="total_amount"
            value={totalPrice}
            required
            disabled
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div>
          <input
            type="hidden"
            id="transaction_uuid"
            name="transaction_uuid"
            value={transitionid}
            required
          />
        </div>

        <div>
          <input
            type="text"
            id="product_code"
            name="product_code"
            value="EPAYTEST"
            required
            disabled
          />
        </div>

        <div>
          <input
            type="hidden"
            id="product_service_charge"
            name="product_service_charge"
            value="0"
            required
         />
        </div>

        <div>
          <input
            type="hidden"
            id="product_delivery_charge"
            name="product_delivery_charge"
            value="0"
            required
          />
        </div>

        <div>
          <input
            type="hidden"
            id="success_url"
            name="success_url"
            value="http://localhost:5173/success"
            required
          />
        </div>

        <div>
          <input
            type="hidden"
            id="failure_url"
            name="failure_url"
            value="http://localhost:5173/failure"
            required
          />
        </div>

        <div>
          <input
            type="hidden"
            id="signed_field_names"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
            required
          />
        </div>

        <div>
          <input
            type="hidden"
            id="signature"
            name="signature"
            value={hashInBase64}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
        >
          Submit to eSewa
        </button>
      </form>
    </div>
  );
};

export default Payment;
