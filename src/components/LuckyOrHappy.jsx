"use client";

import { useState } from "react";

export default function LuckyOrHappy() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const draw = () => {
    const value = Number(number);
    if (!Number.isInteger(value) || value < 1 || value > 100) { setError("1〜100の整数を入力してね！"); setResult(null); return; }
    const randomValue = window.crypto.getRandomValues(new Uint32Array(1))[0];
    setError(""); setResult(randomValue < 2 ** 31 ? "LUCKY!!" : "HAPPY!!");
  };
  const resultClass = result === "LUCKY!!" ? "lucky" : result === "HAPPY!!" ? "happy" : "default";

  return <div className="lucky-box"><div className="lucky-box__form"><h3>1〜100の数字を入力してね！</h3><p>あなたの数字で、今日の運勢を<br />占っちゃおう！<br />LuckyかHappyが出るよ♪</p><div className="draw-controls"><input type="number" min="1" max="100" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="1〜100" aria-label="1から100までの数字" /><button type="button" onClick={draw}>DRAW！</button></div>{error && <p className="draw-error" role="alert">{error}</p>}</div><div className={`result-card result-card--${resultClass}`} aria-live="polite"><span className="result-star result-star--1" aria-hidden="true">★</span><span className="result-star result-star--2" aria-hidden="true">★</span><span className="result-star result-star--3" aria-hidden="true">★</span><span className="result-star result-star--4" aria-hidden="true">★</span><span className="result-star result-star--5" aria-hidden="true">★</span><span className="result-star result-star--6" aria-hidden="true">★</span><span className="result-star result-star--7" aria-hidden="true">★</span>{result ? <><strong>{result}</strong><p>{result === "LUCKY!!" ? <>すてきなことが起こる予感！</> : <>笑顔あふれる一日になりそう！<br />小さな幸せを楽しもう♪</>}</p></> : <p>結果がここに表示されるよ♪<br />数字を入力して<span>Let’s DRAW!</span></p>}</div></div>;
}
