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
    <nav
      className={`d-flex flex-column bg-dark text-white p-2 p-md-3 rounded ${className}`}
    >
      {title && <h4 className="mb-3 mb-md-4">{title}</h4>}

      <ul className="nav nav-pills flex-column mb-auto overflow-auto">
        <li className="nav-item mb-1">
          <div className="d-flex align-items-center justify-content-between">
            <Link
              href="/admin"
              className={`nav-link flex-grow-1 text-truncate ${
                pathname === "/admin" ? "active bg-primary" : "text-white"
              }`}
            >
              Admin
            </Link>
          </div>
        </li>

        <li className="nav-item mb-1">
          <div className="d-flex align-items-center justify-content-between">
            <Link
              href="/admin/booking"
              className={`nav-link flex-grow-1 text-truncate ${
                pathname === "/admin/booking"
                  ? "active bg-primary"
                  : "text-white"
              }`}
            >
              Bookings
            </Link>
          </div>
        </li>

        {/* Service Start  */}
        <li className="nav-item mb-1">
          <div className="d-flex align-items-center justify-content-between">
            <Link
              href="/admin/service"
              className="nav-link flex-grow-1 text-truncate text-white"
            >
              Services
            </Link>
          </div>

          {pathname.includes("/admin/service") && (
            <ul className="nav flex-column mt-2 ms-3 border-start border-secondary ps-2">
              <li className="nav-item">
                <Link
                  href="/admin/service"
                  className={`nav-link text-truncate ${
                    pathname === "/admin/service" ? "active bg-primary" : "text-white"
                  }`}
                >
                  All
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/admin/service/service-category"
                  className={`nav-link text-truncate ${
                    pathname === "/admin/service/service-category" ? "active bg-primary" : "text-white"
                  }`}
                >
                  Service Category
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/admin/service/vehicle-type"
                  className={`nav-link text-truncate ${
                    pathname === "/admin/service/vehicle-type" ? "active bg-primary" : "text-white"
                  }`}
                >
                  Vehicle Type
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/admin/service/service-price"
                  className={`nav-link text-truncate ${
                    pathname === "/admin/service/service-price" ? "active bg-primary" : "text-white"
                  }`}
                >
                  Service Price
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/admin/service/service-feature"
                  className={`nav-link text-truncate ${
                    pathname === "/admin/service/service-feature" ? "active bg-primary" : "text-white"
                  }`}
                >
                  Service Feature
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/admin/service/add-on-service"
                  className={`nav-link text-truncate ${
                    pathname === "/admin/service/add-on-service" ? "active bg-primary" : "text-white"
                  }`}
                >
                  Add-On Service
                </Link>
              </li>
            </ul>
          )}
        </li>
        {/* Service End */}

        <li className="nav-item mb-1">
          <div className="d-flex align-items-center justify-content-between">
            <Link
              href="/admin/customer"
              className={`nav-link flex-grow-1 text-truncate ${
                pathname === "/admin/customer"
                  ? "active bg-primary"
                  : "text-white"
              }`}
            >
              Customers
            </Link>
          </div>
        </li>

        <li className="nav-item mb-1">
          <div className="d-flex align-items-center justify-content-between">
            <Link
              href="/admin/user"
              className={`nav-link flex-grow-1 text-truncate ${
                pathname === "/admin/user"
                  ? "active bg-primary"
                  : "text-white"
              }`}
            >
              Users
            </Link>
          </div>
        </li>

        <li className="nav-item mb-1">
          <div className="d-flex align-items-center justify-content-between">
            <Link
              href="/admin/detailer"
              className={`nav-link flex-grow-1 text-truncate ${
                pathname === "/admin/detailer"
                  ? "active bg-primary"
                  : "text-white"
              }`}
            >
              Detailers
            </Link>
          </div>
          </li>

      </ul>
    </nav>
  );
}

export default Navbar;
