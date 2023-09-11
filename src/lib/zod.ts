import i18next from "i18next";
import { z } from "zod";
import { makeZodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/ja/zod.json";

i18next.init({
  lng: "es",
  resources: {
    es: { zod: translation },
  },
});
// MEMO: https://github.com/aiji42/zod-i18n/tree/main/examples/with-next-i18next
z.setErrorMap(makeZodI18nMap({ t: i18next.t }));

export default z;
