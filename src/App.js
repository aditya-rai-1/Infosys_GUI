import Navbar from './components/navbar/navbar.jsx';
import Analytics  from './components/analytics/Analytics.jsx';
import { useState } from 'react';

function App() {
  const [viewQuality, setViewQuality] = useState(false);
  const handleClick = () => {
    setViewQuality(!viewQuality);
  }
  return (
    <div>
      <Navbar />
      <div className='flex flex-row align-center justify-around items-center border-b'>
      <div className='flex flex-col align-center items-center h-fit py-5 justify-center'>
          <h2 className='text-xl font-bold'>Freight ID 1</h2>
          <p className='text-[#7B7B7B]'>ABC  6516154854</p>
      </div>
      <button className='bg-[#4F80E1] text-white rounded-md p-2 h-10' onClick={handleClick}>Check Quality</button>
      </div>
      {viewQuality ? <>
        <div className='flex gap-4 m-4 justify-center'>
        <Analytics title={"Present Quality Level"}/>
        <Analytics title={"Expected Quality Level"} />
      </div> 
      <div>
        <h2 className="text-center text-2xl font-bold">Acceptable Quality Level 63-68%</h2>
      </div>
      </>
      : null}
    </div>
  );
}



export default App;
