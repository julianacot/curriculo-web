'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Hangman.module.css';

const palavras = [
  'GIRAFA', 'ACENDER', 'AFILHADO', 'BASQUETE', 'CONTEXTO', 'DESALMADO',
  'ESFIRRA', 'IMPACTO', 'OFTALMOLOGISTA', 'QUARENTENA', 'REPORTAGEM', 
  'SINO', 'VICERA', 'AMENDOIM', 'MANJERICÃO', 'MENTA', 'MOEDA', 'PNEUMONIA',
  'TRILOGIA', 'ZEBRA', 'XADREZ', 'YAKUZA', 'WIFI', 'VAGABUNDO', 'UTOPIA',
  'TATUAGEM', 'SABONETE', 'RINOCERONTE', 'QUIMICA', 'PTERODATILO', 'ORGANOGRAMA'
];

export default function Forca() {
  const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
  const [palavra] = useState(palavraAleatoria);
  const [tentativas, setTentativas] = useState(6);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [letrasCorretas, setLetrasCorretas] = useState([]);

  const acertoRef = useRef(null);
  const erroRef = useRef(null);
  const vitoriaRef = useRef(null);
  const clickRef = useRef(null); // som do clique

  const verificarLetra = (letra) => {
    if (palavra.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
      acertoRef.current?.play();
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      setTentativas(tentativas - 1);
      erroRef.current?.play(); 
    }
  };

  const palavraExibida = palavra
    .split('')
    .map((letra) => (letrasCorretas.includes(letra) ? letra : '_'))
    .join(' ');

  const venceu = palavraExibida.replace(/ /g, '') === palavra;
  const perdeu = tentativas <= 0;

  useEffect(() => {
    if (venceu) vitoriaRef.current?.play();
  }, [venceu]);

  const getForcaImage = () => {
    const forcaStages = [
      'forca-0.png',
      'forca-1.png',
      'forca-2.png',
      'forca-3.png',
      'forca-4.png',
      'forca-5.png',
      'forca-6.png'
    ];
    return `/images/${forcaStages[6 - tentativas]}`;
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: '#0f3017',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 className={styles.titulo} style={{ color: '#b8f7a9ff', textAlign: 'center' }}>
        Jogo da Forca
      </h1>

      <div className={styles.forca} style={{ textAlign: 'center' }}>
        <img src={getForcaImage()} alt="Forca" />
      </div>

      <p
        className={styles.textoMaior}
        style={{ color: '#86f08fff', textAlign: 'center', fontSize: '2rem', margin: '15px 0' }}
      >
        {palavraExibida}
      </p>

      <p className={styles.texto} style={{ color: '#aff0a9ff', textAlign: 'center', fontSize: '1.2rem' }}>
        Tentativas restantes: {tentativas}
      </p>
      <p className={styles.texto} style={{ color: '#aff0a9ff', textAlign: 'center', fontSize: '1.2rem' }}>
        Letras erradas: {letrasErradas.join(', ')}
      </p>

      <div className={styles.teclado} style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '400px',
        margin: '20px auto'
      }}>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letra) => {
          const desativado = letrasErradas.includes(letra) || letrasCorretas.includes(letra);
          return (
            <button
              key={letra}
              className={`${styles.botao} ${desativado ? styles.botaoDesativado : ''}`}
              onClick={() => {
                verificarLetra(letra);
                clickRef.current?.play().catch(() => {});
              }}
              disabled={desativado}
            >
              {letra}
            </button>
          );
        })}
      </div>

      {venceu && <p className={styles.texto} style={{ color: '#00ff00', textAlign: 'center' }}>🎉 Parabéns, você venceu!</p>}
      {perdeu && <p className={styles.texto} style={{ color: '#ff0000', textAlign: 'center' }}>❌ Você perdeu! A palavra era <strong>{palavra}</strong>.</p>}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
        <button
          className={styles.botaoReiniciar}
          style={{ minWidth: '120px' }}
          onClick={() => {
            clickRef.current?.play().catch(() => {});
            window.location.reload();
          }}
        >
          Reiniciar
        </button>

        <button
          className={styles.botaoReiniciar}
          style={{ minWidth: '120px' }}
          onClick={() => {
            clickRef.current?.play().catch(() => {});
            window.location.href = '/';
          }}
        >
          Home
        </button>
      </div>

      {/* Sons */}
      <audio ref={acertoRef} src="/assets/imagem/audio/correct-6033.mp3" preload="auto" />
      <audio ref={erroRef} src="/assets/imagem/audio/windows-error-sound-effect-35894.mp3" preload="auto" />
      <audio ref={vitoriaRef} src="/assets/imagem/audio/you-win-sequence-2-183949.mp3" preload="auto" />
      <audio ref={clickRef} src="/assets/imagem/audio/click.mp3" preload="auto" />
    </div>
  );
}
