import { ReactNode } from 'react';

type DetailProps = {
  selectedProductImage: string | undefined;
  children: ReactNode;
};
function Detail({ selectedProductImage, children }: DetailProps) {
  return !!selectedProductImage ? (
    <div className="relative">
      {/* TODO: Write custom wrapper componnet for Next Image */}
      <img src={selectedProductImage} alt="Selected Product" />
      {children}
    </div>
  ) : (
    <>{children}</>
  );
}

export default Detail;
