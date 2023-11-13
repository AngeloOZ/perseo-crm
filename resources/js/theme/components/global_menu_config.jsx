import { v4 as uuidv4 } from "uuid";
import IconMenuDashboard from "./Icon/Menu/IconMenuDashboard";
import IconMenuApps from "./Icon/Menu/IconMenuApps";
import IconMenuInvoice from "./Icon/Menu/IconMenuInvoice";
import IconMenuChat from "./Icon/Menu/IconMenuChat";
import IconMenuMailbox from "./Icon/Menu/IconMenuMailbox";
import IconMenuTodo from "./Icon/Menu/IconMenuTodo";

/**
 * Define la estructura de cada elemento del menú.
 * @typedef {Object} MenuItem
 * @property {string} id - Identificador único del elemento del menú.
 * @property {string} [title] - Título del elemento del menú.
 * @property {string} [titleSideSecction] - Título secundario para la sección.
 * @property {boolean} [hiddenTitleSideSecction] - Indica si el título secundario está oculto.
 * @property {JSX.Element} icon - Icono del elemento del menú.
 * @property {boolean} [chevron] - Indica si se muestra un chevrón para submenús.
 * @property {Array.<MenuLink>} children - Submenús o enlaces del elemento del menú.
 */

/**
 * Define la estructura de un enlace en el menú.
 * @typedef {Object} MenuLink
 * @property {string} id - Identificador único del enlace.
 * @property {string} text - Texto del enlace.
 * @property {string} href - Dirección URL a la que apunta el enlace.
 * @property {JSX.Element} [iconSidebar] - Icono mostrado en la barra lateral.
 * @property {Array.<SubmenuLink>} [children] - Subenlaces del enlace.
 */

/**
 * Define la estructura de un enlace en el menú.
 * @typedef {Object} SubmenuLink
 * @property {string} id - Identificador único del enlace.
 * @property {string} text - Texto del enlace.
 * @property {string} href - Dirección URL a la que apunta el enlace.
 */

/**
 * Representa los elementos del menú del dashboard.
 * Cada elemento del menú es un objeto que contiene un identificador único,
 * un título, un icono y, opcionalmente, un submenú con elementos adicionales.
 *
 * @type {Array.<MenuItem>}
 */
export const menuDashboard = [
    {
        id: uuidv4(),
        title: "Tablero",
        icon: <IconMenuDashboard className="shrink-0" />,
        chevron: true,
        children: [
            {
                id: uuidv4(),
                text: "Dashboard",
                href: "/dashboard",
            },
            {
                id: uuidv4(),
                text: "Analytics",
                href: "/analytics",
            },
            {
                id: uuidv4(),
                text: "Finance",
                href: "/finance",
            },
            {
                id: uuidv4(),
                text: "Crypto",
                href: "/crypto",
            },
        ],
    },
    {
        id: uuidv4(),
        titleSideSecction: "APLICACIONES",
        title: "Aplicaciones",
        icon: <IconMenuApps className="shrink-0" />,
        chevron: true,
        children: [
            {
                id: uuidv4(),
                text: "Chat",
                href: "/apps/chat",
                iconSidebar: <IconMenuChat className="shrink-0" />,
            },
            {
                id: uuidv4(),
                text: "Mailbox",
                href: "/apps/mailbox",
                iconSidebar: <IconMenuMailbox className="shrink-0" />,
            },
            {
                id: uuidv4(),
                text: "Todo List",
                href: "/apps/todolist",
                iconSidebar: <IconMenuTodo className="shrink-0" />,
            },
            {
                id: uuidv4(),
                text: "Invoice",
                href: "/apps/invoice",
                iconSidebar: (
                    <IconMenuInvoice className="group-hover:!text-primary shrink-0" />
                ),
                children: [
                    {
                        id: uuidv4(),
                        text: "List",
                        href: "/apps/invoice/list",
                    },
                    {
                        id: uuidv4(),
                        text: "Preview",
                        href: "/apps/invoice/preview",
                    },
                    {
                        id: uuidv4(),
                        text: "Edit",
                        href: "/apps/invoice/edit",
                    },
                ],
            },
        ],
    },
];
