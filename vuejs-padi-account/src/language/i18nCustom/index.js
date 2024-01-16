import { createI18n } from "vue-i18n";
import translations from "@/language/index.js";
import router from "@/router/router.js";

const DEFAULT_LANGUAGE = "en-US";
const storedLanguage =
  localStorage.getItem("selectedLanguage") || DEFAULT_LANGUAGE;

const i18n = createI18n({
  locale: DEFAULT_LANGUAGE,
  messages: translations,
});

router.afterEach((to) => {
  const newLang = router.currentRoute.value.params.lang || DEFAULT_LANGUAGE;
  if (newLang !== storedLanguage) {
    i18n.global.locale = newLang;
    localStorage.setItem("selectedLanguage", newLang);
  }
});

export default i18n;
