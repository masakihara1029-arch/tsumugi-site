import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[78vh] md:min-h-[80vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="WINE BAR 紡 TSUMUGI 店内とワイン"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/35"></div>
        <div className="relative z-10 flex items-end min-h-[78vh] md:min-h-[80vh] pb-10 md:pb-16 px-6 lg:px-12">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              WINE BAR 紡 TSUMUGI
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              ワインを通して、豊かな人生を創紡する。
            </p>
            <p className="mt-3 text-base text-white/80">
              常時10種類のグラスワイン（赤・白・泡）
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:03-6783-2778"
                className="inline-flex h-12 px-5 items-center justify-center bg-white text-black font-medium rounded-xl hover:bg-white/90 transition"
              >
                電話で予約
              </a>
              <a
                href="https://instagram.com/winebar_tsumugi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 px-5 items-center justify-center border border-white/25 text-white rounded-xl hover:bg-white/5 hover:border-white/40 transition"
              >
                InstagramでDM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-[#0b0b0c] text-white">
        <h2 className="text-3xl font-semibold">WINE BAR 紡 TSUMUGI の特徴</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-medium">グラスで旅する、世界のワイン</h3>
            <p className="mt-3 text-base text-[#d6d6d6] leading-relaxed">
              世界各国のワインを、飲みやすさと美味しさで厳選。ボトルを開けなくても、グラスで楽しめます。
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-medium">遅い時間まで、静かに寄れる</h3>
            <p className="mt-3 text-base text-[#d6d6d6] leading-relaxed">
              火〜土 18:00–25:00。2軒目にも、ゆっくり話したい夜にも。
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-medium">気さくで優しい店長がお出迎え</h3>
            <p className="mt-3 text-base text-[#d6d6d6] leading-relaxed">
              初めての方も安心して過ごせる、落ち着いた空間です。
            </p>
          </div>
        </div>
      </section>

      {/* Glass Wine */}
      <section className="py-16 md:py-24 px-6 lg:px-12 border-t border-white/10 bg-[#0b0b0c] text-white">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">常時10種のグラスワイン</h2>
            <p className="mt-4 text-base text-[#d6d6d6] leading-relaxed max-w-2xl">
              赤・白・泡をバランスよく揃え、気分やお好みに合わせてご提案します。「軽めで飲みやすい」「しっかりめ」「酸がきれい」「泡から始めたい」など、遠慮なくどうぞ。
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="text-7xl font-bold text-white">10</div>
            <p className="mt-2 text-base text-white/70">赤・白・泡｜一杯からOK</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["赤","白","泡","一杯から","ご提案します"].map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 px-6 lg:px-12 bg-[#0b0b0c] text-white border-t border-white/10">
        <h2 className="text-3xl font-semibold">店内の雰囲気</h2>
        <p className="mt-3 text-base text-white/70">静かに飲める、落ち着いたカウンター。</p>
        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 bg-black/20">
          <div className="relative w-full aspect-[16/10]">
            <Image
              src="/images/interior.jpg"
              alt="WINE BAR 紡 TSUMUGI カウンターの雰囲気"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Info + Reservation */}
      <section className="py-16 md:py-24 px-6 lg:px-12 border-t border-white/10 bg-[#0b0b0c] text-white">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Info */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-semibold">店舗情報</h2>
            <dl className="mt-6 space-y-4 text-base text-[#d6d6d6]">
              <div>
                <dt className="text-white/70">営業時間</dt>
                <dd>火〜土 18:00–25:00（日・月 定休）</dd>
              </div>
              <div>
                <dt className="text-white/70">住所</dt>
                <dd>東京都豊島区池袋2-63-4 光映ビル1階</dd>
              </div>
              <div>
                <dt className="text-white/70">アクセス</dt>
                <dd>池袋駅 西口（北）より徒歩約5分</dd>
              </div>
              <div>
                <dt className="text-white/70">席数</dt>
                <dd>カウンター6席／テーブル2席</dd>
              </div>
              <div>
                <dt className="text-white/70">禁煙</dt>
                <dd>全席禁煙</dd>
              </div>
              <div>
                <dt className="text-white/70">チャージ</dt>
                <dd>なし</dd>
              </div>
            </dl>
          </div>

          {/* Reservation */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">ご予約・お問い合わせ</h3>
            <p className="mt-3 text-base text-[#d6d6d6] leading-relaxed">
              お電話、またはInstagramのDMにて承ります。※混雑時はご予約優先となります。
            </p>
            <a
              href="tel:03-6783-2778"
              className="mt-5 inline-flex w-full items-center justify-center h-12 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition"
            >
              電話で予約する（03-6783-2778）
            </a>
            <a
              href="https://instagram.com/winebar_tsumugi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center h-12 rounded-xl border border-white/25 text-white hover:border-white/40 hover:bg-white/5 transition"
            >
              InstagramでDMする（@winebar_tsumugi）
            </a>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-16 md:py-24 px-6 lg:px-12 border-t border-white/10 bg-[#0b0b0c] text-white">
        <h2 className="text-3xl font-semibold">アクセス</h2>
        <p className="mt-3 text-base text-white/70">池袋駅からの行き方はこちら</p>
      
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-black/20">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.651515940813!2d139.7107684!3d35.734788099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188db4d79ad32d%3A0xbbb025a10ddef02d!2sWINE%20BAR%20%E7%B4%A1%20TSUMUGI!5e0!3m2!1sja!2sjp!4v1771045516907!5m2!1sja!2sjp"
  className="w-full h-[340px] md:h-[420px]"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 bg-[#0b0b0c]">
        <p className="text-center text-sm text-white/50">© WINE BAR 紡 TSUMUGI</p>
      </footer>
    </>
  );
}
