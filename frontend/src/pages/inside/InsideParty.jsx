import React from "react";
import CardItem from "../../components/CardItem";
import thaiBuffet from "../../img/inside/thai-chinese-table.jpg";
import internationalBuffet from "../../img/inside/international-buffet.jpg";
import chineseTable from "../../img/inside/chinese-table.png";
import cocktail from "../../img/food/cocktail.jpg";

const InsideParty = () => {
  function onClickHandler() {
    return 0;
  }

  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกแพ็คเกจ</h3>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <CardItem
          id="insideThaiBuffet"
          url={thaiBuffet}
          price="#"
          body="ไทยบุฟเฟต์ {hide 700}"
          onClick={onClickHandler}
        />
        <CardItem
          id="insideCocktail"
          url={cocktail}
          price="#"
          body="ค็อกเทล {hide 720}"
          onClick={onClickHandler}
        />
        <CardItem
          id="insideInternationalBuffet"
          url={internationalBuffet}
          price="#"
          body="บุฟเฟต์อาหารไทยและเวสเทิร์น {hide 770}"
          onClick={onClickHandler}
        />
        <CardItem
          id="insideChineseTable"
          url={chineseTable}
          price="#"
          body="โต๊ะจีน (สำหรับ 10 ท่าน) {hide 8900}"
          onClick={onClickHandler}
        />
      </div>
    </>
  );
};

export default InsideParty;
