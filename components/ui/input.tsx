import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({type, className, ...props}, ref) => {
  return (
    <input type={type} ref={ref} className={cn('file:hover:bg-puple-400 flex h-12 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:rounded-md file:border-0 file:bg-purple-500 file:p-2 file:text-sm file:font-medium placeholder:text-muted-foreground file:hover:cursor-pointer file:hover:bg-purple-400 focus-visible:border-purple-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',className)} {...props}/>

  )
})

Input.displayName = "Input"

export { Input }
