import { adminMenuList } from "@/utils/staticData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

interface INavbarProps {
  className: string;
  title: string;
}

function Navbar({ className, title }: INavbarProps) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  const toggleSubMenu = (menuId: number) => {
    setOpenMenus((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId]
    );
  };

  return (
    <nav className={`d-flex flex-column bg-dark text-white p-2 p-md-3 rounded ${className}`}>
      {title && <h4 className="mb-3 mb-md-4">{title}</h4>}

      <ul className="nav nav-pills flex-column mb-auto overflow-auto">
        {adminMenuList.map((item) => {
          const hasSubMenu = item.subMenu && item.subMenu.length > 0;
          const isExpanded = openMenus.includes(item.id);

          // Highlight parent only if EXACT match
          const activeTopLevel = pathname === item.link;

          return (
            <li key={item.id} className="nav-item mb-1">
              <div className="d-flex align-items-center justify-content-between">
                <Link
                  href={item.link}
                  className={`nav-link flex-grow-1 text-truncate ${
                    activeTopLevel ? "active bg-primary" : "text-white"
                  }`}
                >
                  {item.text}
                </Link>

                {hasSubMenu && (
                  <button
                    type="button"
                    className="btn btn-link p-0 ms-2 text-white flex-shrink-0"
                    onClick={() => toggleSubMenu(item.id)}
                    aria-expanded={isExpanded}
                    aria-label="Toggle submenu"
                  >
                    {isExpanded ? <FiChevronDown /> : <FiChevronRight />}
                  </button>
                )}
              </div>

              {item.subMenu && (
                <ul className="nav flex-column mt-2 ms-3 border-start border-secondary ps-2">
                  {item.subMenu.map((subItem) => {
                    const fullSubItemLink = `${item.link}${subItem.link}`;
                    const activeSubLevel = pathname === fullSubItemLink;

                    return (
                      <li key={subItem.id} className="nav-item">
                        <Link
                          href={fullSubItemLink}
                          className={`nav-link text-truncate ${
                            activeSubLevel ? "active bg-primary" : "text-white"
                          }`}
                        >
                          {subItem.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
