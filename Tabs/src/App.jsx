import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./btnContainer";
const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading,setIsLoading]=useState(true);
  const [jobs,setJobs] = useState([]);
  const [currentItem,setCurrentItem]=useState(0);
  //current Item

  const fetchJobs=async()=>{
    const response=await fetch(url);
    const newJobs=await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  }
  useEffect(()=>{
    fetchJobs();
  },[])
  const toggleItem=(id)=>{

  }
  if(isLoading){
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }
  return <>
  <section className="jobs-center">
    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
    <JobInfo jobs={jobs} currentItem={currentItem}/>
  </section>
  </>;
};
export default App;
