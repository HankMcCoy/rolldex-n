import Link from "next/link";

interface Props {
  title: string;
  desc?: string;
  href: string;
}
export const LinkBox = ({ title, desc, href }: Props) => {
  return (
    <Link href={href}>
      <a className="p-4 block flex-initial border border-gray-300 bg-white">
        <div className="font-normal pb-1">{title}</div>
        {desc ? <div>{desc}</div> : null}
      </a>
    </Link>
  );
};
