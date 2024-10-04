import Image from "next/image";

const ProfileCard = () => {
    return(
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
            <div className='h-20 relative'>
                <Image src='https://images.pexels.com/photos/28743445/pexels-photo-28743445/free-photo-of-sea-turtle-swimming-under-sunlit-waters.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                       alt='' fill className='rounded-md object-cover'/>
                <Image src='https://images.pexels.com/photos/28525048/pexels-photo-28525048/free-photo-of-elegant-portrait-of-woman-in-fashionable-gown.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                       alt='' width={48} height={48} className='rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'/>
            </div>
             <div className='h-20 flex flex-col gap-2 items-center'>
                 <span className='font-semibold'>Edward Maya</span>
                 <div className='flex'>
                     <Image src='https://images.pexels.com/photos/28302538/pexels-photo-28302538/free-photo-of-a-couple-sitting-on-a-couch-together.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                            width={12}
                            height={12}
                            className='rounded-full object-cover w-3 h-3'
                     />
                     <Image src='https://images.pexels.com/photos/28302538/pexels-photo-28302538/free-photo-of-a-couple-sitting-on-a-couch-together.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                            width={12}
                            height={12}
                            className='rounded-full object-cover w-3 h-3'
                     />
                     <Image src='https://images.pexels.com/photos/28302538/pexels-photo-28302538/free-photo-of-a-couple-sitting-on-a-couch-together.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                            width={12}
                            height={12}
                            className='rounded-full object-cover w-3 h-3'
                     />
                 </div>
                 <span className='text-xs text-gray-500'>500 Followers</span>
             </div>
            <button className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</button>
        </div>
    )
}

export default ProfileCard;