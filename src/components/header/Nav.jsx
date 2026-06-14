"use client"
import React from 'react'
import Link from 'next/link';
import { navigation } from '@/data/siteContent';

function Nav() {
    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
                    {navigation.map((item) => (
                        <li className={item.children?.length ? "has-droupdown" : ""} key={item.href}>
                            <Link className={item.children?.length ? "nav-link" : "nav-item"} href={item.href}>
                                {item.label}
                            </Link>
                            {item.children?.length ? (
                                <ul className="submenu">
                                    {item.children.map((child) => (
                                        <li key={child.href}>
                                            <Link href={child.href}>{child.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Nav
