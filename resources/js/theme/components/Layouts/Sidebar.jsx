import PerfectScrollbar from "react-perfect-scrollbar";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, usePage } from "@inertiajs/react";
import { toggleSidebar } from "../../store/themeConfigSlice";
import AnimateHeight from "react-animate-height";
import { useState, useEffect } from "react";

import IconCaretsDown from "../Icon/IconCaretsDown";
import IconCaretDown from "../Icon/IconCaretDown";
import IconMenuDashboard from "../Icon/Menu/IconMenuDashboard";
import IconMinus from "../Icon/IconMinus";
import { menuDashboard } from "../global_menu_config";

const Sidebar = () => {
    const { url } = usePage();
    const [currentMenu, setCurrentMenu] = useState("");
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state) => state.themeConfig);
    const semidark = useSelector((state) => state.themeConfig.semidark);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const toggleMenu = (value) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? "" : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector(
            '.sidebar ul a[href="' + window.location.pathname + '"]'
        );
        if (selector) {
            selector.classList.add("active");
            const ul = selector.closest("ul.sub-menu");
            if (ul) {
                let ele =
                    ul.closest("li.menu").querySelectorAll(".nav-link") || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return (
        <div className={semidark ? "dark" : ""}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${
                    semidark ? "text-white-dark" : ""
                }`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <Link
                            to="/"
                            className="main-logo flex items-center shrink-0"
                        >
                            <img
                                className="w-8 ml-[5px] flex-none"
                                src="/assets/images/logo.svg"
                                alt="logo"
                            />
                            <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">
                                {t("VRISTO")}
                            </span>
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>

                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                            {menuDashboard.map((item) => (
                                <RenderMenuSidebar
                                    key={item.id}
                                    menuItem={item}
                                    currentMenu={currentMenu}
                                    toggleMenu={toggleMenu}
                                />
                            ))}
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

function RenderMenuSidebar({ menuItem, currentMenu, toggleMenu }) {
    if (!menuItem.titleSideSecction) {
        return (
            <RenderMenuWithoutTitle
                currentMenu={currentMenu}
                menuItem={menuItem}
                toggleMenu={toggleMenu}
            />
        );
    }

    return (
        <RenderMenuWithTitle
            currentMenu={currentMenu}
            menuItem={menuItem}
            toggleMenu={toggleMenu}
        />
    );
}

function RenderMenuWithoutTitle({ menuItem, currentMenu, toggleMenu }) {
    return (
        <li className="menu nav-item">
            <button
                type="button"
                className={`${
                    currentMenu === menuItem.id ? "active" : ""
                } nav-link group w-full`}
                onClick={() => toggleMenu(menuItem.id)}
            >
                <div className="flex items-center">
                    <IconMenuDashboard className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                        {menuItem.title}
                    </span>
                </div>

                <div
                    className={
                        currentMenu !== menuItem.id
                            ? "rtl:rotate-90 -rotate-90"
                            : ""
                    }
                >
                    <IconCaretDown />
                </div>
            </button>

            <AnimateHeight
                duration={300}
                height={currentMenu === menuItem.id ? "auto" : 0}
            >
                <ul className="sub-menu text-gray-500">
                    {menuItem.children.map((item) => (
                        <li key={item.id}>
                            <Link to={item.href}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
            </AnimateHeight>
        </li>
    );
}

function RenderMenuWithTitle({ menuItem, currentMenu, toggleMenu }) {
    return (
        <>
            {(!menuItem.hiddenTitleSideSecction ||
                menuItem.hiddenTitleSideSecction === false) && (
                <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                    <IconMinus className="w-4 h-5 flex-none hidden" />
                    <span>{menuItem.titleSideSecction}</span>
                </h2>
            )}

            <li className="nav-item">
                <ul>
                    {menuItem.children.map((item) => (
                        <RenderItemMenu
                            key={item.id}
                            item={item}
                            currentMenu={currentMenu}
                            toggleMenu={toggleMenu}
                        />
                    ))}
                </ul>
            </li>
        </>
    );
}

function RenderItemMenu({ item, toggleMenu, currentMenu }) {
    if (item.children) {
        return (
            <li className="menu nav-item">
                <button
                    type="button"
                    className={`${
                        currentMenu === item.id ? "active" : ""
                    } nav-link group w-full`}
                    onClick={() => toggleMenu(item.id)}
                >
                    <div className="flex items-center">
                        {item.iconSidebar}
                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                            {item.text}
                        </span>
                    </div>

                    <div
                        className={
                            currentMenu !== item.id
                                ? "rtl:rotate-90 -rotate-90"
                                : ""
                        }
                    >
                        <IconCaretDown />
                    </div>
                </button>

                <AnimateHeight
                    duration={300}
                    height={currentMenu === item.id ? "auto" : 0}
                >
                    <ul className="sub-menu text-gray-500">
                        {item.children.map((item) => (
                            <li key={item.id}>
                                <Link to={item.href}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </AnimateHeight>
            </li>
        );
    }

    return (
        <li className="nav-item">
            <Link to={item.href} className="group">
                <div className="flex items-center">
                    {item.iconSidebar}
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                        {item.text}
                    </span>
                </div>
            </Link>
        </li>
    );
}

export default Sidebar;
