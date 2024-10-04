
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
const token=localStorage.getItem('token')
const DashboardPage =async () => {
  const session=await getServerSession(authOptions)
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">{session?.user?.name}</h1>
      <h1 className="text-4xl text-center mt-10">{session?.user?.email}</h1>
      {session?.user?.image && <>
        <Image  src={session?.user?.image} alt="image" width={200} height={200} className="mx-auto mt-5 rounded-full" />
      </>}
    </div>
  );
};

export default DashboardPage;
