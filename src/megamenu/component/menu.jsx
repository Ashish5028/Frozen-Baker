import React from "react";
import { MegaMenu } from "primereact/megamenu";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
export default function MenuBar() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-box",
      className: " px-3 font-text text-textColor ",
      items: [
        [
          {
            label: "Living Room",
            className: "bg-red-600",
            items: [
              { label: <Link to="/link">Accessories</Link> },
              { label: "Armchair" },
              { label: "Coffee Table" },
              { label: "Couch" },
              { label: "TV Stand" },
            ],
          },
        ],
        [
          {
            label: "Kitchen",
            items: [
              { label: "Bar stool" },
              { label: "Chair" },
              { label: "Table" },
            ],
          },
          {
            label: "Bathroom",
            items: [{ label: "Accessories" }],
          },
        ],
        [
          {
            label: "Bedroom",
            items: [
              { label: "Bed" },
              { label: "Chaise lounge" },
              { label: "Cupboard" },
              { label: "Dresser" },
              { label: "Wardrobe" },
            ],
          },
        ],
        [
          {
            label: "Office",
            items: [
              { label: "Bookcase" },
              { label: "Cabinet" },
              { label: "Chair" },
              { label: "Desk" },
              { label: "Executive Chair" },
            ],
          },
        ],
      ],
    },
    {
      label: "Electronics",
      icon: "pi pi-mobile",
      className: " px-2 font-text text-textColor ",
      items: [
        [
          {
            label: "Computer",

            items: [
              { label: "Monitor" },
              { label: "Mouse" },
              { label: "Notebook" },
              { label: "Keyboard" },
              { label: "Printer" },
              { label: "Storage" },
            ],
          },
        ],
        [
          {
            label: "Home Theather",
            items: [
              { label: "Projector" },
              { label: "Speakers" },
              { label: "TVs" },
            ],
          },
        ],
        [
          {
            label: "Gaming",
            items: [
              { label: "Accessories" },
              { label: "Console" },
              { label: "PC" },
              { label: "Video Games" },
            ],
          },
        ],
        [
          {
            label: "Appliances",
            items: [
              { label: "Coffee Machine" },
              { label: "Fridge" },
              { label: "Oven" },
              { label: "Vaccum Cleaner" },
              { label: "Washing Machine" },
            ],
          },
        ],
      ],
    },
    {
      label: "Sports",
      icon: "pi pi-clock",
      className: " px-2 font-text text-textColor ",
      items: [
        [
          {
            label: "Football",
            items: [
              { label: "Kits" },
              { label: "Shoes" },
              { label: "Shorts" },
              { label: "Training" },
            ],
          },
        ],
        [
          {
            label: "Running",
            items: [
              { label: "Accessories" },
              { label: "Shoes" },
              { label: "T-Shirts" },
              { label: "Shorts" },
            ],
          },
        ],
        [
          {
            label: "Swimming",
            items: [
              { label: "Kickboard" },
              { label: "Nose Clip" },
              { label: "Swimsuits" },
              { label: "Paddles" },
            ],
          },
        ],
        [
          {
            label: "Tennis",
            items: [
              { label: "Balls" },
              { label: "Rackets" },
              { label: "Shoes" },
              { label: "Training" },
            ],
          },
        ],
      ],
    },
  ];

  return (
    <div className="bg-zinc-200 py-3 ">
      <MegaMenu model={items} breakpoint="" />
    </div>
  );
}
