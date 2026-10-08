import type {Metadata} from 'next';
import Link from 'next/link';
export const metadata:Metadata={title:"Survival advice corrected",alternates:{canonical:"/survival-tips/"},robots:{index:false,follow:true}};
export default function Page(){return <article className="page-shell max-w-4xl py-10"><Link className="text-green-200 underline" href="/">Home</Link><h1 className="my-6 text-3xl font-bold">Survival advice corrected</h1><div className="space-y-5 text-base leading-8 text-slate-300"><p>The camera controls and observed warning behavior are now explained together in the guide below. Earlier unsupported camera priorities and survival predictions have been removed.</p><p><Link className="btn-primary" href="/guide/">Read the controls and purge guide</Link></p></div></article>}
