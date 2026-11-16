import Link from 'next/link';
import { ArrowUpRight, Route, Waves, Activity, Factory, Gauge, Network } from 'lucide-react';
const items=[
 {icon:Route,title:'Pipeline engineering',text:'Route studies, pipeline design, stress and flexibility considerations, specifications and engineering deliverables.'},
 {icon:Gauge,title:'Hydraulic & flow assurance',text:'Steady-state and transient hydraulic studies, capacity checks, surge assessment and operating envelope support.'},
 {icon:Activity,title:'Integrity management',text:'Risk-based integrity strategies, inspection planning, threat assessment and engineering support for safe operations.'},
 {icon:Factory,title:'Process & facilities',text:'Process engineering, equipment and package interfaces, piping systems and brownfield facility modifications.'},
 {icon:Waves,title:'Subsea & offshore',text:'Subsea pipeline and offshore engineering support, including route, installation and interface studies.'},
 {icon:Network,title:'Digital engineering & SCADA',text:'Engineering data, SCADA and control interfaces, digital workflows and asset information management.'}
];
export default function ServiceCards(){return <div className="service-grid">{items.map(({icon:Icon,title,text},i)=><article className="service-card" key={title}><div className="service-card-top"><span className="service-icon"><Icon size={22}/></span><span className="card-number">0{i+1}</span></div><h3>{title}</h3><p>{text}</p><Link href="/services/" aria-label={`Explore ${title}`}>Explore capability <ArrowUpRight size={16}/></Link></article>)}</div>}
