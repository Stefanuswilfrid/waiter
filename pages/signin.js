import Title from "../components/Title";
import { useEffect } from "react";
import { UserAuth } from "../lib/AuthContext";
import { useRouter } from "next/router";
import SecondTitle from "../components/SecondTitle";
import ServiceCard from "../components/ServiceCard";
import Metatags from "../components/Metatags";

export default function SignInPage() {
  const { user } = UserAuth();
  console.log("u", user);

  return <>{user ? <ChooseServices /> : <SignIn />}</>;
}

function SignIn() {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Metatags />
      <div className="signin-main">
        <div className="text-box">
          <Title text="Sign up now and experience the convenience." />
          <button onClick={handleGoogleSignIn} className="signin-button">
            Sign in with google
          </button>
          <img
            className="connect-img"
            src="./connect.png"
            alt=""
            height="300px"
          />
        </div>
      </div>
    </>
  );
}

function ChooseServices() {
  return (
    <>
      <Metatags />
      <div className="choose-services-main">
        <Title text="Unlock Our Full Potential By Choosing The Services That Best Fits Your Needs" />
      </div>
      <div className="services-content">
        <SecondTitle text="Our Services" />
        <div className="d-flex">
          <ServiceCard
            title={"Generate Messages Template "}
            href={"/email"}
            image={"/writting.png"}
          />
          <ServiceCard
            title={"Have A Chat With Our AI "}
            href={"/chat"}
            image={"/v-meet.png"}
          />
          <ServiceCard
            title={"Generate Image From Text Description"}
            href={"/image"}
            image={"/paint.png"}
          />
        </div>
      </div>
    </>
  );
}
