# Server Actionsにわたすデータの各パターン

- `/bind` : `bind` を使ってデータを渡している
    - ブラウザに露出しているため改ざん可能
    - 改ざんされても問題ないならこの方法が使い勝手が良い
- `/bind-with-form-state` : `handle-submit` とuseFormStateを使ってデータを渡している
- `/closures` : コンポーネント内部でServer Actionsを定義
    - Next.jsに暗号化されるため露出はするものの改ざんは難しい
    - ただしコード可読性の観点でこれを積極的に採用することはなさそう
- `/handle-submit` : Server ActionsにFormData以外のデータも一緒に渡している
    - JSでハンドルしているためプログレッシブ エンハンスメント的にはなし
    - HTMLとしては露出していないものの、Server Actions自体は露出しているため改ざんデータを直リクエスト可能
- `/handle-submit-with-form-state` : `handle-submit` とuseFormStateを使ってデータを渡している
