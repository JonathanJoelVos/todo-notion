import { HTMLAttributes, ReactNode } from "react";


interface BubbleButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}
export default function BubbleButton(props: BubbleButtonProps) {
  return (
    <button className='flex items-center gap-1.5 p-2 text-sm font-medium leading-none text-black hover:bg-gray-300 data-[active=true]:text-purple-500' {...props} />
  )
}
