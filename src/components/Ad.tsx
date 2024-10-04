import Image from "next/image";

const Ad = ({size}:{size : "sm"|"md"|"lg"}) => {
    return(
        <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
            {/*TOP*/}
            <div className='flex items-center justify-between text-gray-500 font-medium'>
                <span>Sponsored Ads</span>
                <Image src='/more.png' alt='' width={16} height={16}/>
            </div>
            {/*BOTTOM*/}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2":"gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24": size==="md"?"h-36":"h-48"}`}>
                    <Image src='https://images.pexels.com/photos/28217963/pexels-photo-28217963/free-photo-of-a-mountain-range-with-a-road-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                           alt='' fill className='rounded-lg object-cover'/>
                </div>
                <div className='flex items-center gap-4'>
                    <Image src='https://images.pexels.com/photos/8311559/pexels-photo-8311559.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={24} height={24} className='rounded-full w-6 h-6 object-cover'/>
                    <span className='text-blue-500 font-medium'>BigChef Lounge</span>
                </div>
                <p className={size === "sm"? "text-xs": "text-sm"}>
                    {size === "sm" ? "If Clerk's prebuilt components don't":
                        size==="md" ? "If Clerk's prebuilt components don't meet your specific needs or if you require more control over the logic, you can rebuild the existing Clerk flows using the Clerk API."
                            : "By default, clerkMiddleware() makes all routes public. This step is specifically for applications that have configured clerkMiddleware() to make all routes protected. If you have not configured clerkMiddleware() to protect all routes, you can skip this step."}
                </p>
                <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn More...</button>
            </div>
        </div>
    )
}

export default Ad;