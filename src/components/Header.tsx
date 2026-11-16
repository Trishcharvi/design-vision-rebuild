'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
const links = [['About','/about/'],['Services','/services/'],['Industries','/industries/'],['Projects','/projects/']];
export default function Header(){
 const [open,setOpen]=useState(false);
 return <header className="site-header"><div className="container nav-wrap"><Link href="/" className="brand" aria-label="Design Vision home"><span className="brand-mark">DV</span><span className="brand-copy"><b>DESIGN VISION</b><small>ENGINEERING CONSULTANCY</small></span></Link><nav className={open?'nav-links open':'nav-links'}>{links.map(([t,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{t}</Link>)}<Link className="nav-mobile-cta" href="/contact/">Discuss a project <ArrowUpRight size={16}/></Link></nav><Link className="nav-cta" href="/contact/">Discuss a project <ArrowUpRight size={16}/></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></div></header>
}
