import Benefit from "../components/Benefit";

const Welcome = () => {
  console.log("Welcome component is rendering!");
  return (
    <div className="w-full max-w-[480px] bg-white dark:bg-[#18212a] sm:rounded-xl shadow-xl overflow-hidden min-h-screen sm:min-h-[800px] flex flex-col relative">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-b-gray-800 px-5 py-4">
        <div className="flex items-center gap-3 text-[#111418] dark:text-white">
          <div className="size-6 text-primary">
            <svg
              className="w-full h-full"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_319)">
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_319)">
                  <rect fill="white" height="48" width="48"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
            Liberia Connect
          </h2>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center text-[#111418] dark:text-white">
            <span className="material-symbols-outlined">translate</span>
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="p-4 pb-0">
          <div
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[220px] relative group"
            data-alt="Abstract gradient background representing connectivity and growth"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDN50Row6JWRlAAfuyB9BvpNI_BKXKY5-jqnPeEMdFo22IqCYlBhcvbvd-8uw6V-4U1uolmEhVwSzkzzdWIRcvyc5P7vDsBQbslurdqPVHl3vUASu1kAi7e8-Xk6nyd8wvXOnRGIQAghMGL8lHbXqaAZ47vQmdrHRaQWDu8Fh4xZs9C6_O3wtNW9-j5vF-OPe2h2EFASRCbg1lAWMotLkoT6ECsYwepNFvt9g_RxPwsH1UM6Kj7dG0d6wKoQDWon8gax5FxO7Lm_o9O')",
            }}
          >
            <div className="flex p-5 z-10">
              <p className="text-white tracking-tight text-[28px] font-bold leading-tight drop-shadow-md">
                Earn Money on Your Terms
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 pt-6 pb-2">
          <h2 className="text-[#111418] dark:text-white tracking-tight text-2xl font-bold leading-tight pb-3">
            Day Tasks & Night Life Gigs
          </h2>
          <p className="text-[#637588] dark:text-gray-300 text-base font-normal leading-normal">
            Join Liberia's most trusted local marketplace. Connect with clients
            needing help right now.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-5 py-6">
          <Benefit
            icon="payments"
            title="Fast Payments"
            description="Direct withdrawal to MTN Mobile Money & Orange Money."
          />
          <Benefit
            icon="offline_bolt"
            title="Data Optimized"
            description="Ultra-lightweight app designed for low data connections."
          />
          <Benefit
            icon="verified_user"
            title="Safe & Secure"
            description="ID verification required for all providers and clients."
          />
        </div>
      </div>
      <div className="p-4 border-t border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#18212a] mt-auto">
        <button className="w-full cursor-pointer flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] mb-4 shadow-md shadow-blue-500/20">
          <span className="truncate">Create Provider Profile</span>
        </button>
        <div className="flex justify-center items-center gap-2">
          <span className="text-[#637588] dark:text-gray-400 text-sm">
            Already have an account?
          </span>
          <a className="text-primary text-sm font-bold hover:underline" href="#">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
