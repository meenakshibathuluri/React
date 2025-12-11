import React, {createContext, useState } from "react";
import { Componen2 } from "./Component2";

export const UserContext1 = createContext();

export function Component1() {
    const [user, setUser] = useState("rock");
    return (
        <UserContext.Provider value={user}>
            <div>
                <h1>Component1 user name is: {user}</h1>
                <Componen2 />
            </div>
             </UserContext.Provider>
    );
}