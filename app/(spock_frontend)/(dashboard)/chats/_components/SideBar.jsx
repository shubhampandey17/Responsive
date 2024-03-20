import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const sidebar_elements = [
  {
    src: '/path-12276.svg',
    className: 'cursor-pointer w-[41.44px] h-[41.44px]',
  },
  {
    src: '/group-17434.svg',
    className: 'w-[45px] h-[45px]  cursor-pointer'
  },
  {
    src: '/group-17799.svg',
    className: 'w-[45.91px] h-[45.91px] cursor-pointer'
  },
  {
    src: '/group-17797.svg',
    className: 'w-[49.88px] h-[47.58px] cursor-pointer'
  },
  {
    src: '/path-12188.svg',
    className: 'max-h-full w-[33.69px] cursor-pointer'
  },
  {
    src: '/group-17827.svg',
    className: ' w-[46.92px] h-[43.17px] cursor-pointer'
  },
  {
    src: '/path-12204.svg',
    className: 'w-fit h-fit cursor-pointer'
  },
  {
    src: '/group-17793.svg',
    className: 'w-[45.5px] h-[45.5px] cursor-pointer'
  }
]

const SideBar = () => {
  return (
    <div className=' bg-darkslateblue-200'>
      <div className="scale-90 flex flex-col gap-7 justify-center items-center overflow-auto scrollbar-none w-[60px] h-[88vh]" >
        {
          sidebar_elements.map((element) => {
            return (
              <div className=''>
                <img
                  className={element.className}
                  alt=""
                  src={element.src}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


export default SideBar