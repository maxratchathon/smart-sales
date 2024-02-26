import React, { useContext } from "react";
import FormDataContext from "../FormDataContext";
import { useNavigate } from "react-router-dom";

const CardItem = ({
  id,
  url,
  directUrl,
  img,
  body,
  price,
  isFixedPackage,
  dataType,
  isHidePrice,
  place,
}) => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);

  // Price Calculator
  let people = formData.generalForm.people;
  function findPrice(price, people) {
    if (isFixedPackage == false) {
      let result = 0;
      console.log(`people: ${people}`);
      if (people == 0) {
        console.log("case 0");
        return 0;
      } else if (people <= 30 && place != "inside") {
        console.log("case1");
        result = price * 30;
      } else {
        result = price * people;
      }
      return result;
    } else {
      return price;
    }
  }

  function onClickHandler(e) {
    console.log(`clicked on ${e.target.id}`);
    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        eventName: body,
        price: findPrice(price, people),
        id: id,
      },
    });

    if (dataType == "eventType") {
      setFormData({
        ...formData,
        generalForm: {
          ...formData.generalForm,
          eventType: body,
        },
      });
    }
    if (directUrl) {
      window.location.replace(directUrl);
    } else {
      navigate(url);
    }
  }

  return (
    <>
      <div className="animate-fade-down animate-once flex max-w-[120px] flex-col items-center md:w-[30vh]">
        <img
          src={img}
          id={id}
          className="aspect-square max-w-[130px] rounded-[15px] bg-white object-scale-down object-left shadow-lg md:w-[30vh]"
          onClick={onClickHandler}
        />
        <p className="text-center">{body}</p>

        <h3>
          {isHidePrice
            ? " "
            : price && (
                <h3 className="font-bold">{price.toLocaleString()} บาท</h3>
              )}
        </h3>
      </div>
    </>
  );
};

export default CardItem;
