import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { EmotionalImage } from "@/components/ui/EmotionalImage";

const worryLinks = [
  { title: "言葉の遅れ", text: "ことばや生活の力を育てたい", href: "/services/jido-hattatsu" },
  { title: "落ち着きがない", text: "安心して過ごせる関わりを探したい", href: "/services/jido-hattatsu" },
  { title: "不登校", text: "学校以外の居場所から始めたい", href: "/services/houkago-day" },
  { title: "集団が苦手", text: "少人数で自分のペースを整えたい", href: "/services/houkago-day" },
  { title: "将来が不安", text: "働く前の経験を増やしたい", href: "/brands/job-college" },
  { title: "働く練習をしたい", text: "役割や作業の経験につなげたい", href: "/services/b-type" },
  { title: "一人暮らしが不安", text: "地域で暮らす準備を相談したい", href: "/services/group-home" }
];

const serviceCards = [
  { title: "児童発達支援", label: "未就学", href: "/services/jido-hattatsu", image: "/images/brand-sorato.webp" },
  { title: "放課後等デイサービス", label: "学齢期", href: "/services/houkago-day", image: "/images/brand-umie.webp" },
  { title: "保育所等訪問支援", label: "園・学校", href: "/services/hoikusho-houmon", image: "/images/consultation-calm.webp" },
  { title: "就労継続支援B型", label: "働く", href: "/services/b-type", image: "/images/brand-nojigiku.webp" },
  { title: "障がい者グループホーム", label: "暮らす", href: "/services/group-home", image: "/images/brand-hinode.webp" }
];

const brandCards = [
  { name: "SORATO", text: "遊びの中で、ことばと生活の力を育む。", href: "/brands/sorato", image: "/images/brand-sorato.webp" },
  { name: "UMIE", text: "自分のペースで学び、過ごせる居場所。", href: "/brands/umie", image: "/images/brand-umie.webp" },
  { name: "カラダキッズ", text: "からだを動かす楽しさが、自信に変わる。", href: "/brands/karada-kids", image: "/images/brand-karada-kids.webp" },
  { name: "ジョブカレッジ", text: "働く未来を、ここで一緒に育てる。", href: "/brands/job-college", image: "/images/brand-job-college.webp" }
];

const lifeCards = [
  { title: "未就学", text: "伝わる安心から", href: "/life-stage" },
  { title: "学齢期", text: "自分でいられる居場所へ", href: "/life-stage" },
  { title: "思春期", text: "未来に触れる経験へ", href: "/life-stage" },
  { title: "働く", text: "役割と社会とのつながりへ", href: "/life-stage" },
  { title: "暮らす", text: "帰る場所の安心へ", href: "/life-stage" }
];

const facilityTeasers = [
  { name: "天理エリア", text: "児童発達支援・放課後等デイサービス・グループホーム", href: "/facilities" },
  { name: "加古川エリア", text: "就労準備型支援・訪問支援", href: "/facilities" },
  { name: "高砂・稲美エリア", text: "就労継続支援B型・児童支援", href: "/facilities" }
];

export function HomeConsultationGateway() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-leaf-600">
              First Step
            </p>
            <h2 className="mt-4 font-display text-3xl font-black leading-[1.35] text-ink sm:text-5xl">
              悩みの名前が
              <br />
              まだなくても、相談できます。
            </h2>
            <p className="mt-5 text-sm font-bold leading-8 text-ink/62">
              診断前、見学だけ、LINEだけでも大丈夫です。近い入口からお選びください。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <Button href="/consultation?type=line" className="w-full">LINE相談</Button>
            <Button href="/consultation?type=visit" variant="secondary" className="w-full">見学予約</Button>
            <Button href="tel:0000000000" variant="secondary" className="w-full">電話相談</Button>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {worryLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[22px] border border-skyBrand/20 bg-leaf-50/70 p-4 shadow-[0_12px_30px_rgba(33,112,159,0.06)] transition hover:-translate-y-1 hover:bg-white"
            >
              <h3 className="text-base font-black text-ink">{item.title}</h3>
              <p className="mt-2 text-xs font-bold leading-6 text-ink/58">{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFacilityGateway() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff,#f2fbff)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-leaf-600">
            Facilities
          </p>
          <h2 className="mt-4 font-display text-3xl font-black leading-[1.35] text-ink sm:text-5xl">
            近くで相談できる場所を、
            <br />
            まず探す。
          </h2>
          <p className="mt-5 text-sm font-bold leading-8 text-ink/62">
            地域、年齢、相談したい内容から、今の暮らしに近い施設へつなぎます。
          </p>
          <div className="mt-7">
            <Button href="/facilities">施設を探す</Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {facilityTeasers.map((facility) => (
            <Link
              key={facility.name}
              href={facility.href}
              className="rounded-[24px] bg-white/86 p-5 shadow-[0_18px_42px_rgba(33,112,159,0.09)] transition hover:-translate-y-1"
            >
              <p className="text-xs font-black text-leaf-600">施設検索</p>
              <h3 className="mt-3 text-2xl font-black text-ink">{facility.name}</h3>
              <p className="mt-3 text-sm font-bold leading-7 text-ink/60">{facility.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeServiceGateway() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-leaf-600">
              Services
            </p>
            <h2 className="mt-4 font-display text-3xl font-black leading-[1.35] text-ink sm:text-5xl">
              必要な支援へ、
              <br />
              迷わず進む。
            </h2>
          </div>
          <Button href="/services" variant="secondary">サービス一覧へ</Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {serviceCards.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <EmotionalImage
                src={service.image}
                alt={`${service.title}の入口となる支援風景`}
                className="h-56 rounded-[22px]"
                sizes="(max-width: 768px) 92vw, 18vw"
              />
              <div className="mt-4">
                <p className="text-xs font-black text-leaf-600">{service.label}</p>
                <h3 className="mt-1 text-lg font-black leading-snug text-ink">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeBrandGateway() {
  return (
    <section className="relative overflow-hidden bg-leaf-50/70 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute right-[-14rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-sky/60 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-leaf-600">
            Brands
          </p>
          <h2 className="mt-4 font-display text-3xl font-black leading-[1.35] text-ink sm:text-5xl">
            それぞれの時間に、
            <br />
            それぞれの空気を。
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brandCards.map((brand) => (
            <Link key={brand.name} href={brand.href} className="group">
              <EmotionalImage
                src={brand.image}
                alt={`${brand.name}の支援風景`}
                className="h-64 rounded-[24px]"
                sizes="(max-width: 768px) 92vw, 23vw"
              />
              <h3 className="mt-4 text-2xl font-black text-ink">{brand.name}</h3>
              <p className="mt-2 text-sm font-bold leading-7 text-ink/62">{brand.text}</p>
            </Link>
          ))}
        </div>
        <div className="mt-9">
          <Button href="/brands" variant="secondary">ブランド一覧へ</Button>
        </div>
      </div>
    </section>
  );
}

export function HomeLifeStageGateway() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-leaf-600">
            Life Stage
          </p>
          <h2 className="mt-4 font-display text-3xl font-black leading-[1.35] text-ink sm:text-5xl">
            子どもから大人まで、
            <br />
            流れで支える。
          </h2>
          <div className="mt-7">
            <Button href="/life-stage" variant="secondary">ライフステージを見る</Button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-5">
          {lifeCards.map((stage) => (
            <Link
              key={stage.title}
              href={stage.href}
              className="min-h-36 rounded-[22px] bg-leaf-50/80 p-4 transition hover:-translate-y-1 hover:bg-white"
            >
              <h3 className="text-2xl font-black text-ink">{stage.title}</h3>
              <p className="mt-3 text-sm font-bold leading-7 text-ink/60">{stage.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeRecruitGateway() {
  return (
    <section className="bg-leaf-800 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/56">
            Recruit
          </p>
          <h2 className="mt-4 font-display text-3xl font-black leading-[1.35] sm:text-5xl">
            誰かの“できた”を、
            <br />
            人生の力に変える仕事。
          </h2>
          <p className="mt-5 text-sm font-bold leading-8 text-white/70">
            募集条件だけではなく、EMIFULLが大切にしている支援観から知ってください。
          </p>
          <div className="mt-7">
            <Button href="/recruit" variant="ghost">採用情報を見る</Button>
          </div>
        </div>
        <EmotionalImage
          src="/images/recruit-team.webp"
          alt="支援観に共感して働くEMIFULLスタッフのチーム風景"
          className="min-h-[340px] rounded-[24px]"
          sizes="(max-width: 768px) 92vw, 48vw"
        />
      </div>
    </section>
  );
}

export function HomeAboutGateway() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-leaf-600">
            About
          </p>
          <h2 className="mt-4 font-display text-3xl font-black leading-[1.35] text-ink sm:text-5xl">
            わかってもらえた経験が、
            <br />
            人生をひらく。
          </h2>
        </div>
        <div className="max-w-xl">
          <p className="text-sm font-bold leading-8 text-ink/64">
            EMIFULLが大切にしているのは、制度の前にある人との関わりです。詳しい思想は下層ページでゆっくり読めるようにしました。
          </p>
          <div className="mt-7">
            <Button href="/about" variant="secondary">EMIFULLについて</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
