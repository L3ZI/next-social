import Image from "next/image";
import Comments from "@/components/Comments";

const Post = () => {
    return(
        <div className='flex flex-col gap-4'>
            {/*USER*/}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src='https://images.pexels.com/photos/28271480/pexels-photo-28271480/free-photo-of-a-bowl-of-fruit-and-vegetables-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                           alt='pexels'
                           width={80}
                           height={80}
                           className='w-20 h-20 rounded-full ring-2'/>
                    <span className='font-medium'>Jack Sparrow</span>
                </div>
                <Image src='/more.png'
                       alt='pexels'
                       width={40}
                       height={40}
                />
            </div>
            {/*DESC*/}
            <div className='flex flex-col gap-4'>
                <div className='w-full min-h-96 relative'>
                    <Image src='https://images.pexels.com/photos/20218579/pexels-photo-20218579/free-photo-of-a-woman-pouring-coffee-from-a-moka-pot-into-a-cup.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                           alt='pexels'
                           fill
                           className='object-cover rounded-md'/>
                </div>
                <p>Clerk handles authentication and user management for you. Next, learn how to access this data and use it in
                    your application, customize the look and feel of your components,
                    and get your Clerk app ready for production.</p>
            </div>
            {/*INTERACTION*/}
            <div className='flex items-center justify-between text-sm my-4'>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src='/like.png'
                               alt='pexels'
                               width={16}
                               height={16}
                               className='cursor-pointer'/>
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'>Likes</span></span>
                    </div>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src='/comment.png'
                               alt='pexels'
                               width={16}
                               height={16}
                               className='cursor-pointer'/>
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'>Comments</span></span>
                    </div>
                </div>
                <div className=''>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src='/share.png'
                               alt='pexels'
                               width={16}
                               height={16}
                               className='cursor-pointer'/>
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'>Shares</span></span>
                    </div>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Post;