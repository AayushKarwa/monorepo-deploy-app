import {client} from "@repo/db/client";


export default async function Home() {
  const user = await client.user.findFirst()
  return (
    <div>
      <div>
      id:  {user?.id}
      </div>
      <div>
      username: {user?.username}
      </div>
      <div>
        password: {user?.password}
      </div>
    </div>
  );
}
