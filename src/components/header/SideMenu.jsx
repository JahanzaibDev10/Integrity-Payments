"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { navigation, site } from '@/data/siteContent';

function SideMenu({ isSidebarOpen, toggleSidebar }) {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (key) => {
        setOpenMenu(openMenu === key ? null : key);
    };

    return (
        <div>
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                <div className="rts-sidebar-menu-desktop">
                    <Link className="logo-1" href="/">
                        <img className="logo integrity-sidebar-logo-img" src={site.logo} alt={`${site.name} logo`} />
                    </Link>
                    <div className="body d-none d-xl-block">
                        <p className="disc">{site.description}</p>
                        <div className="get-in-touch">
                            <div className="h6 title">Get In Touch</div>
                            <div className="wrapper">
                                <div className="single">
                                    <i className="fas fa-phone-alt" />
                                    <Link href={site.phoneHref}>{site.phone}</Link>
                                </div>
                                <div className="single">
                                    <i className="fas fa-envelope" />
                                    <Link href={site.emailHref}>{site.email}</Link>
                                </div>
                                <div className="single">
                                    <i className="fas fa-globe" />
                                    <Link href={site.url}>{site.url.replace("https://", "")}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-mobile d-block d-xl-none">
                        <nav className="nav-main mainmenu-nav">
                            <ul className="mainmenu metismenu" id="mobile-menu-active">
                                {navigation.map((item, index) => (
                                    <li className={item.children?.length ? "has-droupdown menu-item" : "menu-item"} key={item.href}>
                                        <Link
                                            className="menu-link"
                                            href={item.children?.length ? "#" : item.href}
                                            onClick={item.children?.length ? () => toggleMenu(index) : toggleSidebar}
                                        >
                                            {item.label}
                                        </Link>
                                        {item.children?.length ? (
                                            <ul className={`submenu ${openMenu === index ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                                {item.children.map((child) => (
                                                    <li className="mobile-menu-link" key={child.href}>
                                                        <Link href={child.href} onClick={toggleSidebar}>{child.label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </li>
                                ))}
                                <li className="menu-item">
                                    <Link className="menu-link" href="/contact" onClick={toggleSidebar}>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu
