import React from "react";
import "./product.css";
import { productData } from "./data";
import ProductItem from "../productItem";
import { Header } from "../../component/Header";
import { FooterPage } from "../../component/footerPage";
import Card from "../../component/card";
export default function ProdctPage() {
  return (
    <>
      <Header />
      <br />
      <Card />
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
