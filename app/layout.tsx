import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist=Geist({variable:'--font-geist',subsets:['latin','cyrillic']});
const isGitHubPages=process.env.GITHUB_PAGES==='true';
const siteUrl=isGitHubPages?'https://yymnyawtl-ux.github.io/workbridge':'https://workbridge-recruiting.yymnyawtl.chatgpt.site';
const assetBase=isGitHubPages?'/workbridge':'';
export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:{default:'WorkBridge — подбор персонала для бизнеса',template:'%s — WorkBridge'},
  description:'Поиск сотрудников, первичный отбор и сопровождение кандидатов. WorkBridge помогает бизнесу выстроить понятный процесс подбора персонала.',
  alternates:{canonical:'/'},
  openGraph:{title:'WorkBridge — подбор персонала для бизнеса',description:'Понятный процесс поиска и отбора сотрудников под задачи бизнеса.',type:'website',locale:'ru_RU',url:siteUrl,siteName:'WorkBridge',images:[{url:`${siteUrl}/og.png`,width:1536,height:1024,alt:'WorkBridge — подбор персонала для бизнеса'}]},
  twitter:{card:'summary_large_image',title:'WorkBridge — подбор персонала для бизнеса',description:'Понятный процесс поиска и отбора сотрудников под задачи бизнеса.',images:[`${siteUrl}/og.png`]},
  icons:{icon:`${assetBase}/icon.svg`},
  robots:{index:true,follow:true},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body className={geist.variable}>{children}</body></html>}
