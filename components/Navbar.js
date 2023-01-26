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
    // <nav>
    //   <ul>
    //     <Link href="/">
    //       <li>🤖 W(Ai)ter</li>
    //     </Link>
    //     {user ? 
    //       <Link href="/signin"><li>Choose Your Service</li></Link>:<li>Choose Your Service</li>}

    //     {user ? (
    //         <li>Hello , {user?.displayName}</li>

    //     ) : (
    //       <li>About Us</li>
    //     )}
    //     {user ? (
    //         <li  onClick={handleSignOut}>Sign Out</li>

    //     ) : (
    //       <Link href="/signin">
    //         <li>Sign In</li>
    //       </Link>
    //     )}
    //   </ul>
    // </nav>
    <nav class="flex">
        <Link href="/">

    <h1>W(ai)ter</h1>
    </Link>

    {!user ? 

<button class="btn" onClick={handleGoogleSignIn} >Try It For Free</button>
: <button class="btn" onClick={handleSignOut}>Sign Out</button>}
    

  </nav>

  );
}
