import React from 'react'
import Link from 'next/link';


const sidebar_elements = [
  {
    src: '/path-12276.svg',  // Home
    href: '/',
    title : 'Home'
  },
  {
    src: '/group-17434.svg', // Add new
    href: '/addnew',
    title : 'Add new'
  },
  {
    src: '/group-17799.svg', // history
    href: '/history',
    title : 'History'
  },
  {
    src: '/calendar.svg', // calendar
    href: '/calendar',
    title : 'Calendar'
  },
  {
    src: '/group-17797.svg', // starred
    href: '/starred',
    title : 'Starred'
  },
  {
    src: '/path-12188.svg', // mentions
    href: '/mentions',
    title : 'Mentions'
  },
  {
    src: '/group-17827.svg', //drafts
    href: '/drafts',
    title : 'Drafts'
  },
  {
    src: '/path-12204.svg', //notifications
    href: '/notifications',
    title : 'Notifications'
  },
  {
    src: '/group-17793.svg', //settings
    href: '/settings',
    title : 'Settings'
  },
  {
    src: '/group-17793.svg', //settings
    href: '/settings'
  },
  {
    src: '/group-17793.svg', //settings
    href: '/settings'
  },
  {
    src: '/group-17793.svg', //settings
    href: '/settings'
  },
  
]

const SideBar = () => {
  return (
    <aside className=' bg-darkslateblue-200 flex flex-col items-center gap-1 h-full'>
      <div> { /* branding image */}
        <Link href={'/'} title='Home' className=''>
          <img src="brand.svg" alt="" className='w-[30px] h-[30px] cursor-pointer mt-4' />
        </Link>
      </div>
      <div className="scale-90 flex flex-col gap-5 items-center overflow-auto scrollbar-none w-[60px] h-fit" >
        {
          sidebar_elements.map((element) => {
            return (
              <Link className='opacity-60 hover:opacity-100 transition relative' href={element.href} key={element.src} title={element.title}>
                <img
                  className={"w-[41.44px] h-[41.44px] cursor-pointer scale-90 hover:scale-100 transition-all"}
                  src={element.src}
                />
              </Link>
            )
          })
        }
      </div>
    </aside>
  )
}


export default SideBar