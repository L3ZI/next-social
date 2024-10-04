import Image from "next/image";

const Stories = () => {
    return(
        <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
            <div className='flex gap-8 w-max'>
                {/*STORY*/}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src='https://images.pexels.com/photos/28271480/pexels-photo-28271480/free-photo-of-a-bowl-of-fruit-and-vegetables-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                           alt='pexels' width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
                    <span className='font-medium'>Ricky</span>
                </div>
                {/*STORY*/}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src='https://images.pexels.com/photos/28271480/pexels-photo-28271480/free-photo-of-a-bowl-of-fruit-and-vegetables-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                           alt='pexels' width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
                    <span className='font-medium'>Ricky</span>
                </div>
                {/*STORY*/}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src='https://images.pexels.com/photos/28271480/pexels-photo-28271480/free-photo-of-a-bowl-of-fruit-and-vegetables-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                           alt='pexels' width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
                    <span className='font-medium'>Ricky</span>
                </div>
                {/*STORY*/}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src='https://images.pexels.com/photos/28271480/pexels-photo-28271480/free-photo-of-a-bowl-of-fruit-and-vegetables-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                           alt='pexels' width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
                    <span className='font-medium'>Ricky</span>
                </div>
                {/*STORY*/}
                <div className='flex flex-col items-center gap-2 cursor-pointer'>
                    <Image src='https://images.pexels.com/photos/28271480/pexels-photo-28271480/free-photo-of-a-bowl-of-fruit-and-vegetables-sitting-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                           alt='pexels' width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
                    <span className='font-medium'>Ricky</span>
                </div>
            </div>
        </div>
    )
}

export default Stories ;