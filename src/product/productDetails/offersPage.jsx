import airtel from "../../assets/offers/airtel.jpg";
import gpay from "../../assets/offers/googlepay.jpeg";
import mobiwik from "../../assets/offers/mobiwik.png";

export default function OffersPage() {
  return (
    <div className="my-10">
      <div className="flex  items-center space-x-2 py-4">
        <span class="material-symbols-outlined">shoppingmode</span>
        <p className="text-2xl">Offers Avilable</p>
      </div>
      <div className="bg-white rounded-sm grid grid-cols-1 divide-y border">
        <div className="flex items-center py-2">
          <img src={airtel} className="h-8 px-7" />
          <p> Airtel Payments bank - Flat 10% off up to Rs.200</p>
        </div>
        <div className="flex items-center py-2">
          <img src={gpay} className="h-8 px-7" />
          <p> GooglePay - Get upto 15% cashback</p>
        </div>
        <div className="flex items-center py-2">
          <img src={mobiwik} className="h-8 px-7" />
          <p> Mobikwik - Get upto 15% cashback</p>
        </div>
      </div>
    </div>
  );
}
