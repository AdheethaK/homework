import MainTitle from "../components/Title";
import { useState , useEffect } from "react";
import axios from "axios";

export default function Home() {

  //get all users

  const [user , setUSer] = useState<{
    first_name:string,last_name:string,avatar:string,email:string
  }>();

  const [users , setUsers] = useState<user[]>();

  type user = {
    first_name:string
    last_name:string
    avatar:string
    email:string
 }

  const getUser = async () => {
    const reponse = await axios.get(`https://reqres.in/api/users`);
    console.log(reponse);

    if (reponse.status == 200) {
        setUsers(reponse.data.data);
    }
  }

  useEffect(()=>{
    // code to trigger a s a side effect 
    getUser();
  },[])// dependency array 
    return (
      <>
        <div>
          <MainTitle titleName="Home"/>

          {/* {users && users.map((user)=>{
              <div>
              <img src={user.avatar} />
              <h2>{user.first_name}{user.last_name}</h2>
              <p>{user.email}</p>
            </div>
          })} */}
        </div>
      </>
    );
  }