// import './App.css';
import Pil from './double.png'
import Vimme from './vimme.jpeg'
import log from './log.png'
import pil from './pil2.png'
import sfo from './sfo.jpeg'
import aron from './aron.jpeg'



function App() {
  return (
   <>
   <body className="bg-black w-screen h-screen text-white font-black ">
   <a className='hover:text-red-900 duration-500	flex lg:hidden' >KONTAKT</a>

    <div classname="w-screen  h-screen " id="hei">
    
      <div className="flex items-center relative top-28 flex-col w-screen h-96">
        <img src={log} className=" w-8/12 mt-20 "></img>
          <a href='#prosjekter' className="relative m-auto align-center duration-500 text-red-900 hover:text-gray-300 text-3xl font-black border text-center w-36 border-red-900 hover:border-gray-300"> 
            <div className=''>OM OSS</div>
          </a>
      </div>
    </div>


      <div className='h-96 w-screen bg-black text-black '></div>
      
        <div id="prosjekter" className=' w-scren h-screen lg:h-screen h-5/12 relative  bg-black border-blue-900  text-center'>
          <div className='lg:w-11/12 w-screen h-max flex lg:flex-row flex-col border-green-900 m-auto  lg:relative lg:top-24   md:flex-row'>
            <div className='lg:w-7/12 md:w-5/12 w-11/12 h-max mt-3 border-red-900  m-auto relative lg:right-28 right-0'>
              <div className=' w-min  lg:text-9xl text-5xl md:text-5xl lg:ml-16 mr-max font-black '>RAKKERE</div>
              <div className='lg:text-2xl text-1xl  lg:ml-16 font-thin lg:w-auto w-full m-auto flex text-start'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
              from a Lorem Ipsum passage, and going th(The Extremes of Good and Evil). </div>
              <a href="#musikk" className="relative duration-500"> 
                <img className="lg:h-20 h-14 hidden md:flex lg:flex rotate-90 lg:rotate-0 lg:hover:rotate-90 duration-500 lg:ml-12 hover:ml-16 " src={pil}></img>
              </a>
            </div>

            <div className='lg:w-4/12 w-10/12 h-80 grid grid-cols-2  ml-4 lg:ml-0'>
              <img src={Vimme} className="  flex  m-auto mt-4  relative bottom-4"></img>
              <img src={aron} className=" flex   relative left-3 lg:left-7 m-auto"></img>
              <img src={sfo} className=" flex x relative  lg:bottom-52 bottom-40 m-auto"></img>
            </div>
            <a href="#musikk">
              <img className="w-10 ml-auto mr-auto rotate-90 lg:hidden flex" src={pil}></img>
            </a>
          </div>
          </div>
      <div className=' w-screen h-screen relative  bg-black  text-center text-red-800 font-black   mt-0' id='musikk'>
        <div className=' w-max h-max  text-5xl lg:text-7xl '>
           <div className='font-2xl'>MUSIKK</div>
          <div className='w-screen h-max flex mt-20 lg:flex-row flex-col text-3xl lg:text-5xl text-white'>      
            <div className=' lg:w-6/12 h-max '>
              NYESTE SINGEL
              <iframe src="https://open.spotify.com/embed/track/2F6sBWgYQy7Bpt1nY8yfnQ?utm_source=generator&theme=0" className='w-8/12 h-96 m-auto mt-8'></iframe></div>
            <div className=' hidden lg:flex flex-col lg:w-6/12 h-max'>
              NYESTE ALBUM 
              <iframe className=' lg:h-96 m-auto w-8/12' id='iframe' src="https://open.spotify.com/embed/album/2Z9vWwNMh8h5OR5Z0TPMBv?utm_source=generator&theme=0"></iframe>
            </div>
          </div>
          
        </div>
        <a href='#video' className="text-2xl lg:text-4xl duration-500   text-red-900 text-center items-center  "> 
            <img className='lg:h-24 flex h-14  lg:hover:h-32 lg:hover:bottom-1 relative ml-auto mr-auto duration-500 rotate-90' src={pil}/>
          </a>
      </div>
      <div className='bg-black font-black text-center h-screen ' id="video">
      <div className="relative top-20 "><div className='text-5xl lg:text-8xl flex flex-row  w-min m-auto'><div className='text-red-900'>V</div>LOG</div>
      <div >
   <iframe className='lg:w-3/6 w-5/6 lg:h-96 border m-auto mt-10 ' src='https://www.youtube.com/embed/fA_0kkF2KEw' ></iframe>
   <div className='w-40   h-10  rounded-2xl border m-auto relative top-10'>
        <a href="#hei" className="relative top-1 text-xl flex flex-row ml-2">TIL START <img className='relative bottom-0  w-8 rotate-[270deg]' src={pil}/></a>
      </div>
        </div>
      </div>
      </div>
    </body>
    <script>
      function smmoth(){
                        document.documentElement.style.scrollBehavior = "smooth"

      }

      {/* function alert(){
        alert("hei")
      } */}
    </script>

   </>
  );
}

export default App;


