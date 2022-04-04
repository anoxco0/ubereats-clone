import { Route, Routes } from "react-router-dom";
import { Email } from "../LoginSignup/Email";
import { OTP } from "../LoginSignup/OTP";
import { HomePage } from "../homePage/HomePage";
import { Password } from "../LoginSignup/Password";
import { Name } from "../LoginSignup/Name";
import { Allset } from "../LoginSignup/Allset";
import { Product } from "../productPage/product/Product";
import { ProductDetails } from "../productPage/product/ProductDetails";
// import { Payment } from "../Cart/Payment";

export const Routers = () => {
  return (
    <> 
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/email" element={<Email />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/password" element={<Password/>} />
        <Route path="/name" element={<Name/>} />
        <Route path="/allSet" element={<Allset/>} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        {/* <Route path="/payment" element={<Payment/>} /> */}
      </Routes>
    </>
  );
};