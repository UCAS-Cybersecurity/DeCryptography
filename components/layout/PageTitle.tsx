import Image from "../base/Image";

export default function PageTitle(props: { children?: any; className?: string; }) {
  const { children, className } = props;
  return (
    <section className="relative">
        <div
          className={`bg-gradient-to-r from-blue to-green w-full pt-6 mb-10 h-80 flex items-center ${className}`}
          style={{ borderBottomRightRadius: "70px" }}
        >
          {children}
        </div>
        <div
          className="absolute "
          style={{ bottom: 0, left: 0, width: "200px", height: "200px" }}
        >
          <Image className="" src="/logo-overlay.png" alt="Ucas" fill />
        </div>
      </section>
  );
}