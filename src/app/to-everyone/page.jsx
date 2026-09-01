import Image from "next/image";
import Footer from "@/components/Footer";
import LuckyOrHappy from "@/components/LuckyOrHappy";
import BackToTop from "@/components/BackToTop";
import RevealHeading from "@/components/RevealHeading";

export const metadata = {
  title: "To everyone",
  description: "小川沙織の人柄、好きなこと、写真とJavaScriptで楽しめるLUCKY OR HAPPYを紹介します。",
};

const questions = [
  ["出身地は？", "岐阜県"], ["血液型は？", "B型"],
  ["長所は？", "明るい、よく笑う、前向き、協調性を大事にする、諦めない、背が高い"],
  ["好きな事は？", "バレーボール、友達とご飯へ行く、ペットと過ごす、勉強、お洒落をする、海外ドラマを観る、寝る"],
  ["飼っているペットは？", "チワワ2匹（まだら♀・8歳）（チクワ♀・6歳）"],
  ["好きな食べ物は？", "焼肉、刺身、貝類、ケーキ、ゆで卵、なす、ご飯"],
  ["持っている資格は？", "普通自動車運転免許、看護師免許、TOEIC650点（10年前程…）"],
  ["大切にしていることは？", "相手を思いやる気持ち、感謝の気持ち"],
  ["努力していることは？", "クライアント様に喜んで頂ける制作が出来るよう、分野ごとのスキルを磨くこと"],
  ["座右の銘は？", "諦めたら、試合終了"],
];

const photos = [
  ["post.jpg", "お気に入りの風景", "pink", "-7deg"], ["yakitori.jpg", "焼き鳥", "mint", "0deg"],
  ["saori-and-dogs.jpg", "愛犬と一緒の写真", "hotpink", "0deg"], ["sunflower.jpg", "ひまわりと蝶", "purple", "0deg"],
  ["sashimi.jpg", "刺身", "orange", "7deg"],
];

export default function ToEveryonePage() {
  return (
    <main>
      <section className="first-view" aria-label="To everyone first view"><Image className="first-view__image" src="/img/to-everyone/to-everyone-fv.png" alt="To everyone" width={1920} height={567} priority /></section>
      <div className="to-everyone-page">
        <section className="questions-section"><RevealHeading as="h1">~~~~~ <span>MORE ABOUT ME</span> ~~~~~</RevealHeading><div className="questions-grid">{questions.map(([q, a], index) => <article className="question-card" key={q}><span className="question-card__number">Q{index + 1}</span><h2>{q}</h2><strong>Answer</strong><p>{a}</p></article>)}</div></section>
        <section className="favorites-section"><RevealHeading>~~~~~ <span>PHOTO &amp; FAVORITES</span> ~~~~~</RevealHeading><div className="photo-row">{photos.map(([src, alt, color, rotate]) => <figure className={`polaroid polaroid--${color}`} style={{ "--rotate": rotate }} key={src}><Image src={`/img/to-everyone/${src}`} alt={alt} fill sizes="20vw" /><span className="photo-tape" aria-hidden="true" /></figure>)}<span className="favorite-star favorite-star--1" aria-hidden="true">★</span><span className="favorite-star favorite-star--2" aria-hidden="true">★</span><span className="favorite-star favorite-star--3" aria-hidden="true">★</span><span className="favorite-star favorite-star--4" aria-hidden="true">★</span></div></section>
        <section className="lucky-section"><RevealHeading>~~~~~ <span>LUCKY OR HAPPY?</span> ~~~~~</RevealHeading><LuckyOrHappy /></section>
        <BackToTop />
      </div>
      <Footer />
    </main>
  );
}
