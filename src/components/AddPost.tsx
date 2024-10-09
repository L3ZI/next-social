import Image from "next/image";
import prisma from "@/lib/client";
import {auth} from "@clerk/nextjs/server";

const AddPost = () => {

    const {userId} = auth();

    return (
        <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
            {/*AVATAR*/}
            <Image
                src='https://images.pexels.com/photos/27195708/pexels-photo-27195708/free-photo-of-meal-with-vegetables-on-dark-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                alt=''
                width={48}
                height={48}
                className='w-12 h-12 object-cover rounded-full'/>
            {/*POST*/}
            <div className='flex-1'>
                {/*TEXT INPUT*/}
                <div className='flex gap-4'>
                    <textarea placeholder="What's on your mind"
                              className='flex-1 bg-slate-100 rounded-lg p-2' name='desc'></textarea>
                    <Image src='/emoji.png'
                           alt=''
                           width={20}
                           height={20}
                           className='w-5 h-5 cursor-pointer self-end'/>
                    <button>Send</button>
                </div>
                {/*POST OPTIONS*/}
                <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/addimage.png' alt='' width={20} height={20}
                               className='w-5 h-5 cursor-pointer self-end'/>
                        Photo
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/addvideo.png' alt='' width={20} height={20}
                               className='w-5 h-5 cursor-pointer self-end'/>
                        Video
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/addevent.png' alt='' width={20} height={20}
                               className='w-5 h-5 cursor-pointer self-end'/>
                    </div>
                    Event
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/poll.png' alt='' width={20} height={20}
                               className='w-5 h-5 cursor-pointer self-end'/>
                        Poll
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost;