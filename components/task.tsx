import { ChevronsDown } from "lucide-react";
import { Editor } from "./editor";

interface TaskProps {
  title: string
}
export default function Task({
  title
} : TaskProps){
    return(
      <div className="flex w-full max-w-md flex-col rounded-md border p-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold capitalize">{title}
        </h1>
        <div className="flex h-12 w-12 items-center justify-center rounded-md border">
          <ChevronsDown />
        </div>
      </div>
      <span className="mb-3 border-b pb-5 text-xs text-muted-foreground">
        Notes:
      </span>
      <Editor />
    </div>
    )
}
