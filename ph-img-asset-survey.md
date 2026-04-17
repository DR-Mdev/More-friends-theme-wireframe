# `.ph-img` / `data-label` 調査メモ

## サマリー

- `.ph-img` の実インスタンスは合計 41 件です。
- PC ルート配下は 21 件、SP 配下は 20 件です。
- `data-label` は SP 側のプレースホルダーにのみ付いています。PC 側は `.ph-img` の中にすでに `<img>` が入っており、候補assetの一次ソースとして使えます。
- `.ph-img` が見つかったHTMLは次の 11 ファイルです。
  - PC: `index.html`, `about.html`, `blog.html`, `blog-detail.html`, `review-detail.html`, `sitter.html`
  - SP: `SP/sp-index.html`, `SP/sp-about.html`, `SP/sp-blog.html`, `SP/sp-review-detail.html`, `SP/sp-sitter.html`
- `.ph-img` が見つからなかったHTML:
  - PC: `area.html`, `cancel.html`, `contact.html`, `flow.html`, `license.html`, `price.html`, `privacy.html`, `reviews.html`, `service.html`, `terms.html`
  - SP: `SP/sp-area.html`, `SP/sp-blog-detail.html`, `SP/sp-cancel.html`, `SP/sp-contact.html`, `SP/sp-flow.html`, `SP/sp-license.html`, `SP/sp-price.html`, `SP/sp-privacy.html`, `SP/sp-reviews.html`, `SP/sp-service.html`, `SP/sp-terms.html`
  - EN: `en/*.html`

## 件数

| 対象ファイル | 件数 |
| --- | ---: |
| `index.html` | 5 |
| `about.html` | 2 |
| `blog.html` | 9 |
| `blog-detail.html` | 1 |
| `review-detail.html` | 3 |
| `sitter.html` | 1 |
| `SP/sp-index.html` | 5 |
| `SP/sp-about.html` | 2 |
| `SP/sp-blog.html` | 9 |
| `SP/sp-review-detail.html` | 3 |
| `SP/sp-sitter.html` | 1 |

## 対応表の材料

| ページ | セクション | 役割 | 対象ファイル | 想定アスペクト比 | 候補asset | 根拠 |
| --- | --- | --- | --- | --- | --- | --- |
| トップ | hero | メイン写真 / シッターとペット | PC `index.html:76` / SP `SP/sp-index.html:143` | PC: 固定高 `height:100%; min-height:480px` / SP: `4/3` | `assets/home-hero-main.webp` | PCで実装済み。SPの `data-label="メイン写真 / シッターとペット"` と一致 |
| トップ | profile-section | シッター写真 / 椎名春香がペットと向き合うポートレート | PC `index.html:293` / SP `SP/sp-index.html:443` | PC: 固定高 `300px` / SP: `4/3` | `assets/home-sitter-profile.webp` | PCで実装済み。SPの `data-label` と一致 |
| トップ | blog-section | 記事サムネイル / お留守番が苦手な犬の記事 | PC `index.html:327` / SP `SP/sp-index.html:484` | PC: 固定高 `180px` / SP: `16/9` | `assets/blog-thumb-dog-care.webp` | PCで実装済み。SPの `data-label` と記事タイトルが対応 |
| トップ | blog-section | 記事サムネイル / ペットホテルvsシッター比較記事 | PC `index.html:340` / SP `SP/sp-index.html:494` | PC: 固定高 `180px` / SP: `16/9` | `assets/blog-thumb-hotel-vs-sitter.webp` | PCで実装済み。SPの `data-label` と記事タイトルが対応 |
| トップ | blog-section | 記事サムネイル / カウンセリングの内容紹介記事 | PC `index.html:353` / SP `SP/sp-index.html:503` | PC: 固定高 `180px` / SP: `16/9` | `assets/blog-thumb-counseling.webp` | PCで実装済み。SPの `data-label` と記事タイトルが対応 |
| About | page-header | ヘッダービジュアル / シッターとペットの写真 | PC `about.html:481` / SP `SP/sp-about.html:264` | PC: 固定高 `360px` / SP: `4/3` | `assets/about-header.webp` | PCで実装済み。SPの `data-label="ヘッダービジュアル / シッターとペットの写真"` と一致 |
| About | trust | シッターとペットが打ち解けている写真 | PC `about.html:729` / SP `SP/sp-about.html:610` | PC: 固定高 `180px` / SP: `16/9` | `assets/about-trust.webp` | PCで実装済み。SPの `data-label` と一致 |
| Blog | blog-list-section | 記事サムネイル / 信頼関係を築くための最初の5分間。初対面でやること・やらないこと | PC `blog.html:167` / SP `SP/sp-blog.html:245` | PC: `16/9` / SP: `16/9` | `assets/blog-thumb-dog-care.webp` | PCの現在実装をそのままSPへ転用可能 |
| Blog | blog-list-section | 記事サムネイル / ペットホテルが苦手な子のためのシッターの使い方。繊細な子ほど自宅シッターが向く理由 | PC `blog.html:181` / SP `SP/sp-blog.html:256` | PC: `16/9` / SP: `16/9` | `assets/blog-thumb-hotel-vs-sitter.webp` | PCの現在実装をそのままSPへ転用可能 |
| Blog | blog-list-section | 記事サムネイル / 初めてペットシッターを使う方へ。カウンセリングで何を聞けばいいか | PC `blog.html:195` / SP `SP/sp-blog.html:267` | PC: `16/9` / SP: `16/9` | `assets/blog-thumb-counseling.webp` | PCの現在実装をそのままSPへ転用可能 |
| Blog | blog-list-section | 記事サムネイル / お留守番中のストレスサインとは？行動から読み解くペットの気持ち | PC `blog.html:209` / SP `SP/sp-blog.html:278` | PC: `16/9` / SP: `16/9` | `assets/blog-thumb-dog-care.webp` | PCの現在実装をそのままSPへ転用可能 |
| Blog | blog-list-section | 記事サムネイル / シッター日記：初めてお会いしたポメラニアンのぽんちゃんのこと | PC `blog.html:223` / SP `SP/sp-blog.html:289` | PC: `16/9` / SP: `16/9` | `assets/blog-thumb-hotel-vs-sitter.webp` | PCの現在実装をそのままSPへ転用可能 |
| Blog | blog-list-section | 記事サムネイル / ペットシッター選びで後悔しないための5つのチェックポイント | PC `blog.html:237` / SP `SP/sp-blog.html:300` | PC: `16/9` / SP: `16/9` | `assets/blog-thumb-counseling.webp` | PCの現在実装をそのままSPへ転用可能 |
| Blog | blog-list-section | 記事サムネイル / 多頭飼いのお留守番ケア。犬と猫が一緒にいるお家でシッターができること | PC `blog.html:251` / SP `SP/sp-blog.html:311` | PC: `16/9` / SP: `16/9` | `assets/blog-thumb-dog-care.webp` | PCの現在実装をそのままSPへ転用可能 |
| Blog | blog-list-section | 記事サムネイル / 【2026年春】GW・大型連休の予約受付についてのご案内 | PC `blog.html:265` / SP `SP/sp-blog.html:322` | PC: `16/9` / SP: `16/9` | `assets/blog-thumb-hotel-vs-sitter.webp` | PCの現在実装をそのままSPへ転用可能 |
| Blog | blog-list-section | 記事サムネイル / なぜカウンセリングを大切にするのか。「初対面」こそがシッティングの始まり | PC `blog.html:279` / SP `SP/sp-blog.html:333` | PC: `16/9` / SP: `16/9` | `assets/blog-thumb-counseling.webp` | PCの現在実装をそのままSPへ転用可能 |
| Blog detail | article body | 本文中ビジュアル | PC `blog-detail.html:465` | `16/8` | `assets/blog-article-trust.webp` | PCで実装済み。SP側に `.ph-img` 対象なし |
| Review detail | review-photo-grid | ペット写真 1 | PC `review-detail.html:412` / SP `SP/sp-review-detail.html:303` | PC: `4/3` / SP: `4/3` | `assets/review-photo-1.webp` | PCで実装済み。SPの `data-label="ペット写真 1"` と一致 |
| Review detail | review-photo-grid | ペット写真 2 | PC `review-detail.html:415` / SP `SP/sp-review-detail.html:304` | PC: `4/3` / SP: `4/3` | `assets/review-photo-2.webp` | PCで実装済み。SPの `data-label="ペット写真 2"` と一致 |
| Review detail | review-photo-grid | ペット写真 3 | PC `review-detail.html:418` / SP `SP/sp-review-detail.html:305` | PC: `4/3` / SP: `4/3` | `assets/review-photo-3.webp` | PCで実装済み。SPの `data-label="ペット写真 3"` と一致 |
| Sitter | v06-profile | 椎名春香のポートレート写真。ペットと向き合う笑顔のカット | PC `sitter.html:764` / SP `SP/sp-sitter.html:282` | PC: `min-height:440px`、コメント上の最終意図は `3/4` / SP: `3/4` | `assets/sitter-profile-main.webp` | PCで実装済み。SPの `data-label` と一致 |

## `assets/` のうち、今回の `.ph-img` 母集団とは別扱いのもの

- `.ph-img` 以外で使われている:
  - `assets/blog-author.webp`
  - `assets/MoreFriends_RGB_color_cropped.png`
  - `assets/MoreFriends_RGB_white_cropped.png`
- 現時点でHTML参照が見当たらない:
  - `assets/Gemini_Generated_Image_3d21rx3d21rx3d21.png`
  - `assets/Gemini_Generated_Image_b25kdnb25kdnb25k.png`
  - `assets/Gemini_Generated_Image_brv2lybrv2lybrv2.png`
  - `assets/Gemini_Generated_Image_sbr45isbr45isbr4.png`

## 次の着手メモ

- SP差し替えは、PCで既に入っているassetをそのまま横展開できる箇所が大半です。
- 比率がPC/SPで異なるのは `index`, `about`, `sitter` の一部で、ここは `object-fit: cover` 前提のトリミング確認が必要です。
- `blog.html` / `SP/sp-blog.html` の9件は、現状のPC実装を見る限り「記事内容ごとに完全固有画像」ではなく、3種類のサムネイルをローテーションで割り当てています。
