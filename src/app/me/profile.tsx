"use client";

import envConfig from "@/config";
import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    // const fetchRequest = () => {
    //   const result = await fetch(
    //     `${envConfig.NEXT_PUBLIC_API_URL}/account/me`,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${sessionToken?.value}`,
    //       },
    //     }
    //   ).then(async (res) => {
    //     const payload = await res.json();
    //     const data = {
    //       status: res.status,
    //       payload,
    //     };
    //     if (!res.ok) {
    //       throw data;
    //     }
    //     return data;
    //   });
    // };
    // fetchRequest();
  }, []);
  return <div>Profile</div>;
}
