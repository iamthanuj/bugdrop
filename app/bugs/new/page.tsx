import dynamic from "next/dynamic"


const BugForm = dynamic(
  () =>import ('@/app/bugs/_components/BugForm'),
  {ssr:false}
);

const NewBugPage = () => {
  return (
    <div>
      <BugForm/>
    </div>
  )
}

export default NewBugPage