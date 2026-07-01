import React, { useState } from "react";
import dropdownMenu from "../Data/dropdownMenuData";
import "./Dropdown.css";

export default function Dropdown() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(0);

  return (
    <nav className="menu">
      {dropdownMenu.map((cat) => (
        <div
          key={cat.id}
          className="menu-item"
          onMouseEnter={() => {
            setActiveCategory(cat.id);
            setActiveSub(0);
          }}
          onMouseLeave={() => setActiveCategory(null)}
        >
          {/* TOP LEVEL */}
          <div className="menu-link">
            {cat.categoria} ▾
          </div>

          {/* MEGA MENU */}
          {activeCategory === cat.id && cat.subcategorias && (
            <div className="mega-dropdown">

              {/* LEFT COLUMN (subcategories) */}
              <div className="mega-left">
                {cat.subcategorias.map((sub, i) => (
                  <div
                    key={i}
                    className={`mega-left-item ${activeSub === i ? "active" : ""}`}
                    onMouseEnter={() => setActiveSub(i)}
                  >
                    {sub.label}
                  </div>
                ))}
              </div>

              {/* RIGHT AREA (departments) */}
              <div className="mega-right">
                {cat.subcategorias[activeSub]?.departamentos?.map((dep, i) => (
                  <div key={i} className="mega-column">
                    <div className="mega-title">
                      {dep.nomeDepto}
                    </div>

                    {dep.itens.map((item, k) => (
                      <a key={k} href="#" className="mega-item">
                        {item}
                      </a>
                    ))}
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>
      ))}
    </nav>
  );
}


// import React, { useState } from "react";
// import dropdownMenu from "../Data/dropdownMenuData"
// import "./Dropdown.css";

// export default function Dropdown() {
//   const [openCategory, setOpenCategory] = useState(null);
//   const [openSub, setOpenSub] = useState(null);

//   return (
//     <nav className="menu">
//       {dropdownMenu.map((cat) => (
//         <div
//           key={cat.id}
//           className="menu-item"
//           onMouseEnter={() => setOpenCategory(cat.id)}
//           onMouseLeave={() => {
//             setOpenCategory(null);
//             setOpenSub(null);
//           }}
//         >
//           <div className="menu-link">
//             {cat.categoria} ▾
//           </div>

//           {openCategory === cat.id && cat.subcategorias && (
//             <div className="dropdown">
//               {cat.subcategorias.map((sub, i) => (
//                 <div
//                   key={i}
//                   className="dropdown-col"
//                   onMouseEnter={() => setOpenSub(i)}
//                 >
//                   <div className="dropdown-title">
//                     {sub.label}
//                   </div>

//                   {sub.departamentos && (
//                     <div className="submenu">
//                       {sub.departamentos.map((dep, j) => (
//                         <div key={j} className="submenu-group">
//                           <div className="dept-title">
//                             {dep.nomeDepto}
//                           </div>

//                           {dep.itens.map((item, k) => (
//                             <a key={k} href="#" className="submenu-item">
//                               {item}
//                             </a>
//                           ))}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </nav>
//   );
// }


// // import React, { useState } from "react";
// // import dropdownMenu from "./dropdownMenu";
// // import "./Dropdown.css";

// // export default function Dropdown() {
// //   const [openCategory, setOpenCategory] = useState(null);
// //   const [openSub, setOpenSub] = useState(null);

// //   return (
// //     <nav className="menu">
// //       {dropdownMenu.map((cat) => (
// //         <div
// //           key={cat.id}
// //           className="menu-item"
// //           onMouseEnter={() => setOpenCategory(cat.id)}
// //           onMouseLeave={() => {
// //             setOpenCategory(null);
// //             setOpenSub(null);
// //           }}
// //         >
// //           {/* MAIN CATEGORY */}
// //           <div className="menu-link">
// //             {cat.categoria} ▾
// //           </div>

// //           {/* DROPDOWN LEVEL 1 */}
// //           {openCategory === cat.id && cat.subcategorias && (
// //             <div className="dropdown">
// //               {cat.subcategorias.map((sub, i) => (
// //                 <div
// //                   key={i}
// //                   className="dropdown-col"
// //                   onMouseEnter={() => setOpenSub(i)}
// //                 >
// //                   <div className="dropdown-title">
// //                     {sub.label}
// //                   </div>

// //                   {/* LEVEL 2 (departamentos or simple links) */}
// //                   {sub.departamentos ? (
// //                     <div className="submenu">
// //                       {sub.departamentos.map((dep, j) => (
// //                         <div key={j} className="submenu-group">
// //                           <div className="dept-title">
// //                             {dep.nomeDepto}
// //                           </div>

// //                           {dep.itens.map((item, k) => (
// //                             <a key={k} href="#" className="submenu-item">
// //                               {item}
// //                             </a>
// //                           ))}
// //                         </div>
// //                       ))}
// //                     </div>
// //                   ) : null}
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       ))}
// //     </nav>
// //   );
// // }