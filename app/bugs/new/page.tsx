import dynamic from "next/dynamic"
import BugFormSkeleton from "./loading";


const BugForm = dynamic(
  () =>import ('@/app/bugs/_components/BugForm'),
  {ssr:false,
    loading: ()=> <BugFormSkeleton/>
  }
);

const NewBugPage = () => {
  return (
    <div>
      <BugForm/>
    </div>
  )
}

export default NewBugPage