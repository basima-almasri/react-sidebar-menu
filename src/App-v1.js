import styled from "styled-components";
import { ReactComponent as BeltIcon } from "./icons/bolt.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as MessangerIcon } from "./icons/messenger.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as PartnerIcon } from "./icons/partner.svg";
import { ReactComponent as MembersIcon } from "./icons/member.svg";
import { ReactComponent as EquipesIcon } from "./icons/equipe.svg";
import { ReactComponent as ProduitsIcon } from "./icons/produit.svg";
import { ReactComponent as RdvIcon } from "./icons/rdvFournirs.svg";
import { AlbrLogo } from "./al.tsx";
import { motion } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

const sidebarMenu = [
  { icon: <MembersIcon />, label: "Accueil" },
  {
    icon: <EquipesIcon />,
    folderable: true,
    label: "Client",

    subs: [
      {
        label: "Synthèse",
      },
      {
        label: "Audit",

        subs: [
          {
            label: "Etat civil",
            folderable: true,
            subs: [{ label: "test", subs: [{ label: "NewTest" }] }],
          },
          {
            label: "Revenues",
            folderable: true,
            subs: [{ label: "Revenuestest" }],
          },
          {
            label: "Immoblier",
          },
          {
            label: "Placements",
          },
        ],
      },
      { label: "Proposition" },
      { label: "Aribitrage" },
      { label: "Souscription" },
      {
        label: "GED",
      },
      {
        label: "Réglementaire",
      },
      { label: "Mail" },
    ],
  },
  {
    label: "Support",
    folderable: true,

    icon: <ProduitsIcon />,
  },
  {
    label: "Fiches ventes",

    icon: <RdvIcon />,
    folderable: true,
    subs: [
      {
        label: "Etat civil",
      },
      {
        label: "Revenues",
      },
    ],
  },
  { icon: <PartnerIcon />, label: "Tableau ventes" },

  { icon: <PartnerIcon />, label: "Statistique" },
  {
    label: "Adminstration",
    subs: [
      { icon: <MembersIcon />, label: "Membres" },
      { icon: <EquipesIcon />, label: "Equipes" },
      { icon: <PartnerIcon />, label: "Partenaires" },
      {
        label: "Produits",
        folderable: true,
        backList: "main",

        icon: <ProduitsIcon />,
        subs: [
          {
            label: "Produits",
          },
          {
            label: "Prestataire",
            subs: [{ label: "subProduit", backList: "Produits" }],
          },
        ],
      },
      {
        label: "RDV Fournis",
        backList: "main",
        icon: <RdvIcon />,
        subs: [
          {
            label: "Gestion des attributions",
          },
          {
            label: "Tableau des attributions",
          },
          {
            label: "Gestion des groupes",
          },
          {
            label: "Gestion du status des leads",
          },
          {
            label: "Mes sites",
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div>
      <Navbar>
        <NavItem>
          {" "}
          <AlbrLogo />
        </NavItem>
        <NavItem icon={""}>
          <DropDownMenu menuItems={sidebarMenu} />
        </NavItem>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return (
    <NavbarStyle>
      <UlNavbar>{children}</UlNavbar>
    </NavbarStyle>
  );
}

function NavItem({ icon, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavItemStyle>
      <AncrStyle onClick={() => setIsOpen(!isOpen)}>{icon}</AncrStyle>
      {isOpen && children}
    </NavItemStyle>
  );
}

// function DropDownMenu({ menuItems = [] }) {
//   const [menu, setMenu] = useState(menuItems);
//   const [activeMenu, setActiveMenu] = useState([]);
//   const [menuOpenState, setMenuOpenState] = useState({});
//   console.log({ activeMenu });
//   const handleBackClick = () => {
//     if (activeMenu.length > 0) {
//       const newActiveMenu = activeMenu.slice(0, -1);
//       setActiveMenu(newActiveMenu);

//       if (newActiveMenu.length > 0) {
//         const parentItem = newActiveMenu[newActiveMenu.length - 1];
//         console.log({ parentItem });
//         setMenu([parentItem, ...parentItem.subs]);
//       } else {
//         setMenu(menuItems);
//       }
//     }
//   };

//   return (
//     <>
//       <DropDownMenuStyle>
//         {activeMenu.length > 0 && (
//           <AncrStyle>
//             <ArrowIcon onClick={handleBackClick} />
//           </AncrStyle>
//         )}
//         {menu.map((item) => {
//           if (item.label === "Adminstration")
//             return (
//               <div style={{ alignSelf: "flex-end" }}>
//                 <MenuItem
//                   key={item.label}
//                   item={item}
//                   setMenu={setMenu}
//                   menuOpenState={menuOpenState}
//                   setMenuOpenState={setMenuOpenState}
//                 />
//               </div>
//             );
//           return (
//             <MenuItem
//               key={item.label}
//               item={item}
//               setMenu={setMenu}
//               menuOpenState={menuOpenState}
//               setMenuOpenState={setMenuOpenState}
//             />
//           );
//         })}
//       </DropDownMenuStyle>
//     </>
//   );

//   function MenuItem({ item, setMenu, menuOpenState, setMenuOpenState }) {
//     const isMenuOpen = menuOpenState[item.label] || false;

//     function handleOpenMenu(item) {
//       if (item.folderable && item.subs) {
//         setMenuOpenState((prevState) => ({
//           ...prevState,
//           [item.label]: !isMenuOpen,
//         }));
//       } else if (!item.folderable && item.subs) {
//         setMenu([item, ...item.subs]);
//         setActiveMenu((activemenu) => [...activeMenu, item]);
//       }
//     }

//     return (
//       <>
//         <MenuItemStyle>
//           <div className="itemStyle" onClick={() => handleOpenMenu(item)}>
//             <span style={{ fontSize: "25px" }}>
//               {item.label}
//               {item.subs && <ChevronIcon />}
//             </span>
//           </div>
//           {item.subs && item.folderable && isMenuOpen && (
//             <SubMenu
//               subMenu={item.subs}
//               handleOpenMenu={handleOpenMenu}
//               setMenu={setMenu}
//               menuOpenState={menuOpenState}
//               setMenuOpenState={setMenuOpenState}
//             />
//           )}
//         </MenuItemStyle>
//       </>
//     );
//   }

//   // ...

//   function SubMenu({
//     subMenu,
//     handleOpenMenu,
//     setMenu,
//     menuOpenState,
//     setMenuOpenState,
//   }) {
//     return (
//       <>
//         <UL>
//           {subMenu.map((subItem) => (
//             <MenuItem
//               key={subItem.label}
//               item={subItem}
//               setMenu={setMenu}
//               handleOpenMenu={handleOpenMenu}
//               menuOpenState={menuOpenState}
//               setMenuOpenState={setMenuOpenState}
//             />
//           ))}
//         </UL>
//       </>
//     );
//   }
// }
function DropDownMenu({ menuItems = [] }) {
  const [menu, setMenu] = useState(menuItems);
  const [activeMenu, setActiveMenu] = useState([]);
  const [menuOpenState, setMenuOpenState] = useState({});

  const handleBackClick = () => {
    if (activeMenu.length > 0) {
      const newActiveMenu = activeMenu.slice(0, -1);
      setActiveMenu(newActiveMenu);

      if (newActiveMenu.length > 0) {
        const parentItem = newActiveMenu[newActiveMenu.length - 1];
        setMenu([parentItem, ...parentItem.subs]);
      } else {
        setMenu(menuItems);
      }
    }
  };

  return (
    <div className="espace">
      <DropDownMenuStyle>
        {activeMenu.length > 0 && (
          <AncrStyle>
            <ArrowIcon onClick={handleBackClick} />
          </AncrStyle>
        )}
        {menu
          .filter((item) => item.label !== "Adminstration")
          .map((item) => (
            <MenuItem
              key={item.label}
              item={item}
              setMenu={setMenu}
              menuOpenState={menuOpenState}
              setMenuOpenState={setMenuOpenState}
            />
          ))}
      </DropDownMenuStyle>
      {menu.find((item) => item.label === "Adminstration") && (
        <ul style={{ marginBottom: "5rem" }}>
          <MenuItem
            item={menu.find((item) => item.label === "Adminstration")}
            setMenu={setMenu}
            menuOpenState={menuOpenState}
            setMenuOpenState={setMenuOpenState}
          />
        </ul>
      )}
    </div>
  );

  function MenuItem({ item, setMenu, menuOpenState, setMenuOpenState }) {
    const isMenuOpen = menuOpenState[item.label] || false;

    function handleOpenMenu(item) {
      if (item.folderable && item.subs) {
        setMenuOpenState((prevState) => ({
          ...prevState,
          [item.label]: !isMenuOpen,
        }));
      } else if (!item.folderable && item.subs) {
        setMenu([item, ...item.subs]);
        setActiveMenu((activemenu) => [...activeMenu, item]);
      }
    }

    return (
      <>
        <MenuItemStyle>
          <div className="itemStyle" onClick={() => handleOpenMenu(item)}>
            <span style={{ fontSize: "18px" }}>
              {item.label}
              {item.subs && <ChevronIcon />}
            </span>
          </div>
          {item.subs && item.folderable && isMenuOpen && (
            <SubMenu
              subMenu={item.subs}
              handleOpenMenu={handleOpenMenu}
              setMenu={setMenu}
              menuOpenState={menuOpenState}
              setMenuOpenState={setMenuOpenState}
            />
          )}
        </MenuItemStyle>
      </>
    );
  }

  // ...

  function SubMenu({
    subMenu,
    handleOpenMenu,
    setMenu,
    menuOpenState,
    setMenuOpenState,
  }) {
    return (
      <>
        <UL>
          {subMenu.map((subItem) => (
            <MenuItem
              key={subItem.label}
              item={subItem}
              setMenu={setMenu}
              handleOpenMenu={handleOpenMenu}
              menuOpenState={menuOpenState}
              setMenuOpenState={setMenuOpenState}
            />
          ))}
        </UL>
      </>
    );
  }
}

const NavbarStyle = styled.nav`
  height: 60px;
  background-color: #242526;
  padding: 0 1rem;
  border-bottom: 1px solid #474a4d;
`;

const UlNavbar = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const NavItemStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  color: blue;
`;
const AncrStyle = styled.a`
  width: calc(60px * 0.5);
  height: calc(60px * 0.5);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:hover {
    filter: brightness(1.2);
  }
  svg {
    height: 20px;
    width: 20px;
    fill: #dadce1;
  }
}`;

const DropDownMenuStyle = styled.ul`
  // position: absolute;
  // top: 67px;
  display: flex;
  flex-direction: column;
  // width: 100%;
  height:100%;
  // transform: translateX(-45%);
  background-color: #242526;
  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  transition: height 500ms ease;
}`;

const MenuItemStyle = styled.li`
  // display: flex;
  // align-items: center;
  border-radius: 8px;
  transition: background 500ms;

  color: #dadce1;
  &:hover {
    background-color: #525357;
  }

  svg {
    margin-right: 4px;
    height: 20px;
    width: 20px;
    fill: #dadce1;
  }
`;
// const Item = styled.dev`
//   display: -webkit-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: flex;
//   padding: 12px 18px;
//   padding-left: 18px;
//   -webkit-align-items: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
// `;
const Menu = styled.div`
  width: 100%;
`;
export default App;
