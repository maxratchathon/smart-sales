import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";
import CardItem from "../../components/CardItem";
import thaiBuffet from "../../img/inside/thai-chinese-table.jpg";
import internationalBuffet from "../../img/inside/international-buffet.jpg";
import chineseTable from "../../img/inside/chinese-table.png";
import cocktail from "../../img/food/cocktail.jpg";

const WeddingCeremony = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);

  function onClickHandler(e) {
    console.log(`clicked on ${e.target.id}`);
    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        eventType: e.target.id,
      },
    });
    navigate("/SummaryPage");
  }

  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกแพ็คเกจ</h3>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <CardItem
          id="insideWeddingThaiChineseTable"
          url={thaiBuffet}
          price="#"
          body="โต๊ะไทยจีน {hide 10500}"
          onClick={onClickHandler}
        />
        <CardItem
          id="insideWeddingCocktail"
          url={cocktail}
          price="#"
          body="ค็อกเทล {hide 990}"
          onClick={onClickHandler}
        />
        <CardItem
          id="insideWeddingInternationalBuffet"
          url={internationalBuffet}
          price="#"
          body="บุฟเฟต์อาหารไทยและเวสเทิร์น {hide 990}"
          onClick={onClickHandler}
        />
        <CardItem
          id="insideWeddingChineseTable"
          url={chineseTable}
          price="#"
          body="โต๊ะจีน (สำหรับ 10 ท่าน) {hide 10900}"
          onClick={onClickHandler}
        />
      </div>
    </>
  );
};

export default WeddingCeremony;
