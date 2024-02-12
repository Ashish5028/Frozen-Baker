import QrCode from "../../../assets/qrCode/qr.png";

export default function GooglePayPayment() {
  const handlechange = () => {};
  return (
    <div className="space-y-10  text-textColor ">
      {/* // googlePay PAYMENT */}
      {/* <div className="space-y-2 ">
        <label className="font-text flex  items-center space-x-3">
          <input
            onChange={handlechange}
            name="user"
            type="radio"
            value="Offilce"
            required
            className="w-4"
          />
          <p>Google Pay UPI</p>
          <p>abhi7376862392-1@okaxis</p>
        </label>
        <button className="w-full py-1 bg-cartNumBg text-white rounded-sm">
          Pay
        </button>
      </div> */}
      {/* Cash On Delivary  */}
      {/* <div className=" space-y-2">
        <label className="font-text flex  items-center space-x-3">
          <input
            onChange={handlechange}
            name="user"
            type="radio"
            value="Home"
            required
            className="w-4"
          />
          <p> Cash On Delivary</p>
        </label>
        <button className="w-full py-1 bg-cartNumBg text-white rounded-sm ">
          Pay
        </button>
      </div> */}
      {/* QR Code  */}
      <div className=" space-y-6 py-10">
        <img src={QrCode} alt="QR" className="h-72"></img>
        <p className="text-center text-xl"> Scan Qr Code</p>
      </div>
      <div className=" w-full flex items-center space-x-4 py-4"></div>
    </div>
  );
}
