"use client";
import Progressbar from "@/app/components/progressbar";
import Product from "@/app/components/cart/product";
export default function Cart() {
  return (
    <>
      <Progressbar step="1" />
      <Product />
    </>
  );
}
