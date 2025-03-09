const Gallery = () => {
    return (
      <div className="flex flex-col items-center justify-center w-3/4 mx-auto">
        <h1 className="font-bold text-4xl mt-20">Gallery</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-10">
          <img
            className="w-200 rounded-lg shadow-md"
            src="https://iconext.co.th/wp-content/uploads/2021/07/UXUI-Design_image-510x280-1.png"
          />
          <img
            className="w-200 rounded-lg shadow-md"
            src="https://iconext.co.th/wp-content/uploads/2021/07/UXUI-Design_image-510x280-1.png"
          />
          <img
            className="w-200 rounded-lg shadow-md"
            src="https://iconext.co.th/wp-content/uploads/2021/07/UXUI-Design_image-510x280-1.png"
          />
          <img
            className="w-200 rounded-lg shadow-md"
            src="https://iconext.co.th/wp-content/uploads/2021/07/UXUI-Design_image-510x280-1.png"
          />
          <img
            className="w-200 rounded-lg shadow-md"
            src="https://iconext.co.th/wp-content/uploads/2021/07/UXUI-Design_image-510x280-1.png"
          />
          <img
            className="w-200 rounded-lg shadow-md"
            src="https://iconext.co.th/wp-content/uploads/2021/07/UXUI-Design_image-510x280-1.png"
          />
        </div>
      </div>
    );
}

export default Gallery;