import { useState, useEffect } from "react";
import UserContext from "./UserContext";
import axios from "axios";

const UserState = (props) => {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    if(localStorage.getItem("token") !== ""){
      const getUser = async()=> {

        const response = await axios.get("https://course-app-backend-gold.vercel.app/user/getuser",
        {headers: {
          "token": `${localStorage.getItem("token")}`
        }}
        )
        setUser(response.data.user);
      }
      getUser();
    }
  },[])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;