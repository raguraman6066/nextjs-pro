import React from "react";
interface SingleOrderPageProps {
  params: { id: String };
}
async function SingleOrderPage({ params }: SingleOrderPageProps) {
  const { id } = await params;
  return <div>SingleOrderPage {id}</div>;
}

export default SingleOrderPage;
