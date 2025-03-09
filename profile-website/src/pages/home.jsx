import profileImage from "../image/user_pic.png"; // Replace with your actual image path
import facebookicon from "../icons/facebook.svg";
import instagramicon from "../icons/instagram.svg";

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex flex-row justify-center items-center p-6">
      {/* Text Section (Left Side) */}
      <div className="text-center p-15">
        <h2 className="text-left text-xl font-semibold">Hello, It's me</h2>
        <h1 className="text-left text-4xl font-bold mt-2">Artist John</h1>
        <h3 className="text-left text-lg font-medium mt-2">I'm an Artist</h3>
        <p className="text-left text-gray-700 mt-4">
          Please hold your breath as we dive into a world full of creativity
          with designer John.
        </p>

        {/* Social Media Icons */}
        <div className="flex sm:items-start sm:justify-start space-x-4 mt-6">
          <a
            href="https://www.facebook.com/login"
            target="_blank"
            rel="facebook"
          >
            <img src={facebookicon} alt="Facebook Icon" className="w-10 h-10" />
          </a>
          <a
            href="https://www.instagram.com/login"
            target="_blank"
            rel="instagram"
          >
            <img
              src={instagramicon}
              alt="Facebook Icon"
              className="w-10 h-10"
            />
          </a>
          <a href="https://x.com/home" target="_blank" rel="instagram">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg"
              alt="Facebook Icon"
              className="w-10 h-10 rounded-md"
            />
          </a>
        </div>

        {/* Portfolio Button */}
        <button className="flex flex-left mt-6 bg-green-700 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-green-800">
          My Portfolio
        </button>
      </div>

      {/* Image Section (Right Side) */}
        <img
          src={profileImage}
          alt="Artist John"
          className="w-60 md:w-80 rounded-lg object-cover sm:mb-6 md:mr-12"
        />
    </div>
  );
};

export default Home;
