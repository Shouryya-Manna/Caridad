export default function Mission() {
  return (
    <div className="items-center flex flex-col my-10 mx-10">
      <div>OUR MISSION IS SIMPLE</div>
      <div className="flex">
        {/* "Floating" looking text */}
        <div className="flex flex-col">
          Stop deaths frpm breast cancer
          <span className="cursor-pointer">
            Learn more
          </span>
        </div>

        {/* Image div */}
        <div>
          <img src="/Woman1.png"></img>
        </div>
      </div>
    </div>
  );
}
