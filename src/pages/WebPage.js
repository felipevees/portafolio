import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import tecno1 from "../assets/img/tecnocredito/home.PNG";
import tecno2 from "../assets/img/tecnocredito/about.PNG";
import tecno3 from "../assets/img/tecnocredito/documents1.PNG";
import tecno4 from "../assets/img/tecnocredito/documents2.PNG";

import icard1 from "../assets/img/icard/client/home.PNG";
import icard2 from "../assets/img/icard/client/categories.PNG";
import icard3 from "../assets/img/icard/client/products.PNG";
import icard4 from "../assets/img/icard/client/cart.PNG";
import icard5 from "../assets/img/icard/client/check.PNG";
import icard6 from "../assets/img/icard/client/history.PNG";

import icard7 from "../assets/img/icard/admin/login.PNG";
import icard8 from "../assets/img/icard/admin/orders.PNG";
import icard9 from "../assets/img/icard/admin/users.PNG";
import icard10 from "../assets/img/icard/admin/createuser.PNG";
import icard11 from "../assets/img/icard/admin/tables.PNG";
import icard12 from "../assets/img/icard/admin/tableqr.PNG";
import icard13 from "../assets/img/icard/admin/tableorders.PNG";
import icard14 from "../assets/img/icard/admin/products.PNG";
import icard15 from "../assets/img/icard/admin/categories.PNG";
import icard16 from "../assets/img/icard/admin/check.PNG";
import icard17 from "../assets/img/icard/admin/payments.PNG";
import icard18 from "../assets/img/icard/admin/paymentlist.PNG";

import recipe1 from "../assets/img/recipe/home1.PNG";
import recipe2 from "../assets/img/recipe/veggiepopular.PNG";
import recipe3 from "../assets/img/recipe/categories.PNG";
import recipe4 from "../assets/img/recipe/search.PNG";
import recipe5 from "../assets/img/recipe/ingridients.PNG";
import recipe6 from "../assets/img/recipe/instructions.PNG";

export function WebPage() {
  const location = useLocation();

  const tecnocredito = [tecno1, tecno2, tecno3, tecno4];
  const icardClient = [icard1, icard2, icard3, icard4, icard5, icard6];
  const icardAdmin = [
    icard7,
    icard8,
    icard9,
    icard10,
    icard11,
    icard12,
    icard13,
    icard14,
    icard15,
    icard16,
    icard17,
    icard18,
  ];
  const recipe = [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6];

  return (
    <>
      <div className="d-flex justify-content-center ">
        <h1 style={{ fontSize: "45px" }}>
          {location.pathname === "/tecnocredito"
            ? "TECNOCREDITO"
            : location.pathname === "/recipeapp"
            ? "RECIPE APP"
            : location.pathname === "/icard"
            ? "ICARD"
            : ""}
        </h1>
      </div>

      {location.pathname === "/tecnocredito" ? (
        <div className="p-5 mb-5">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
          >
            <Masonry gutter="20px">
              {tecnocredito.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "12px",
                  }}
                  alt=""
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      ) : location.pathname === "/icard" ? (
        <div className="p-5 mb-5">
          <div className="d-flex justify-content-center">
            <h1>Lado de cliente</h1>
          </div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
          >
            <Masonry gutter="20px">
              {icardClient.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "12px",
                  }}
                  alt=""
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
          <div className="d-flex justify-content-center m-5">
            <h1>Lado de administrador</h1>
          </div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
          >
            <Masonry gutter="20px">
              {icardAdmin.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "12px",
                  }}
                  alt=""
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      ) : location.pathname === "/recipeapp" ? (
        <div className="p-5 mb-5">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
          >
            <Masonry gutter="20px">
              {recipe.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "12px",
                  }}
                  alt=""
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
