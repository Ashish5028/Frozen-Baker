import GooglePayPayment from "./component/googlePay";
import QRCodePayment from "./component/qrCode";

export default function PaymentMethods() {
  return (
    <div className="flex justify-around mx-20 my-5 space-x-6 text-textColor font-text  ">
      <div className=" w-1/4 rounded-sm"></div>
      <div className="bg-stone-200 w-3/4 space-y-5 ">
        <h1 className="bg-bgColor text-white py-2 pl-10 text-lg">
          PAYMENT OTIONS
        </h1>
        <div className="flex justify-center">
          <GooglePayPayment />
        </div>
      </div>
      <div className="w-1/4 "></div>
    </div>
  );
}
