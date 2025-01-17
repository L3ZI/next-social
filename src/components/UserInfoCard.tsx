import Link from "next/link";
import Image from "next/image";
import {User} from "@prisma/client";

const UserInfoCard = ({user}:{user:User}) => {
    const createdAt = new Date(user.createdAt);
    const formattedDate = createdAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/*TOP*/}
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>User Information</span>
                <Link href='/' className='text-blue-500 text-xs'>See all</Link>
            </div>
            {/*BOTTOM*/}
            <div className='flex flex-col gap-4 text-gray-500'>
                <div className='flex items-center gap-2'>
                    <span className='text-xl text-black'>{(user.name && user.surname) ? user.name+ " " + user.surname : user.username}</span>
                    <span className='text-sm'>{user.username}</span>
                </div>
                {user.description && <p>{user.description}</p>}
                {user.city && <div className='flex items-center gap-2'>
                    <Image src='/map.png' alt='' width={16} height={16}/>
                    <span>Living in <b>{user.city}</b></span>
                </div>}
                {user.school && <div className='flex items-center gap-2'>
                    <Image src='/school.png' alt='' width={16} height={16}/>
                    <span>user.school</span>
                </div>}
                {user.work && <div className='flex items-center gap-2'>
                    <Image src='/work.png' alt='' width={16} height={16}/>
                    <span>Works at {user.work}</span>
                </div>}
                {user.website && <div className='flex items-center justify-between'>
                    <div className='flex gap-1 items-center'>
                        <Image src='/link.png' alt='' width={16} height={16}/>
                        <Link href={user.website} className='text-blue-500 font-medium'>{user.website}</Link>
                    </div>
                </div>}
                    <div className='flex gap-1 items-center'>
                        <Image src='/date.png' alt='' width={16} height={16}/>
                        <span>Joined {formattedDate}</span>
                    </div>
                </div>
                <button className='bg-blue-500 text-white text-sm rounded-md p-2'>Follow</button>
                <span className='text-red-400 self-end text-xs cursor-pointer'>Block User</span>
        </div>
    );
};

export default UserInfoCard;