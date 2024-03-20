import Link from "next/link";

const items = [
    {
        name: 'Notes & Attachments',
        src: '',
        img_src: '/group-17748.svg',
    },
    {
        name: 'Add/Change Lines',
        src: '',
        img_src: '/group-17749.svg',
    },
    {
        name: 'Notes & Attachments',
        src: '',
        img_src: '/group-17748.svg',
    },
]
const NotesComp = () => {
    return (
        <div className="scale-90 text-sm font-poppins">
            <div className="rounded-xl bg-darkslateblue-100 w-fit h-fit flex flex-col  justify-center  gap-5 py-5 px-4" >
                {
                    items.map((item) => {
                        return ( 
                            <div className="flex flex-row justify-between space-x-4 items-center">
                                <div className="flex space-x-4 justify-center items-center">
                                    <img
                                        className="w-[18px] h-[18px]"
                                        alt=""
                                        src={item.img_src}
                                    />
                                    <Link href={'/'} className="text-white cursor-pointer no-underline">
                                        {item.name}
                                    </Link>
                                </div>
                                <div className="flex justify-center items-center" >
                                    <img src="backarrow_setting.svg" alt="backarrow" className="w-[18px] h-[18px]" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NotesComp;