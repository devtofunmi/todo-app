import { FC } from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import Table from '../components/Table'

const Reminder: FC = () => {
     const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Jake', age: 20 },
    { id: 4, name: 'virmpire', age: 3000 },
    { id: 5, name: 'wolf', age: 350 },
  ];
  return (
    <DashboardLayout>
       <div className="main h-[90vh] mt-1 pb-3 md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:mr-[-30px] md:w-[80%] md:p-5 border-[0px] md:border-[1px] border-white border-opacity-10 z-20 overflow-scroll">
        <Table data={data} />
      </div>
    </DashboardLayout>
  )
}

export default Reminder
