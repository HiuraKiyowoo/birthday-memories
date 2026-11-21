import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, HelpCircle, Mail, Music2, RotateCcw, X } from 'lucide-react';
import { birthday } from './config/birthday';

const pages = ['Birthday', 'Menu', 'Music', 'Letter', 'Memories', 'Surprise'];
const icons = [Music2, Camera, Mail, HelpCircle];

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
  return <motion.div className="dialog-scrim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.div className="intro-dialog" initial={{ scale: .8, y: 18 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .9 }}><div className="dialog-title"><span>♥ birthday.exe</span><button onClick={onNo} aria-label="Close">×</button></div><div className="dialog-content"><PixelCake/><p>Love, will you<br/>blow this?</p></div><div className="dialog-buttons"><button onClick={onYes}>Yes</button><button onClick={onNo}>No</button></div></motion.div></motion.div>;
}

export default function App() {
  const [page, setPage] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [letterOpen, setLetterOpen] = useState(false);
  const [wish, setWish] = useState(false);
  const [photo, setPhoto] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<{x:number;y:number}|null>(null);
  const lastWheel = useRef(0);
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
  return <main className="retro-app swipe-shell" onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={()=>setTouchStart(null)} onWheel={wheel}>
    {showIntro ? <motion.section key="birthday-intro" className="intro-screen" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="intro-pixel-star intro-star-one" aria-hidden="true">✦</div><div className="intro-pixel-star intro-star-two" aria-hidden="true">✧</div><div className="intro-pixel-star intro-star-three" aria-hidden="true">♥</div>
      <div className="intro-badge" aria-hidden="true">A LITTLE BIRTHDAY MEMORY</div>
      <IntroDialog onYes={()=>setShowIntro(false)} onNo={()=>setShowIntro(false)}/>
    </motion.section> : <>
    <AnimatePresence mode="wait"><motion.section key={page} className={`retro-page page-${page}`} initial={{opacity:0,y:-35}} animate={{opacity:1,y:0}} exit={{opacity:0,y:page===0?-25:25}} transition={{duration:.38,ease:[.22,1,.36,1]}}>
      {page===0&&<section className="greeting-page"><PixelForest/><div className="greeting-signs"><div className="paper-sign sign-happy">happy</div><div className="paper-sign sign-birthday">birthday,</div><div className="paper-sign sign-name">{birthday.recipient==='Someone Wonderful'?'bubby!':birthday.recipient+'!'}</div></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===1&&<section className="menu-page"><PixelForest/><div className="menu-icons">{icons.map((Icon,i)=><div key={i} className={`menu-icon icon-${i}`}><Icon size={27}/><span>{['MUSIC','PHOTOS','LETTER','WISH'][i]}</span></div>)}</div><div className="menu-hint">a little something for you <span>♡</span></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===2&&<section className="music-page"><div className="music-card"><div className="music-window-title"><span>♫ SPOTIFY PLAYLIST</span><span>♥</span></div><div className="record-side"><div className="track-info"><div className="mini-cover">♫</div><div><b>A little birthday playlist</b><small>For {birthday.recipient}</small><div className="equalizer" aria-hidden="true">{Array.from({length:16},(_,i)=><i key={i}/>)}</div></div></div><div className="vinyl spinning" aria-hidden="true"><span/></div></div><div className="spotify-embed-shell"><iframe title="Spotify birthday playlist" src={birthday.spotifyEmbedUrl} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin"/></div><a className="spotify-open" href={birthday.spotifyPlaylistUrl} target="_blank" rel="noreferrer" data-no-swipe>OPEN IN SPOTIFY ↗</a></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===3&&<section className="letter-page"><div className="letter-window"><div className="letter-toolbar"><span>✉ A LETTER FOR YOU</span><span>♡</span></div><div className="letter-paper"><div className="letter-stamp">FOR<br/>YOU</div><p className="letter-dear">Dear {birthday.recipient},</p><p className="letter-copy">{letterOpen?birthday.letter:`${birthday.letter.slice(0,190)}${birthday.letter.length>190?'…':''}`}</p>{!letterOpen&&<button className="read-more" onClick={()=>setLetterOpen(true)} data-no-swipe>READ THE WHOLE LETTER ▸</button>}<div className="letter-bouquet">🌷<br/>🌸</div><div className="letter-sign">{birthday.closing}<br/><i>{birthday.sender}</i> ♡</div></div></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===4&&<section className="gallery-page"><div className="gallery-title"><span>✦</span><div><small>OUR LITTLE CORNER</small><b>Seasons & memories</b></div><span>♡</span></div><div className="gallery-grid">{birthday.photos.map((p,i)=><button data-no-swipe className={`gallery-photo gallery-photo-${i}`} key={p.caption} onClick={()=>setPhoto(i)}><img src={p.src} loading="lazy" alt={p.caption}/><span>{p.caption}</span></button>)}</div><div className="gallery-footer">A FEW OF MY FAVORITE THINGS <span>✿</span></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===5&&<section className="surprise-page"><div className="surprise-card"><div className="surprise-title"><span>★ BIRTHDAY WISH ★</span><span>♡</span></div><div className="surprise-content"><div className="surprise-art"><div className="party-hat">▲</div><div className="pixel-person">{birthday.recipient==='Someone Wonderful'?'☺':'♥'}</div><div className="party-cake">🎂</div><span className="confetti-dot dot-a">✦</span><span className="confetti-dot dot-b">✧</span><span className="confetti-dot dot-c">★</span></div><div className="wish-list"><h3>Today's wishes</h3><p>✦ lots of laughter</p><p>✦ soft, sunny days</p><p>✦ all your dreams</p><p>✦ love that stays</p></div></div><p className="surprise-message">{wish?'Wish sent! The universe is listening.':birthday.greeting}</p><button className="wish-button" onClick={()=>setWish(true)} data-no-swipe>{wish?'WISH SENT! ✨':'MAKE A WISH ✦'}</button></div><button className="replay-link" onClick={()=>{setPage(0);setShowIntro(true);setWish(false)}} data-no-swipe><RotateCcw size={13}/> REPLAY</button></section>}
    </motion.section></AnimatePresence>
    <div className="page-progress" aria-label={`Page ${page+1} of 6`}>{pages.map((_,i)=><i key={i} className={i===page?'active':''}/>)}</div>
    <AnimatePresence>{photo!==null&&<motion.div className="photo-modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setPhoto(null)}><div className="photo-modal-card" onClick={e=>e.stopPropagation()}><button onClick={()=>setPhoto(null)} aria-label="Close" data-no-swipe><X size={18}/></button><img src={birthday.photos[photo].src} alt={birthday.photos[photo].caption}/><p>{birthday.photos[photo].caption}</p></div></motion.div>}</AnimatePresence>
    </>}
    {birthday.musicSrc&&<audio id="bday-audio" src={birthday.musicSrc} loop preload="none"/>}
  </main>;
}
