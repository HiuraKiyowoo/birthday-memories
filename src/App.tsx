import { useMemo, useRef, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, HelpCircle, Mail, Music2, RotateCcw, X } from 'lucide-react';
import { birthday } from './config/birthday';

const pages = ['Birthday', 'Menu', 'Music', 'Letter', 'Memories', 'Surprise'];
const icons = [Music2, Camera, Mail, HelpCircle];
const floatingNotes = [
  'Semoga hari ini penuh tawa, hal-hal manis, dan kejutan kecil buat kamu.',
  'Semoga semua yang kamu perjuangkan pelan-pelan jadi nyata. Kamu pasti bisa.',
  'Jangan lupa senyum yaa—kamu pantas mendapat banyak hal baik.',
  'Selalu ada yang sayang dan dukung kamu. Happy birthday, Nopayy!',
];
const spotifyPlaylistId = birthday.spotifyPlaylistUrl.match(/spotify\.com\/(?:embed\/)?playlist\/([A-Za-z0-9]+)/)?.[1] ?? '';
const spotifyPlaylistEmbedUrl = spotifyPlaylistId ? `https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator&theme=0` : '';

function PixelEnvelope() {
  return <svg className="pixel-envelope-art" viewBox="0 0 32 24" role="presentation" shapeRendering="crispEdges"><rect x="2" y="3" width="28" height="19" fill="#fff3dc" stroke="#58413c" strokeWidth="3"/><path d="M4 6 16 15 28 6" fill="none" stroke="#a65a70" strokeWidth="3"/><path d="M4 19 12 12M28 19l-8-7" fill="none" stroke="#a65a70" strokeWidth="2"/></svg>;
}

function PixelSprout({ color }: { color: string }) {
  return <svg className="pixel-sprout-sprite" viewBox="0 0 32 32" role="presentation" shapeRendering="crispEdges"><rect x="14" y="15" width="4" height="16" fill="#587349"/><rect x="7" y="9" width="8" height="5" fill={color}/><rect x="4" y="12" width="6" height="4" fill={color}/><rect x="17" y="5" width="8" height="5" fill={color}/><rect x="22" y="9" width="6" height="4" fill={color}/><rect x="11" y="20" width="4" height="3" fill="#789457"/><rect x="18" y="25" width="4" height="3" fill="#789457"/></svg>;
}

function PixelTree({broadleaf=false}:{broadleaf?:boolean}) {
  return <svg className={`pixel-tree-sprite ${broadleaf?'broadleaf':''}`} viewBox="0 0 32 40" role="presentation" shapeRendering="crispEdges">
    {broadleaf?<><rect x="14" y="31" width="4" height="9" fill="#76513b"/><rect x="12" y="7" width="8" height="4" fill="#3e9871"/><rect x="8" y="11" width="16" height="4" fill="#358761"/><rect x="4" y="15" width="24" height="4" fill="#31835f"/><rect x="1" y="19" width="30" height="8" fill="#398d66"/><rect x="5" y="27" width="22" height="4" fill="#347e5d"/><rect x="9" y="12" width="4" height="4" fill="#77bb78"/><rect x="5" y="17" width="4" height="4" fill="#69b371"/><rect x="21" y="15" width="4" height="4" fill="#52a66d"/><rect x="14" y="21" width="4" height="4" fill="#76bd79"/><rect x="23" y="22" width="4" height="4" fill="#287656"/></>:<><rect x="14" y="1" width="4" height="3" fill="#51a879"/><rect x="11" y="4" width="10" height="4" fill="#398d66"/><rect x="8" y="8" width="16" height="4" fill="#35845f"/><rect x="5" y="12" width="22" height="4" fill="#3c966a"/><rect x="2" y="16" width="28" height="4" fill="#32845e"/><rect x="0" y="20" width="32" height="4" fill="#398e64"/><rect x="4" y="24" width="24" height="4" fill="#307c59"/><rect x="8" y="28" width="16" height="3" fill="#398a5e"/><rect x="14" y="31" width="4" height="9" fill="#76513b"/><rect x="14" y="5" width="3" height="3" fill="#83c17d"/><rect x="9" y="9" width="4" height="3" fill="#70b978"/><rect x="18" y="13" width="4" height="3" fill="#70b978"/><rect x="5" y="17" width="4" height="3" fill="#72b876"/><rect x="21" y="21" width="5" height="3" fill="#69ae71"/></>}
  </svg>;
}

function PixelCake() {
  return <svg className="pixel-cake-art" viewBox="0 0 48 48" role="img" aria-label="Pixel art birthday cake" shapeRendering="crispEdges"><rect x="12" y="5" width="3" height="10" fill="#79bce0"/><rect x="22" y="3" width="3" height="12" fill="#f1c45f"/><rect x="32" y="5" width="3" height="10" fill="#df8294"/><rect x="11" y="3" width="5" height="3" fill="#fff2a7"/><rect x="21" y="1" width="5" height="3" fill="#fff2a7"/><rect x="31" y="3" width="5" height="3" fill="#fff2a7"/><rect x="7" y="17" width="34" height="7" fill="#f8e4bf"/><rect x="4" y="24" width="40" height="12" fill="#e9ad75"/><rect x="7" y="28" width="34" height="9" fill="#fff0cf"/><rect x="2" y="37" width="44" height="5" fill="#ba6574"/><rect x="8" y="21" width="4" height="3" fill="#df7e84"/><rect x="20" y="21" width="4" height="3" fill="#df7e84"/><rect x="32" y="21" width="4" height="3" fill="#df7e84"/><rect x="10" y="31" width="4" height="4" fill="#d65e6a"/><rect x="22" y="30" width="4" height="4" fill="#7eaa6b"/><rect x="34" y="31" width="4" height="4" fill="#d65e6a"/></svg>;
}

function PixelForest() {
  return <div className="pixel-forest" aria-hidden="true">
    <svg className="pixel-cloud cloud-left" viewBox="0 0 96 48" shapeRendering="crispEdges"><rect x="4" y="16" width="84" height="28" fill="#d88db8"/><rect x="16" y="8" width="16" height="12" fill="#d88db8"/><rect x="32" y="0" width="32" height="20" fill="#d88db8"/><rect x="64" y="8" width="16" height="12" fill="#d88db8"/><rect x="8" y="12" width="76" height="28" fill="#f5b6d6"/><rect x="20" y="4" width="40" height="16" fill="#f5b6d6"/><rect x="14" y="14" width="24" height="5" fill="#ffe4ef"/><rect x="39" y="6" width="19" height="5" fill="#ffe4ef"/><rect x="65" y="16" width="13" height="4" fill="#fbd5e6"/></svg>
    <svg className="pixel-cloud cloud-right" viewBox="0 0 96 48" shapeRendering="crispEdges"><rect x="4" y="16" width="84" height="28" fill="#d88db8"/><rect x="16" y="8" width="16" height="12" fill="#d88db8"/><rect x="32" y="0" width="32" height="20" fill="#d88db8"/><rect x="64" y="8" width="16" height="12" fill="#d88db8"/><rect x="8" y="12" width="76" height="28" fill="#f5b6d6"/><rect x="20" y="4" width="40" height="16" fill="#f5b6d6"/><rect x="14" y="14" width="24" height="5" fill="#ffe4ef"/><rect x="39" y="6" width="19" height="5" fill="#ffe4ef"/><rect x="65" y="16" width="13" height="4" fill="#fbd5e6"/></svg>
    <svg className="pixel-cloud cloud-small" viewBox="0 0 48 24" shapeRendering="crispEdges"><rect x="4" y="10" width="40" height="12" fill="#fff8e7"/><rect x="12" y="4" width="20" height="10" fill="#fff8e7"/><rect x="16" y="5" width="12" height="4" fill="#fff"/></svg>
    <svg className="pixel-sun" viewBox="0 0 24 24" shapeRendering="crispEdges"><rect x="8" y="0" width="8" height="4" fill="#fff0bc"/><rect x="4" y="4" width="16" height="4" fill="#fff0bc"/><rect x="0" y="8" width="24" height="8" fill="#fff0bc"/><rect x="4" y="16" width="16" height="4" fill="#fff0bc"/><rect x="8" y="20" width="8" height="4" fill="#fff0bc"/><rect x="8" y="8" width="8" height="8" fill="#fff9d7"/><rect x="8" y="8" width="4" height="4" fill="#fff"/></svg>
    <div className="pixel-tree distant-tree distant-one"><PixelTree/></div><div className="pixel-tree distant-tree distant-two"><PixelTree broadleaf/></div><div className="pixel-tree distant-tree distant-three"><PixelTree/></div>
    <div className="pixel-tree tree-one"><PixelTree/></div><div className="pixel-tree tree-two"><PixelTree/></div><div className="pixel-tree tree-three"><PixelTree broadleaf/></div><div className="pixel-tree tree-four"><PixelTree/></div><div className="pixel-tree tree-five"><PixelTree broadleaf/></div>
    <svg className="pixel-flower flower-one" viewBox="0 0 16 16" shapeRendering="crispEdges"><rect x="6" y="0" width="4" height="4" fill="#fff7e7"/><rect x="0" y="6" width="4" height="4" fill="#fff7e7"/><rect x="12" y="6" width="4" height="4" fill="#fff7e7"/><rect x="6" y="12" width="4" height="4" fill="#fff7e7"/><rect x="5" y="5" width="6" height="6" fill="#f4c95d"/><rect x="7" y="10" width="2" height="6" fill="#4d9362"/></svg>
    <svg className="pixel-flower flower-two" viewBox="0 0 16 16" shapeRendering="crispEdges"><rect x="6" y="0" width="4" height="4" fill="#f3bad5"/><rect x="0" y="6" width="4" height="4" fill="#f3bad5"/><rect x="12" y="6" width="4" height="4" fill="#f3bad5"/><rect x="6" y="12" width="4" height="4" fill="#f3bad5"/><rect x="5" y="5" width="6" height="6" fill="#fff1a9"/><rect x="7" y="10" width="2" height="6" fill="#4d9362"/></svg>
    <svg className="pixel-flower flower-three" viewBox="0 0 16 16" shapeRendering="crispEdges"><rect x="6" y="0" width="4" height="4" fill="#fff7e7"/><rect x="0" y="6" width="4" height="4" fill="#fff7e7"/><rect x="12" y="6" width="4" height="4" fill="#fff7e7"/><rect x="6" y="12" width="4" height="4" fill="#fff7e7"/><rect x="5" y="5" width="6" height="6" fill="#ec9ebf"/><rect x="7" y="10" width="2" height="6" fill="#4d9362"/></svg>
    <div className="pixel-hill"/>
  </div>;
}

function IntroDialog({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  return <motion.div className="dialog-scrim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.div className="intro-dialog" initial={{ scale: .8, y: 18 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .9 }}><div className="dialog-title"><span>♥ birthday.exe</span><button onClick={onNo} aria-label="Close">×</button></div><div className="dialog-content"><PixelCake/><p>Do you want<br/>to open this?</p></div><div className="dialog-buttons"><button onClick={onYes}>yes</button><button onClick={onNo}>no</button></div></motion.div></motion.div>;
}

export default function App() {
  const [page, setPage] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [photo, setPhoto] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<{x:number;y:number}|null>(null);
  const [greetingPulse, setGreetingPulse] = useState(false);
  const [surpriseActive, setSurpriseActive] = useState(false);
  const [openNote, setOpenNote] = useState<number | null>(null);
  const hangingNotes = useMemo(() => {
    const count = page === 5 ? 4 : 2;
    return Array.from({ length: count }, (_, i) => ({
      index: i,
      left: Math.min(88, Math.max(5, (i + .5) * (100 / count) + (Math.random() - .5) * (count === 4 ? 13 : 17))),
      cord: 8 + Math.random() * 8,
      duration: 2.8 + Math.random() * 1.8,
      delay: i * .11 + Math.random() * .14,
      angle: 3.5 + Math.random() * 3,
    }));
  }, [page]);
  const lastWheel = useRef(0);
  const greetingTimer = useRef<number | null>(null);
  const surpriseTimer = useRef<number | null>(null);
  const triggerGreeting = () => {
    setGreetingPulse(true);
    if (greetingTimer.current !== null) window.clearTimeout(greetingTimer.current);
    greetingTimer.current = window.setTimeout(() => setGreetingPulse(false), 850);
  };
  const triggerSurprise = () => {
    setSurpriseActive(true);
    if (surpriseTimer.current !== null) window.clearTimeout(surpriseTimer.current);
    surpriseTimer.current = window.setTimeout(() => setSurpriseActive(false), 2600);
  };
  const move = (dir: number) => setPage((p) => Math.max(0, Math.min(pages.length - 1, p + dir)));
  const startSwipe = (x:number,y:number,target:EventTarget|null) => {
    if (showIntro || (target instanceof HTMLElement && target.closest('button,input,a,[data-no-swipe]'))) return;
    setTouchStart({x,y});
  };
  const endSwipe = (x:number,y:number) => {
    if (!touchStart) return;
    const dx=x-touchStart.x, dy=y-touchStart.y;
    if (Math.abs(dy)>65 && Math.abs(dy)>Math.abs(dx)*1.25) move(dy>0?1:-1);
    setTouchStart(null);
  };
  const wheel = (e:React.WheelEvent) => {
    if (showIntro || Math.abs(e.deltaY)<45 || Date.now()-lastWheel.current<650) return;
    move(e.deltaY>0?1:-1); lastWheel.current=Date.now();
  };
  const onPointerDown=(e:React.PointerEvent)=>startSwipe(e.clientX,e.clientY,e.target);
  const onPointerUp=(e:React.PointerEvent)=>endSwipe(e.clientX,e.clientY);
  return <main className="retro-app swipe-shell" style={{'--birthday-wallpaper':`url("${birthday.backgroundImage}")`} as CSSProperties} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={()=>setTouchStart(null)} onWheel={wheel}>
    {showIntro ? <motion.section key="birthday-intro" className="intro-screen" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="intro-pixel-star intro-star-one" aria-hidden="true">✦</div><div className="intro-pixel-star intro-star-two" aria-hidden="true">✧</div><div className="intro-pixel-star intro-star-three" aria-hidden="true">♥</div>
      <div className="intro-badge" aria-hidden="true">A LITTLE BIRTHDAY MEMORY</div>
      <IntroDialog onYes={()=>setShowIntro(false)} onNo={()=>setShowIntro(false)}/>
    </motion.section> : <>
    <AnimatePresence mode="wait"><motion.section key={page} className={`retro-page page-${page}`} initial={{opacity:0,y:-35}} animate={{opacity:1,y:0}} exit={{opacity:0,y:page===0?-25:25}} transition={{duration:.38,ease:[.22,1,.36,1]}}>
      {page===0&&<section className="greeting-page"><PixelForest/><button className={`greeting-signs ${greetingPulse?'is-pulsing':''}`} onClick={triggerGreeting} aria-label="Ketuk untuk melihat ucapan bergerak"><span className="paper-sign sign-happy">happy</span><span className="paper-sign sign-birthday">birthday,</span><span className="paper-sign sign-name">{birthday.recipient==='Someone Wonderful'?'nopayy!':birthday.recipient+'!'}</span></button><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===1&&<section className="menu-page"><PixelForest/><div className="menu-icons">{icons.map((Icon,i)=><div key={i} className={`menu-icon icon-${i}`} aria-label={['Music','Photos','Letter','Wish'][i]}><span className="menu-icon-index">0{i+1}</span><div className="menu-icon-art"><Icon size={27} strokeWidth={2.25}/><i aria-hidden="true"/></div><span className="menu-icon-label">{['MUSIC','PHOTOS','LETTER','WISH'][i]}</span></div>)}</div><div className="menu-hint">a little something for you <span>♡</span></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===2&&<section className="music-page"><div className="playlist-card"><div className="playlist-topline"><span>♫ A LITTLE SOUNDTRACK</span><span className="playlist-ready"><i/> PLAYLIST READY</span></div><div className="playlist-heading"><b>Your playlist</b><span>Press play and enjoy.</span></div>{spotifyPlaylistEmbedUrl?<iframe className="spotify-playlist-embed" title="Spotify playlist player" src={spotifyPlaylistEmbedUrl} loading="lazy" allow="encrypted-media; fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin"/>:<p className="playlist-unavailable" role="status">Playlist link unavailable.</p>}<a className="playlist-open" href={birthday.spotifyPlaylistUrl} target="_blank" rel="noreferrer" data-no-swipe><span>OPEN PLAYLIST IN SPOTIFY</span><b>↗</b></a></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===3&&<section className="letter-page"><div className="letter-window"><div className="letter-toolbar"><span>✉ A LETTER FOR YOU</span><span>♡</span></div><div className="letter-paper"><div className="letter-stamp">FOR<br/>YOU</div><p className="letter-copy">{birthday.letter}</p><div className="letter-sign"><span>{birthday.closing}</span><span className="letter-hug" role="img" aria-label="pelukan">🤗</span></div></div></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===4&&<section className="gallery-page"><div className="gallery-title"><b>photo</b></div><div className="gallery-grid">{birthday.photos.map((p,i)=><button data-no-swipe className={`gallery-photo gallery-photo-${i}`} key={p.caption} onClick={()=>setPhoto(i)}><img src={p.src} loading="lazy" alt={p.caption}/></button>)}</div><div className="gallery-footer">A FEW OF MY FAVORITE THINGS <span>✿</span></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===5&&<section className="surprise-page"><div className="surprise-floaters" aria-hidden="true"><span className="surprise-word word-one">happy birthday</span><span className="surprise-word word-two">all the best</span><span className="surprise-word word-three">stay happy</span><span className="surprise-word word-four">lots of love</span><i className="surprise-particle particle-one">✦</i><i className="surprise-particle particle-two">♡</i><i className="surprise-particle particle-three">✧</i><i className="surprise-particle particle-four">✦</i><i className="surprise-particle particle-five">·</i><i className="surprise-particle particle-six">·</i></div><div className="birthday-sticker-wrap"><img className="birthday-sticker" src={birthday.finalArtwork} alt="Foto Nopayy untuk ucapan ulang tahun"/></div><button className="surprise-trigger" onClick={triggerSurprise} data-no-swipe>MAKE A WISH <span>✦</span></button>{surpriseActive&&<div className="surprise-burst" aria-live="polite"><p>YOU DESERVE ALL THE HAPPINESS!</p><i className="burst-piece burst-one">✦</i><i className="burst-piece burst-two">✿</i><i className="burst-piece burst-three">♥</i><i className="burst-piece burst-four">✦</i><i className="burst-piece burst-five">✧</i><i className="burst-piece burst-six">✿</i><i className="burst-piece burst-seven">♥</i><i className="burst-piece burst-eight">✦</i><i className="burst-piece burst-nine">✧</i><i className="burst-piece burst-ten">✿</i></div>}<button className="replay-link" onClick={()=>{setPage(0);setShowIntro(true)}} data-no-swipe><RotateCcw size={13}/> REPLAY</button></section>}
      <div className="hanging-notes" aria-label="Surat kecil di tiap halaman">{hangingNotes.map(({index,left,cord,duration,delay,angle})=><button key={index} className="hanging-note" style={{left:`${left}%`,'--cord-length':`${cord}vh`,'--sway-duration':`${duration}s`,'--drop-delay':`${delay}s`,'--sway-angle':`${angle}deg`} as CSSProperties} onClick={()=>setOpenNote(index)} aria-label={`Buka surat kecil ${index+1}`} data-no-swipe><span className="note-cord"/><span className="note-envelope"><PixelEnvelope/></span></button>)}</div>
      <div className="page-sprouts" aria-hidden="true">{['#88a85a','#d4a15e','#76a884','#c87895','#93a95a'].map((color,i)=><i key={i}><PixelSprout color={color}/></i>)}</div>
    </motion.section></AnimatePresence>
    <div className="page-progress" aria-label={`Page ${page+1} of 6`}>{pages.map((_,i)=><i key={i} className={i===page?'active':''}/>)}</div>
    <AnimatePresence>{photo!==null&&<motion.div className="photo-modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setPhoto(null)}><div className="photo-modal-card" onClick={e=>e.stopPropagation()}><button onClick={()=>setPhoto(null)} aria-label="Close" data-no-swipe><X size={18}/></button><img src={birthday.photos[photo].src} alt={birthday.photos[photo].caption}/><p>{birthday.photos[photo].caption}</p></div></motion.div>}</AnimatePresence>
    <AnimatePresence>{openNote!==null&&<motion.div className="note-modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpenNote(null)} data-no-swipe><motion.div className="note-modal-card" initial={{y:24,scale:.88}} animate={{y:0,scale:1}} exit={{y:12,scale:.94}} onClick={e=>e.stopPropagation()}><div className="note-modal-top"><span><Mail size={16}/> A LITTLE NOTE</span><button onClick={()=>setOpenNote(null)} aria-label="Tutup surat"><X size={16}/></button></div><p>{floatingNotes[openNote]}</p><span className="note-modal-sign">— with love ♡</span></motion.div></motion.div>}</AnimatePresence>
    </>}
  </main>;
}
