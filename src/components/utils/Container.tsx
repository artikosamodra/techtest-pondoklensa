import React from "react";

type ContainerProps = {
  sectionClass?: string;
  containerClass?: string;
  children: React.ReactNode;
};

const Container = ({
  sectionClass,
  containerClass,
  children,
}: ContainerProps) => {
  return (
    <div className={`w-full h-full ${sectionClass}`}>
      <div className={`container mx-auto lg:px-8 px-2 ${containerClass}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
