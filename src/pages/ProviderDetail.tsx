const ProviderDetail = () => {
  return (
    <div className="relative w-full max-w-[480px] bg-surface-light dark:bg-surface-dark sm:rounded-[2rem] sm:shadow-2xl overflow-hidden flex flex-col h-[95vh] sm:h-auto sm:min-h-[800px] sm:border border-gray-100 dark:border-gray-800">
      <header className="flex items-center justify-between px-4 py-4 border-b border-[#f0f4f4] dark:border-white/10 shrink-0 bg-surface-light dark:bg-surface-dark sticky top-0 z-20">
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-base font-bold tracking-tight">Provider Profile</h1>
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-2xl">more_vert</span>
        </button>
      </header>
      <div className="flex-1 overflow-y-auto pb-32 no-scrollbar">
        <div className="flex flex-col items-center pt-8 pb-6 px-4">
          <div className="relative group cursor-pointer">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-surface-dark shadow-lg relative">
              <div className="absolute inset-0 z-10 bg-black/10 backdrop-blur-[6px] flex items-center justify-center">
                <div className="bg-white/90 dark:bg-black/60 p-2 rounded-full shadow-sm">
                  <span className="material-symbols-outlined text-gray-800 dark:text-white text-2xl">
                    lock
                  </span>
                </div>
              </div>
              <img
                alt="Provider Photo"
                className="w-full h-full object-cover"
                data-alt="Portrait of a young woman with braided hair, blurred for privacy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ-uFb35LgZqwje2cGQ59hbzU3aPi1i3qubENdtf_QcnZPsnER2SMwOGskXkSDjr2XXDAWKKT3ZSNvff7MIS6YoxE4KTVeq44toI_aPyQYBhJXyyA9Vy5EMGQiFKnU9y7bYIQr1u3iy8jw7z95a-XqOlNNdb6LQfawQwJXPjKrADMa5nIA7_cUwg3WN67hyufYsDwXi0N7fseSFbE9FRn3JnWy1Oh8Gzgoh_xUmHOtsLyKXdjYqONiIaOZ9CBAdXhZqOSmS3dNlC4y"
              />
            </div>
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-primary border-2 border-white dark:border-surface-dark rounded-full"></div>
          </div>
          <div className="mt-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-[#111817] dark:text-white">
                Sarah
              </h2>
              <span
                className="material-symbols-outlined text-primary text-xl"
                title="ID Verified"
              >
                verified
              </span>
            </div>
            <p className="text-[#618983] dark:text-gray-400 font-medium">
              Hair Braiding & Styling
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4 mb-6">
          <div className="flex flex-col items-center justify-center p-3 bg-[#f6f8f8] dark:bg-white/5 rounded-xl border border-transparent dark:border-white/5">
            <span className="text-xl font-bold">24</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              Age
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 bg-[#f6f8f8] dark:bg-white/5 rounded-xl border border-transparent dark:border-white/5">
            <span className="text-xl font-bold">Female</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              Gender
            </span>
          </div>
        </div>
        <div className="px-4 mb-2">
          <h3 className="text-sm font-bold text-[#111817] dark:text-white mb-3 uppercase tracking-wider opacity-80">
            Location
          </h3>
          <div className="flex items-center gap-4 p-3 rounded-xl border border-[#dbe6e4] dark:border-white/10 bg-white dark:bg-white/5">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e0f2f1] text-[#00695c] dark:bg-primary/20 dark:text-primary shrink-0">
              <span className="material-symbols-outlined text-xl">
                location_on
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[#111817] dark:text-white truncate">
                Sinkor, 12th Street
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                Beach side, near Landmark
              </p>
            </div>
            <div className="text-xs font-bold bg-gray-100 dark:bg-white/10 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
              ~3km
            </div>
          </div>
        </div>
        <div className="px-4 py-4">
          <h3 className="text-sm font-bold text-[#111817] dark:text-white mb-2 uppercase tracking-wider opacity-80">
            About Service
          </h3>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Fast and neat braiding services. I specialize in Knotless braids,
            Cornrows, and Twists. I am available for home service within Sinkor
            or you can come to my shop.
          </p>
        </div>
        <div className="px-4 py-2">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold border border-green-100 dark:border-green-800">
              <span className="material-symbols-outlined text-sm">
                check_circle
              </span>{" "}
              Phone Verified
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-bold border border-blue-100 dark:border-blue-800">
              <span className="material-symbols-outlined text-sm">shield</span>{" "}
              ID Checked
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-white/10 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-30">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Unlock contact info
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-[#111817] dark:text-white tracking-tight">
                  150
                </span>
                <span className="text-sm font-bold text-gray-500">LRD</span>
              </div>
            </div>
            <div className="flex gap-2 opacity-80 mb-1">
              <div
                className="h-6 w-6 rounded-full bg-[#ffcc00] border border-black/5"
                title="MTN Mobile Money"
              ></div>
              <div
                className="h-6 w-6 rounded-full bg-[#ff6600] border border-black/5"
                title="Orange Money"
              ></div>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-[#10221f] font-bold py-3.5 px-6 rounded-full transition-all active:scale-[0.98] shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">lock_open</span>
            <span>Unlock Contact</span>
          </button>
          <p className="text-[10px] text-center text-gray-400 dark:text-gray-500">
            Secure payment processed via Mobile Money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetail;
