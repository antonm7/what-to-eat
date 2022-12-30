import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import AboutUs from "../components/Home/Aboutus";
import Header from "../components/Home/Header";
import Newsletter from "../components/Home/Newsletter";
import Popular from "../components/Home/Popular";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="pt-12 bg-yellowBg">
      <Header />
      <AboutUs />
      <Popular />
      <Newsletter />
    </div>
  );
};


export default Home;

