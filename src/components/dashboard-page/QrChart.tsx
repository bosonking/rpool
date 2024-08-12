type Props = {
  alt: string;
  src: string;
  label: string;
};

export const QrChart: React.FC<Props> = ({ alt, src, label }) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <img src={src} alt={alt} className="w-24 h-24" />
      <p className="text-xs text-zinc-600">{label}</p>
    </div>
  );
};
