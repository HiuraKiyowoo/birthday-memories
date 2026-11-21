import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, HelpCircle, Mail, Music2, Play, Pause, Volume2, RotateCcw, X } from 'lucide-react';
import { birthday } from './config/birthday';

const pages = ['Birthday', 'Menu', 'Music', 'Letter', 'Memories', 'Surprise'];
const icons = [Music2, Camera, Mail, HelpCircle];

function PixelForest() {
  return <div className="pixel-forest" aria-hidden="true"><div className="pixel-cloud cloud-left"/><div className="pixel-cloud cloud-right"/><div className="pixel-sun"/><div className="pixel-tree tree-one"/><div className="pixel-tree tree-two"/><div className="pixel-tree tree-three"/><div className="pixel-tree tree-four"/><div className="pixel-tree tree-five"/><div className="pixel-hill"/></div>;
}

function IntroDialog({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  return <motion.div className="dialog-scrim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><motion.div className="intro-dialog" initial={{ scale: .8, y: 18 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .9 }}><div className="dialog-title"><span>♥ birthday.exe</span><button onClick={onNo} aria-label="Close">×</button></div><div className="dialog-content"><div className="pixel-cake">🎂</div><p>Love, will you<br/>blow this?</p></div><div className="dialog-buttons"><button onClick={onYes}>Yes</button><button onClick={onNo}>No</button></div></motion.div></motion.div>;
}

export default function App() {
  const [page, setPage] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [wish, setWish] = useState(false);
  const [photo, setPhoto] = useState<number | null>(null);
  const [volume, setVolume] = useState(.35);
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
    <AnimatePresence mode="wait"><motion.section key={page} className={`retro-page page-${page}`} initial={{opacity:0,y:-35}} animate={{opacity:1,y:0}} exit={{opacity:0,y:page===0?-25:25}} transition={{duration:.38,ease:[.22,1,.36,1]}}>
      {page===0&&<section className="greeting-page"><PixelForest/><div className="greeting-signs"><div className="paper-sign sign-happy">happy</div><div className="paper-sign sign-birthday">birthday,</div><div className="paper-sign sign-name">{birthday.recipient==='Someone Wonderful'?'bubby!':birthday.recipient+'!'}</div></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===1&&<section className="menu-page"><PixelForest/><div className="menu-icons">{icons.map((Icon,i)=><div key={i} className={`menu-icon icon-${i}`}><Icon size={27}/><span>{['MUSIC','PHOTOS','LETTER','WISH'][i]}</span></div>)}</div><div className="menu-hint">a little something for you <span>♡</span></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===2&&<section className="music-page"><div className="music-card"><div className="music-window-title"><span>♫ NOW PLAYING</span><span>♥</span></div><div className="record-side"><div className="track-info"><div className="mini-cover">♫</div><div><b>A little birthday song</b><small>For {birthday.recipient}</small><div className="equalizer">{Array.from({length:16},(_,i)=><i key={i}/>)}</div></div></div><button className={`vinyl ${musicOn?'spinning':''}`} onClick={()=>setMusicOn(!musicOn)} aria-label="Toggle music" data-no-swipe><span/></button></div><div className="player-controls"><button onClick={()=>setMusicOn(!musicOn)} data-no-swipe>{musicOn?<Pause size={17}/>:<Play size={17}/>}</button><div className="track-progress"><span/></div><span className="time-label">{musicOn?'♫':'00:00'}</span></div><div className="volume-row"><Volume2 size={15}/><input data-no-swipe type="range" min="0" max="1" step=".05" value={volume} onChange={e=>setVolume(Number(e.target.value))}/><span>{Math.round(volume*100)}%</span></div>{!birthday.musicSrc&&<small className="audio-note">Add a music file in birthday.ts to play your song here.</small>}</div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===3&&<section className="letter-page"><div className="letter-window"><div className="letter-toolbar"><span>✉ A LETTER FOR YOU</span><span>♡</span></div><div className="letter-paper"><div className="letter-stamp">FOR<br/>YOU</div><p className="letter-dear">Dear {birthday.recipient},</p><p className="letter-copy">{letterOpen?birthday.letter:`${birthday.letter.slice(0,190)}${birthday.letter.length>190?'…':''}`}</p>{!letterOpen&&<button className="read-more" onClick={()=>setLetterOpen(true)} data-no-swipe>READ THE WHOLE LETTER ▸</button>}<div className="letter-bouquet">🌷<br/>🌸</div><div className="letter-sign">{birthday.closing}<br/><i>{birthday.sender}</i> ♡</div></div></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===4&&<section className="gallery-page"><div className="gallery-title"><span>✦</span><div><small>OUR LITTLE CORNER</small><b>Seasons & memories</b></div><span>♡</span></div><div className="gallery-grid">{birthday.photos.map((p,i)=><button data-no-swipe className={`gallery-photo gallery-photo-${i}`} key={p.caption} onClick={()=>setPhoto(i)}><img src={p.src} loading="lazy" alt={p.caption}/><span>{p.caption}</span></button>)}</div><div className="gallery-footer">A FEW OF MY FAVORITE THINGS <span>✿</span></div><div className="swipe-hint"><span>↓</span> SWIPE DOWN <span>↓</span></div></section>}
      {page===5&&<section className="surprise-page"><div className="surprise-card"><div className="surprise-title"><span>★ BIRTHDAY WISH ★</span><span>♡</span></div><div className="surprise-content"><div className="surprise-art"><div className="party-hat">▲</div><div className="pixel-person">{birthday.recipient==='Someone Wonderful'?'☺':'♥'}</div><div className="party-cake">🎂</div><span className="confetti-dot dot-a">✦</span><span className="confetti-dot dot-b">✧</span><span className="confetti-dot dot-c">★</span></div><div className="wish-list"><h3>Today's wishes</h3><p>✦ lots of laughter</p><p>✦ soft, sunny days</p><p>✦ all your dreams</p><p>✦ love that stays</p></div></div><p className="surprise-message">{wish?'Wish sent! The universe is listening.':birthday.greeting}</p><button className="wish-button" onClick={()=>setWish(true)} data-no-swipe>{wish?'WISH SENT! ✨':'MAKE A WISH ✦'}</button></div><button className="replay-link" onClick={()=>{setPage(0);setShowIntro(true);setWish(false)}} data-no-swipe><RotateCcw size={13}/> REPLAY</button></section>}
    </motion.section></AnimatePresence>
    <div className="page-progress" aria-label={`Page ${page+1} of 6`}>{pages.map((_,i)=><i key={i} className={i===page?'active':''}/>)}</div>
    <AnimatePresence>{showIntro&&<IntroDialog onYes={()=>setShowIntro(false)} onNo={()=>setShowIntro(false)}/>}</AnimatePresence>
    <AnimatePresence>{photo!==null&&<motion.div className="photo-modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setPhoto(null)}><div className="photo-modal-card" onClick={e=>e.stopPropagation()}><button onClick={()=>setPhoto(null)} aria-label="Close" data-no-swipe><X size={18}/></button><img src={birthday.photos[photo].src} alt={birthday.photos[photo].caption}/><p>{birthday.photos[photo].caption}</p></div></motion.div>}</AnimatePresence>
    {birthday.musicSrc&&<audio id="bday-audio" src={birthday.musicSrc} loop preload="none"/>}
  </main>;
}
