import Image from "next/image";
import Link from "next/link";
import RevealHeading from "@/components/RevealHeading";
import Footer from "@/components/Footer";

const skills = [
  { name: "HTML", text: "Semantic HTMLや適切な見出し構造を意識したマークアップができます。", color: "pink" },
  { name: "CSS/SCSS", text: "レスポンシブ対応やアニメーションを使ったデザインを作成できます。", color: "purple" },
  { name: "JavaScript", text: "DOM操作、イベント処理、日時表示などを実装できます。", color: "yellow" },
  { name: "Next.js", text: "React、JSX、App Router、コンポーネントを使用できます。", color: "mint" },
  { name: "Responsive Design", text: "スマートフォン・タブレット・PCの画面幅に合わせて、見やすく使いやすいレイアウトを作成できます。", color: "peach" },
  { name: "WordPress", text: "オリジナルテーマの作成や、固定ページ・投稿ページの構築、既存サイトのWordPress化ができます。", color: "lavender" },
  { name: "Figma", text: "Webサイトのワイヤーフレームやデザインカンプを作成できます。", color: "orange" },
];

export default function TopPage() {
  return (
    <main>
      <section className="first-view" aria-label="Portfolio first view">
        <Image className="first-view__image" src="/img/top/portfolio-fv.png" alt="Welcome!! SAO's Page!" width={1920} height={567} priority />
      </section>
      <section className="top-page">
        <RevealHeading as="h1">~~~~~ <span>NICE TO MEET YOU!</span> ~~~~~</RevealHeading>
        <div className="welcome-card">
          <h2>みなさんこんにちは!</h2>
          <p>ポートフォリオをご覧いただき、ありがとうございます。<br />このサイトは、エンジニアを目指して約1年間学んできた知識と、<br />制作を通して身につけたスキルをまとめたポートフォリオです。<br />HTML／CSS・SCSS、JavaScript、Next.jsを使った制作に加え、<br />レスポンシブ対応や、見やすさ・使いやすさを意識したデザインにも取り組みました。<br />作品やプロフィールを通して、私の人柄と、ものづくりに向き合う姿勢を知っていただけましたら幸いです。<br />どうぞごゆっくりご覧ください!</p>
          <div className="smileys" aria-hidden="true"><span>☺</span><span>☺</span></div>
        </div>
        <div className="about">
          <div className="about__collage" aria-label="制作実績の写真">
            <div className="about-photo about-photo--back"><Image src="/img/top/toppage-2.png" alt="制作したWebサイト" fill sizes="45vw" /></div>
            <div className="about-photo about-photo--front"><Image src="/img/top/toppage-1.png" alt="制作した企業情報ページ" fill sizes="45vw" /></div>
            <span className="tape" aria-hidden="true" />
            <span className="about-dot-pattern" aria-hidden="true" />
            <span className="about-number-tape" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => <i key={number}>{number}</i>)}
            </span>
            <span className="about-lines" aria-hidden="true"><i /><i /><i /></span>
            <span className="about-star about-star--1">★</span>
            <span className="about-star about-star--2">★</span>
            <span className="about-star about-star--3">★</span>
          </div>
          <div className="about__content">
            <h2>ABOUT ME</h2>
            <ul><li><strong>小川　沙織</strong>（Saori Ogawa）</li><li>愛知県／フロントエンドエンジニア志望</li><li>スタイリッシュor遊び心のあるデザインが好きです。<br />ユーザーにとって心地よい体験を届けられるよう、コーディングやデザインのスキルを磨いています。</li></ul>
            <div className="skill-tags">{["HTML", "CSS / SCSS", "JavaScript", "Next.js", "Responsive Design", "WordPress オリジナルテーマ制作", "Figma"].map((tag) => <span key={tag}># {tag}</span>)}</div>
          </div>
        </div>
        <section className="skills-section">
          <RevealHeading>~~~~~ <span>SKILLS</span> ~~~~~</RevealHeading>
          <div className="skills-grid">{skills.map((skill) => <article className={`skill-card skill-card--${skill.color}`} key={skill.name}><h3>{skill.name}</h3><p>{skill.text}</p></article>)}</div>
          <Link className="next-page-link" href="/to-everyone">GO NEXT PAGE！！</Link>
        </section>
      </section>
      <Footer topPageOnly />
    </main>
  );
}
