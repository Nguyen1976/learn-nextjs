import envConfig from "@/config";
import { cookies } from "next/headers";
import Profile from "./Profile";

export default async function MeProfile() {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");
  const result = await fetch(`${envConfig.NEXT_PUBLIC_API_URL}/account/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionToken?.value}`,
    },
  }).then(async (res) => {
    const payload = await res.json();
    const data = {
      status: res.status,
      payload,
    };
    if (!res.ok) {
      throw data;
    }
    return data;
  });
  return (
    <div>
      <Profile />
    </div>
  );
}
