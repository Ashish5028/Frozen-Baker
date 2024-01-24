import React from "react";
import "./product.css";
import { productData } from "./data";
import ProductItem from "../productItem";
import { Header } from "../../component/Header";
import { FooterPage } from "../../component/footerPage";
<<<<<<< HEAD
import Card from "../../component/card";
=======
>>>>>>> cdec71bb79293d9b6ba75a4fc3c8a95b2c9ebb6d
import HeaderIndex from "../../header";
export default function ProdctPage() {
  return (
    <>
<<<<<<< HEAD
=======
      <HeaderIndex />
>>>>>>> cdec71bb79293d9b6ba75a4fc3c8a95b2c9ebb6d
      <br />
      <br />
      <main>
        {productData.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </main>
      <FooterPage />
    </>
  );
}
