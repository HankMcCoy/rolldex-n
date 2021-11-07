import { FunctionComponent } from "react";
import { BookOpenIcon, UserGroupIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "util/class-names";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Campaigns", href: "/campaigns", icon: UserGroupIcon },
  { name: "Systems", href: "/systems", icon: BookOpenIcon },
];

export const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-col flex-grow bg-gray-700 overflow-y-auto">
        <div className="h-24 flex items-center flex-shrink-0 px-4">
          <a href="/" className="leading-10 w-auto text-3xl text-white">
            Rolldex
          </a>
        </div>
        <div className="flex-1 flex flex-col">
          <nav className="flex-1 pb-4 space-y-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={classNames(
                    router.pathname.startsWith(item.href)
                      ? "bg-gray-800 text-white"
                      : "text-gray-100 hover:bg-gray-600",
                    "group flex items-center px-5 py-3 font-medium"
                  )}
                >
                  <item.icon
                    className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

interface Breadcrumb {
  text: string;
  href: string;
}
interface PageProps {
  heading: string;
  breadcrumbs?: Array<Breadcrumb>;
}
export const Page: FunctionComponent<PageProps> = ({
  heading,
  breadcrumbs,
  children,
}) => {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-64 flex flex-col flex-1">
        <div className="px-6 h-24 bg-violet-700 text-white flex flex-col justify-center space-y-1">
          {breadcrumbs && breadcrumbs.length
            ? breadcrumbs.map((b) => (
                <Link href={b.href}>
                  <a>{b.text}</a>
                </Link>
              ))
            : null}
          <h1 className="text-4xl">{heading}</h1>
        </div>
        <main className="px-6 py-4 flex flex-col space-y-2">{children}</main>
      </div>
    </div>
  );
};
