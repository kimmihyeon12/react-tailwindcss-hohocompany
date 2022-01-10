export default function Modal({ children, openState }) {
  if (openState)
    return (
      <div className="flex w-full h-screen fixed  border  items-center justify-center z-50  bg-black bg-opacity-50">
        {children}
      </div>
    );
  else return <></>;
}
