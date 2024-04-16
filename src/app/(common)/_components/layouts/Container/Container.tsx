import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

const Container = ({ className = "", children }: Props) => {
  return (
    <div className="flex justify-center">
      <div
        className={`max-w-screen relative min-w-0 flex-grow px-9 lg:mx-9 lg:max-w-[1200px] lg:px-0 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
