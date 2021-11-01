import spinner from '../assets/img/loading/spinner.gif'
function Loading() {
  return (
    <div className=" w-[100vw] h-[100vh] flex justify-center items-center  fixed">
      <img className="w-[10vw] h-[10vw]" src={spinner} alt="" />
    </div>
  )
}
export default Loading
