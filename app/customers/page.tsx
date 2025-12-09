import React from "react";
interface CustomersPageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}
const CustomersPage = async ({ searchParams }: CustomersPageProps) => {
  const { type } = await searchParams;
  return (
    <div>
      <h1>Customer Page</h1>
      <p> {type == "new" ? "New Customer" : "Old Customer"}</p>
    </div>
  );
};

export default CustomersPage;
