import { BookOpenIcon, UserGroupIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "util/class-names";

const navigation = [
  { name: "Campaigns", href: "/campaigns", icon: UserGroupIcon, current: true },
  { name: "Systems", href: "/systems", icon: BookOpenIcon, current: false },
];

export const Sidebar = () => {
  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-col flex-grow pt-5 bg-gray-700 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <a href="/" className="h-10 leading-10 w-auto text-3xl text-white">
            Rolldex
          </a>
        </div>
        <div className="mt-5 flex-1 flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-800 text-white"
                    : "text-gray-100 hover:bg-gray-600",
                  "group flex items-center px-3 py-3 font-medium rounded-md"
                )}
              >
                <item.icon
                  className="mr-3 flex-shrink-0 h-6 w-6 text-gray-300"
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
