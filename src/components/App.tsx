import { useSize } from '@/hooks/useSize';

import '@/components/app.css';

export function App() {
  const html = document.documentElement;

  const { size: percentSize, ref: percentRef } = useSize();
  const { size: vSize, ref: vRef } = useSize();
  const { size: vminSize, ref: vminRef } = useSize();
  const { size: vmaxSize, ref: vmaxRef } = useSize();

  return (
    <>
      <div
        className="%"
        ref={percentRef}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
        }}
      ></div>
      <div
        className="v"
        ref={vRef}
        style={{
          position: 'absolute',
          height: '100vh',
          width: '100vw',
        }}
      ></div>
      <div
        className="vmin"
        ref={vminRef}
        style={{
          position: 'absolute',
          height: '100vmin',
          width: '100vmin',
        }}
      ></div>
      <div
        className="vmax"
        ref={vmaxRef}
        style={{
          position: 'absolute',
          height: '100vmax',
          width: '100vmax',
        }}
      ></div>
      <div className="app">
        <header className="header">Screen Inspector</header>
        <main className="main">
          <div className="column">
            <div className="row">
              <span className="label">window.innerWidth:</span>{' '}
              <span>{window.innerWidth}</span>
            </div>
            <div className="row">
              <span className="label">html.clientWidth:</span>{' '}
              <span>{html.clientWidth}</span>
            </div>
            <div className="row">
              <span className="label">% width:</span>{' '}
              <span>{percentSize.width}</span>
            </div>
            <div className="row">
              <span className="label">vw:</span> <span>{vSize.width}</span>
            </div>
            <div className="row">
              <span className="label">vmin width:</span>{' '}
              <span>{vminSize.width}</span>
            </div>
            <div className="row">
              <span className="label">vmax width:</span>{' '}
              <span>{vmaxSize.width}</span>
            </div>
          </div>

          <div className="column">
            <div className="row">
              <span className="label">window.innerHeight:</span>{' '}
              <span>{window.innerHeight}</span>
            </div>
            <div className="row">
              <span className="label">html.clientHeight:</span>{' '}
              <span>{html.clientHeight}</span>
            </div>
            <div className="row">
              <span className="label">% height:</span>{' '}
              <span>{percentSize.height}</span>
            </div>
            <div className="row">
              <span className="label">vh:</span> <span>{vSize.height}</span>
            </div>
            <div className="row">
              <span className="label">vmin height:</span>{' '}
              <span>{vminSize.height}</span>
            </div>
            <div className="row">
              <span className="label">vmax height:</span>{' '}
              <span>{vmaxSize.height}</span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
