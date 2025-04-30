import { IMenuItem } from "@/types";

const adminMenuList: IMenuItem[] = [
    // admin, admin/bookings, admin/services, admin/customers
    {
      id: 1,
      text: "Admin",
      link: "/admin"
    },
    {
      id: 2,
      text: "Bookings",
      link: "/admin/booking"
    },
    {
      id: 3,
      text: "Services",
      link: "/admin/service",
      subMenu: [
        {
          id: 1,
          text: "All",
          link: "/"
        },
        {
          id: 2,
          text: "Service Category",
          link: "/service-category"
        },
        {
          id: 3,
          text: "Vehicle Type",
          link: "/vehicle-type"
        },
        {
          id: 4,
          text: "Service Price",
          link: "/service-price"
        },
        {
          id: 5,
          text: "Service Feature",
          link: "/service-feature"
        },
        {
          id: 6,
          text: "Add-On Service",
          link: "/add-on-service"
        }
      ]
    },
    {
      id: 4,
      text: "Customers",
      link: "/admin/customer"
    },
  ];


  export {adminMenuList};