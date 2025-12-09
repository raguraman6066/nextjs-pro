import Link from "next/link";
import React from "react";

const HomeDemo = () => {
  return (
    <div className="flex flex-col center">
      <h1>HomeDemo</h1>
      <Link href="products" className="underline">
        Products Page
      </Link>
      <Link href="orders" className="underline">
        Orders Page
      </Link>
      <Link href="customers" className="underline">
        Customers Page
      </Link>
      <Link href="orders/25" className="underline">
        Order id 25th
      </Link>
      <Link href="customers?type=new" className="underline">
        New customer
      </Link>
    </div>
  );
};

export default HomeDemo;
