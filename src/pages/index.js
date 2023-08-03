import React from "react";
import tw from "tailwind-styled-components";
import Sidenav from "./Sidenav";
import HomePage from "./HomePage";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import OurSpecialities from "./Specialisties/OurSpecialities";

export default function Home() {
  const { loading } = useSelector((state) => state.alert);

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/Login");
    } else {
      router.push("/");
    }
  }, []);

  return (
    <Wrapper>
      <Sidenav />

      <ProtectedRoutes>
        <HomePage />
      </ProtectedRoutes>
       {/* <OurSpecialities/> */}

      <Footer />
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex-1 overflow-y-scroll flex flex-col `;
