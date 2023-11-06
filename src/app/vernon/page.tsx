"use client";

import LinksComponent from "@/components/links";
import { socials, userDetails } from "@/components/links-data";

const Vernon = ()=>{
    return(<>
    <LinksComponent links={socials} user={userDetails}/>
    </>)
}

export default Vernon;