interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description }: BenefitProps) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-background-light dark:bg-white/5 border border-transparent dark:border-white/10">
      <div className="text-primary flex items-center justify-center bg-primary/10 rounded-full p-2 h-10 w-10 shrink-0">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[#111418] dark:text-white text-base font-bold leading-tight">
          {title}
        </h3>
        <p className="text-[#637588] dark:text-gray-400 text-sm leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Benefit;
