import React from "react";
function Summary({ Total }) {
  const SummaryItemStyle = "SummaryItem flex justify-between mt-3 w-[100%]";

  const shipping = 100;
  const discount = -10;
  const totalAmount = Total + shipping + discount;

  return (
    <div className="Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
      <h1 className="text-[2rem]">SUMMARY</h1>
      <div className={SummaryItemStyle}>
        <p>SubTotal:</p>
        <p>$ {Total}</p>
      </div>
      <div className={SummaryItemStyle}>
        <p>Shipping:</p>
        <p>${shipping}</p>
      </div>
      <div className={SummaryItemStyle}>
        <p>Shipping Discount:</p>
        <p>${discount}</p>
      </div>
      <div className={SummaryItemStyle + " text-3xl font-bold"}>
        <p>Total:</p>
        <p>${totalAmount}</p>
      </div>
    </div>
  );
}

export default Summary;
