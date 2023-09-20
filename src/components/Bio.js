const Bio = () => {
  return (
    <div className="container bg-dark w-screen h-[60vh] grid grid-cols-[40%_auto] gap-4">
      <div className="left w-full h-full   overflow-hidden flex justify-center items-center">
        <div className="h-[20rem ] w-[20rem] overflow-hidden">
          <img
            className="h-full w-full rounded-2xl border-4 border-light shadow-lg"
            src="https://res.cloudinary.com/dmuohnr8q/image/upload/v1695234844/WhatsApp_Image_2023-09-21_at_00.07.38_hl25zl.jpg"
            alt="profile"
          />
        </div>
      </div>
      <div className="right w-[95%] h-full  flex justify bg-center items-center">
        <div className="intro h-[20rem] w-full flex gap-5">
          <div className="shape h-[8rem] w-2 bg-light rounded-2xl"></div>

          <div className="self text-white">
            <h2 className=" text-6xl font-[500] tracking-wider font-poppins">
              Mehedi Hasan Toukir
            </h2>
            <h4 className="text-3xl py-3 text-lighter font-[400] tracking-wider font-lato">
              | Software Engineer
            </h4>
            <p className=" text-justify">
              Experienced professional with a diverse skill set spanning
              software engineering, graphic design, web design, and application
              management. Leveraging a solid software development background, I
              merge creativity into graphic and web design, crafting visually
              appealing and user-centric solutions. Proficient in full
              application lifecycle management, I specialize in optimizing
              performance, functionality, and user experience.
            </p>
            {/* Tech part */}
            <div className="tech w-full h-full mt-8">
              <ul className="flex gap-6">
                <li className="bg-white w-[3rem] h-[3rem] p-2 rounded">
                  <img
                    src="https://res.cloudinary.com/dmuohnr8q/image/upload/v1695237761/graphic-design_cu8ocy.png"
                    alt="design"
                  />
                </li>
                <li className="bg-white w-[3rem] h-[3rem] p-2 rounded">
                  <img
                    src="https://res.cloudinary.com/dmuohnr8q/image/upload/v1695237761/design_mgsvbg.png"
                    alt="web design"
                  />
                </li>
                <li className="bg-white w-[3rem] h-[3rem] p-2 rounded">
                  <img
                    src="https://res.cloudinary.com/dmuohnr8q/image/upload/v1695237761/front-end_ac9qx2.png"
                    alt="software engineering"
                  />
                </li>
                <li className="bg-white w-[3rem] h-[3rem] p-2 rounded">
                  <img
                    src="https://res.cloudinary.com/dmuohnr8q/image/upload/v1695237761/front-end_ac9qx2.png"
                    alt="application management"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
