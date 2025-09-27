'use client';

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./Button.module.css";
import Link from "next/link";

export default function Home() {
  const audioRef = useRef(null);

  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Estados do formulário de contato
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleEnviar = (e) => {
    e.preventDefault();
    alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div
      style={{
        backgroundColor: "#e9f1da",
        minHeight: "200vh",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        border: "60px solid #4a7a4a",
        borderRadius: "5px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <header
        style={{
          width: "95%",
          maxWidth: "1350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div style={{ flex: "0 auto" }}>
          <div
            style={{
              position: "relative",
              width: 220,
              height: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: -120,
                width: 180,
                height: 360,
                background: "#c0d4b5",
                borderRadius: "12px",
                zIndex: 0,
              }}
            />
            <Image
              src="/assets/imagem/foto.png"
              height={280}
              width={160}
              alt="Foto de Juliana Tenório"
              style={{
                borderRadius: "20px",
                objectFit: "cover",
                zIndex: 1,
                position: "relative",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                top: "100px",
                left: "-70px",
              }}
            />
          </div>
        </div>
        <div style={{ flex: "1 1 auto", textAlign: "left", marginLeft: "-120px" }}>
          <h1 style={{ margin: 80, color: "#4a7a4a" }}>
            Juliana Cristina de Oliveira Tenório
          </h1>
        </div>
      </header>

      <main
        style={{
          width: "100%",
          maxWidth: "1000px",
          padding: "0 20px 40px",
        }}
      >
        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#4a7a4a", borderBottom: "2px solid #c0d4b5", paddingBottom: "5px" }}>
            Sobre Mim
          </h2>
          <br />
          <p>
            Estudante do curso de Ciências da Computação. Estou na minha segunda formação e esse curso vem sendo bem desafiador para mim.
            No momento estou me aprofundando em desenvolvimento web, explorando tecnologias como React, Next.js.
            Apesar das dificuldades, cada avanço, por menor que seja, me motiva a continuar aprendendo.
          </p>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#4a7a4a", borderBottom: "2px solid #c0d4b5", paddingBottom: "5px" }}>
            Formação
          </h2>
          <ul>
            <li>
              Ciências da Computação — Universidade Católica de Pernambuco
              <span style={{ display: "block", fontSize: "14px", color: "#555" }}>
                4° Período (cursando)
              </span>
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#4a7a4a", borderBottom: "2px solid #c0d4b5", paddingBottom: "5px" }}>
            Habilidades Técnicas
          </h2>
          <ul>
            <br />
            <li>HTML / CSS / JavaScript</li>
            <li>React, Next.js</li>
            <li>Python, Java, C</li>
          </ul>
        </section>

        <Link href="/forca">
          <button
            className={styles.button}
            onClick={() => {
              playClickSound();
            }}
          >
            Para descontrair
          </button>
        </Link>

        <audio ref={audioRef} src="/assets/imagem/audio/click.mp3" preload="auto" />

        {/* SEÇÃO DE CONTATO */}
        <section
          style={{
            marginTop: "40px",
            marginBottom: "40px",
            width: "55%", // pouco mais da metade
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
            border: "2px solid #4a7a4a",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            backgroundColor: "#f0f9f0",
          }}
        >
          <h2
            style={{
              color: "#4a7a4a",
              borderBottom: "2px solid #c0d4b5",
              paddingBottom: "5px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Entre em contato
          </h2>
          <form
            onSubmit={handleEnviar}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #4a7a4a",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #4a7a4a",
              }}
            />
            <textarea
              placeholder="Mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              rows={4}
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #4a7a4a",
                resize: "vertical",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
                backgroundColor: "#4a7a4a",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={playClickSound}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#86f08f")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4a7a4a")}
            >
              Enviar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
