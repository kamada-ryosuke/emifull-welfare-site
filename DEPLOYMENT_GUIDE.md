# EMIFULL障がい福祉事業部サイト 公開ガイド

このガイドは、EMIFULL障がい福祉事業部 統合サイトを外部共有できるURLで確認し、正式公開へ進めるための手順です。

## 1. 公開方法の方針

推奨は Vercel でのプレビュー公開です。

- Phase 1：VercelのプレビューURLで理事長・関係者確認
- Phase 2：仮情報を正式情報へ差し替え
- Phase 3：独自ドメイン接続
- Phase 4：Search Console / GA4 / フォーム送信確認

## 2. このプロジェクトのVercel設定

Vercelでは以下の設定を使います。

- Framework Preset：Next.js
- Build Command：`npm run build:vercel`
- Output Directory：`out`
- Install Command：`npm install`
- Node.js Version：Vercel推奨の最新版で可

`vercel.json` にも同じ設定を入れています。

## 3. 環境変数

VercelのProject Settings > Environment Variables に以下を設定してください。

| Key | 例 | 用途 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://welfare.emifull-group.or.jp` | canonical / sitemap / OGP URL |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | GA4測定ID |
| `NEXT_PUBLIC_LINE_URL` | `https://lin.ee/XXXXXXXX` | 公式LINE導線 |
| `NEXT_PUBLIC_PHONE_NUMBER` | `0743XXXXXXXX` | 電話CTA |
| `NEXT_PUBLIC_FORM_URL` | `https://forms.gle/XXXX` | 相談フォーム送信先 |
| `MICROCMS_SERVICE_DOMAIN` | `your-service-domain` | 将来CMS化する場合 |
| `MICROCMS_API_KEY` | `your-api-key` | 将来CMS化する場合 |

現時点では一部の値は仮です。公開前に `TODO_PUBLICATION.md` を確認してください。

## 4. GitHubへアップロードする手順

1. GitHubで新しいリポジトリを作成します。
2. リポジトリ名は例として `emifull-welfare-site` にします。
3. このプロジェクトフォルダをGitHubへアップロードします。
4. `.gitignore` により、`node_modules`、`.next`、`out`、ログファイルは除外されます。
5. GitHub上で `app`、`components`、`data`、`lib`、`public`、`package.json` などが入っていることを確認します。

コマンドで行う場合の例：

```bash
git init
git add .
git commit -m "Initial EMIFULL welfare site"
git branch -M main
git remote add origin https://github.com/OWNER/emifull-welfare-site.git
git push -u origin main
```

## 5. VercelでImport Projectする手順

1. Vercelにログインします。
2. Add New > Project をクリックします。
3. GitHub連携を許可します。
4. `emifull-welfare-site` を選びます。
5. Framework Preset が Next.js になっていることを確認します。
6. Build Command に `npm run build:vercel` を設定します。
7. Output Directory に `out` を設定します。
8. Environment Variables を設定します。
9. Deploy をクリックします。
10. 完了後、`https://xxxx.vercel.app` のようなプレビューURLが発行されます。

## 6. 再デプロイ方法

GitHubに変更をpushすると、Vercelが自動で再デプロイします。

```bash
git add .
git commit -m "Update site content"
git push
```

Vercel管理画面から手動で再デプロイする場合：

1. Vercel Project を開く
2. Deployments を開く
3. 最新デプロイのメニューから Redeploy を選択

## 7. 独自ドメイン接続の選択肢

### A. `emifull-group.or.jp/disability`

メリット：
- 既存法人サイト配下なので信頼感が高い
- 法人サイトとの関係が分かりやすい
- SEO上、既存ドメインの評価を活かしやすい

デメリット：
- Vercel単体ではサブディレクトリ運用がやや複雑
- 既存サーバー側のリバースプロキシ設定が必要になる場合がある
- 法人サイト側の管理会社との調整が必要

### B. `emifull-group.or.jp/fukushi`

メリット：
- 日本語利用者に意味が伝わりやすい
- 法人サイト配下として自然

デメリット：
- `disability` より事業領域が広く見える可能性がある
- サブディレクトリ運用の技術調整が必要

### C. `disability.emifull-group.or.jp`

メリット：
- Vercelに接続しやすい
- 障がい福祉事業部の専門サイトとして独立感が出る
- 管理・公開・改修がしやすい

デメリット：
- URLが英語で少し硬い
- 法人サイト本体とは別サイトに見える可能性がある

### D. `welfare.emifull-group.or.jp`

メリット：
- 福祉全体を包む印象で、ブランドサイトに向いている
- 将来サービスが増えても拡張しやすい
- Vercel接続がしやすい

デメリット：
- 障がい福祉に特化していることはURLだけでは伝わりにくい

おすすめは、運用しやすさを優先するなら `welfare.emifull-group.or.jp`、障がい福祉事業部としての明確さを優先するなら `disability.emifull-group.or.jp` です。

## 8. 独自ドメイン接続手順

Vercel側：

1. Project Settings > Domains を開く
2. `welfare.emifull-group.or.jp` などを入力
3. 表示されたDNS設定を確認

DNS側：

- サブドメインの場合：CNAMEをVercel指定先へ向ける
- Apexドメインの場合：AレコードまたはVercel指定の設定を使用

設定後：

1. VercelでValid Configurationになるまで待つ
2. SSL証明書が自動発行されることを確認
3. `NEXT_PUBLIC_SITE_URL` を正式ドメインへ変更
4. 再デプロイ

## 9. 公開前チェック

- `TODO_PUBLICATION.md` の仮情報を確認する
- 電話番号を正式番号へ差し替える
- LINE URLを正式URLへ差し替える
- GoogleMap URLを正式URLへ差し替える
- 住所・営業時間・送迎有無を確認する
- フォーム送信先を設定する
- プライバシーポリシーを追加する
- OGP画像を確認する
- faviconを確認する
- スマホで全主要ページを確認する

## 10. 公開後チェック

公開URLで以下を確認してください。

- トップページが開く
- 下層ページへ遷移できる
- 画像が表示される
- スマホで崩れない
- 存在しないURLで404ページが表示される
- `/sitemap.xml` が開ける
- `/robots.txt` が開ける
- LINE相談ボタンが正しいURLへ遷移する
- 電話相談ボタンがスマホで発信できる
- 見学予約・フォーム相談が送信先へ遷移する
- OGPがSNSで表示される

## 11. Search Console登録

1. Google Search Consoleを開く
2. ドメインまたはURLプレフィックスを追加
3. 所有権を確認
4. `https://公開URL/sitemap.xml` を送信
5. インデックス登録状況を確認

## 12. GA4登録

1. Google AnalyticsでGA4プロパティを作成
2. Webデータストリームを追加
3. 測定ID `G-XXXXXXXXXX` を取得
4. Vercel環境変数 `NEXT_PUBLIC_GA_ID` に設定
5. 再デプロイ
6. リアルタイム計測でアクセスが入るか確認

## 13. ローカル確認コマンド

Vercel向けビルド：

```bash
npm run build:vercel
```

`file://` 直開き確認用の静的HTML生成：

```bash
npm run build:preview
```

`out/index.html` を開くと、ローカルでも確認できます。
