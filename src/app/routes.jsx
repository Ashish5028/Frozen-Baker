import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { TeamIndex } from "../ourTeam";
import ContactIndex from "../contact";
import ProductIndex from "../product";
import UserIndex from "../user";
import HeaderIndex from "../header";
import { HomeIndex } from "../homePage/index";
import ServicePage from "../service";
import ProductDetails from "../product/productDetails/productDetails";
import BirthdayPage from "../homePage/RoutePage/birthday";
import AnniversaryPage from "../homePage/RoutePage/anniversary";
import Bestseller from "../homePage/RoutePage/bestseller";
import MidSeller from "../homePage/RoutePage/midseller";
import BrandSeller from "../homePage/RoutePage/brandseller";
import { ChocolateFile } from "../page/freshCake/navigatePage/chocolateFile";
import ButterScotchCake from "../page/freshCake/navigatePage/butterScotch";
import { FlowerCake } from "../page/freshCake/navigatePage/flowerCake";
import { Fruit } from "../page/freshCake/navigatePage/fruit";
import { PineApple } from "../page/freshCake/navigatePage/pineApple";
import { RedVelvet } from "../page/freshCake/navigatePage/redVelvet";
import { Truffle } from "../page/freshCake/navigatePage/truffle";
import { Vanilla } from "../page/freshCake/navigatePage/vanilla";
import SummaryMovie from "../ourTeam/component/summary";
import CartItems from "../product/productDetails/cartItems";
import ProductUpload from "../page/uploadProduct";
import { CakeUpload } from "../page/uploadProduct/cake/cake";
import { PastryUpload } from "../page/uploadProduct/pastry/pastry";
import { ChocolateUpload } from "../page/uploadProduct/chocolate/chocolate";
import { IcecreamUpload } from "../page/uploadProduct/iceCream/icecream";
import PastryDetails from "../page/pastrys/component/pastryDetails";
import ChocolateDetails from "../page/chocolate/component/chocolateDetails";
import { IceCreamDetails } from "../page/iceCream/component/iceCreamDetails";
import IceCreamShop from "../page/iceCream/component/icecreamShop";
import PastryShop from "../page/pastrys/component/pastryShop";
import ChocolateShop from "../page/chocolate/component/chocolateShop";
import MyAccount from "../page/userAccount/component/myAccount";
import MyOrder from "../page/userAccount/navigateFiles/myOrder";
import MyProfile from "../page/userAccount/navigateFiles/myProfile";
import MyRemainder from "../page/userAccount/navigateFiles/myRemainder";
import GiftVoucher from "../page/userAccount/navigateFiles/gifts";
import SaveAddress from "../page/userAccount/navigateFiles/saveAddress";
import ChangePassword from "../page/userAccount/navigateFiles/changePassword";

import PaymentMethods from "../page/payment";
import AddressPage from "../page/address/addressPage";
import { useSelector } from "react-redux";

export default function AppRoutes() {
  // const user = useSelector((state) => state.users.item);
  // const data = user.find((ele) => ele.data);
  // const username = data.data;
  // console.log(username);

  return (
    <>
      <BrowserRouter>
        <div className=" w-full ">
          <HeaderIndex />
        </div>
        <Routes>
          <Route path="/" element={<HomeIndex />}></Route>
          <Route path="/team" element={<TeamIndex />}></Route>
          <Route path="/contact" element={<ContactIndex />}></Route>
          <Route path="/product" element={<ProductIndex />}></Route>
          <Route path="/login/register" element={<UserIndex />}></Route>
          <Route path="/upload" element={<ProductUpload />}></Route>
          <Route path="/service" element={<ServicePage />}></Route>
          <Route path="/user/signin" element={<UserIndex />}></Route>
          <Route path="/setting" element={<HomeIndex />}></Route>
          <Route
            path={`/product/view/details/:_id`}
            element={<ProductDetails />}
          ></Route>
          <Route
            path={`/icecreams/view/details/:_id`}
            element={<IceCreamShop />}
          ></Route>
          <Route
            path={`/pastry/view/details/:_id`}
            element={<PastryShop />}
          ></Route>
          <Route
            path={`/chocolate/view/details/:_id`}
            element={<ChocolateShop />}
          ></Route>
          <Route path={`/view/:id`} element={<SummaryMovie />}></Route>
          <Route path="/api/anniversary" element={<AnniversaryPage />}></Route>
          <Route path="/api/birthday" element={<BirthdayPage />}></Route>
          <Route path="/api/bestseller" element={<Bestseller />}></Route>
          <Route path="/api/midnight" element={<Bestseller />}></Route>
          <Route path="/api/dayseller" element={<MidSeller />}></Route>
          <Route path="/api/brandnew" element={<BrandSeller />}></Route>
          <Route path="/chocolate" element={<ChocolateFile />}></Route>
          <Route path="/butterscotch" element={<ButterScotchCake />}></Route>
          <Route path="/flowerscake" element={<FlowerCake />}></Route>
          <Route path="/fruit" element={<Fruit />}></Route>
          <Route path="/pineapple" element={<PineApple />}></Route>
          <Route path="/redvelvet" element={<RedVelvet />}></Route>
          <Route path="/vanila" element={<Vanilla />}></Route>
          <Route path="/truffle" element={<Truffle />}></Route>
          <Route path="/cartitems" element={<CartItems />}></Route>
          <Route path="/pastry" element={<PastryDetails />}></Route>
          <Route path="/chocolate" element={<ChocolateDetails />}></Route>
          <Route path="/cakeupload" element={<CakeUpload />}></Route>
          <Route path="/icecreams" element={<IceCreamDetails />}></Route>
          <Route path="/icecreamupload" element={<IcecreamUpload />}></Route>
          <Route path="/pastryupload" element={<PastryUpload />}></Route>
          <Route path="/chocolateupload" element={<ChocolateUpload />}></Route>
          <Route path="/delivaryaddress" element={<AddressPage />}></Route>
          <Route path="/my-account" element={<MyAccount />}></Route>

          {/* Payment */}
          <Route path="/payment" element={<PaymentMethods />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// export { AppRoutes };
