import { useCallback, useEffect, useRef } from 'react';

export function useStoryNavigation(index: number, total: number, setIndex: (n: number) => void) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const go = useCallback((dir: number) => setIndex(Math.max(0, Math.min(total - 1, index + dir))), [index, total, setIndex]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && /INPUT|TEXTAREA|BUTTON/.test(e.target.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') go(1);
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') go(-1);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [go]);
  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button,a,input,[data-no-swipe]')) return;
    start.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!start.current) return;
    const dx = e.clientX - start.current.x; const dy = e.clientY - start.current.y;
    start.current = null;
    if (Math.abs(dx) > 72 && Math.abs(dx) > Math.abs(dy) * 1.35) go(dx < 0 ? 1 : -1);
  };
  return { onPointerDown, onPointerUp, onPointerCancel: () => { start.current = null; } };
}
