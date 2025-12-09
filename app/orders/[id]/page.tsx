import React from "react";
interface SingleOrderPageProps {
  params: { id: string };
}
async function SingleOrderPage({ params }: SingleOrderPageProps) {
  const { id } = await params;
  return <div>SingleOrderPage {id}</div>;
}

export default SingleOrderPage;
