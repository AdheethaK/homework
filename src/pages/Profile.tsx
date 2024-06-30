import { useParams } from "react-router-dom";
import MainTitle from "../components/Title";
import axios from "axios";
import GDSEButton from "../components/Button";
import { useState , useEffect } from "react";
import SIMPLEButton from "../components/Button/SIMPLE";
import UserObject from "../components/Interfaces/User";


export default function Profile() {

    const { userId } = useParams();
    const [user , setUSer] = useState<{
      first_name:string,last_name:string,avatar:string,email:string
    }>();

    const getUser = async () => {
      const user = await axios.get(`https://reqres.in/api/users/${userId}`);
      console.log(user);

      if (user.status == 200) {
          setUSer(user.data.data);
      }
    }

    useEffect(()=>{
      // code to trigger a s a side effect 
      getUser();
    },[])// dependency array 

    return (
      <>
        <div>
            <MainTitle titleName="Profile "/> - {userId} <br /> 
            {/* <SIMPLEButton btnFunction={getUser}/> */}
            <button  onClick={getUser} type="button">GetUser</button>

            {user && 
                <div>
                  <img src={user.avatar} />
                  <h2>{user.first_name}{user.last_name}</h2>
                  <p>{user.email}</p>
                </div>
            }
        </div>
      </>
    );
  }