# EMIFULL障がい福祉事業部 本番公開準備メモ

## 公開前提

- フレームワーク: Next.js App Router / React / TypeScript / Tailwind CSS
- 公開先: Vercel想定
- CMS: microCMS想定
- 画像: `public/images/` にWebPで配置
- 主要CTA: 「問い合わせ」ではなく「まずは相談してみる」に統一

## 環境変数

`.env.example` をコピーして設定します。

```env
NEXT_PUBLIC_SITE_URL=https://emifull-welfare.jp
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

## microCMS構造

| endpoint | 用途 | 主なフィールド |
| --- | --- | --- |
| `services` | サービスページ | `title`, `slug`, `description`, `image` |
| `facilities` | 施設詳細 | `name`, `slug`, `area`, `service`, `image` |
| `news` | お知らせ | `title`, `slug`, `publishedAt` |
| `faq` | FAQ | `question`, `answer`, `category` |
| `staff` | 採用・スタッフ紹介 | `name`, `role`, `message`, `image` |
| `recruit` | 募集要項 | `title`, `slug`, `description` |
| `column` | SEOコラム | `title`, `slug`, `body` |

実装側には `lib/microcms.ts` を用意済みです。環境変数が未設定の場合は空配列を返すため、静的データで安全に表示できます。

## SEO

実装済み:

- `title`
- `meta description`
- OGP / Twitter Card
- canonical
- robots
- sitemap
- パンくず
- Organization / WebSite / Service / LocalBusiness / BreadcrumbList の構造化データ

地域SEOでは `areas/[slug]` を使い、加古川・稲美・天理・高砂ごとの検索入口を用意しています。

## 画像運用

画像は「施設紹介」ではなく「人との関わり」を見せます。

- 推奨: 自然光、手元、会話の途中、床で関わる距離、生活音が伝わる場面
- NG: 集合写真、外観メイン、作り笑顔、広告写真感、福祉施設テンプレ感
- 形式: WebP
- 推奨幅: FV 1600px前後、カード 1200px前後
- alt: 写っているものではなく、支援の空気が伝わる説明にする

## Vercelデプロイ

1. GitHubにpush
2. VercelでImport
3. 環境変数を設定
4. Build Command: `npm run build`
5. Output Directory: Next.js既定
6. 公開後に `NEXT_PUBLIC_SITE_URL` を本番URLへ変更

## 公開後

- Google Analytics 4 の測定IDを設定
- Google Search Consoleでサイト所有権確認
- `sitemap.xml` を送信
- OGP画像の表示確認
- スマホでFV、相談フォーム、下部固定CTAを確認
- Lighthouseで LCP / CLS / Accessibility を確認
