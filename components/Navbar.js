import Link from "next/link";
import { UserAuth } from "../lib/AuthContext";
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/router';
import { dividerClasses } from "@mui/material";

export default function Navbar() {
  const { logOut, user ,googleSignIn } = UserAuth();
  const router = useRouter()
  console.log("u", user);


  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }; 

  const handleSignOut = async () => {

    try {
      await logOut();
      router.push("/")


    } catch (error) {
      console.log(error);
    }
  };

  return (
  
    <nav className="flex">
        <Link href="/">

    <h1>W(ai)ter</h1>
    </Link>

    {!user ? 

<button className="btn" onClick={handleGoogleSignIn} >Try It For Free</button>
: <button className="btn" onClick={handleSignOut}>Sign Out</button>}
    

  </nav>

  );
}
