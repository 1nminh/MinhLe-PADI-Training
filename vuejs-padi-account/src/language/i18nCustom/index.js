import { createI18n } from "vue-i18n";
import translations from "@/language/index.js";
import router from "@/router/router.js";

const DEFAULT_LANGUAGE = "en-US";
// const storedLanguage = localStorage.getItem("lang") || DEFAULT_LANGUAGE;
// console.log(localStorage.getItem("lang"));

const i18n = createI18n({
  locale: DEFAULT_LANGUAGE,
  messages: translations,
});

router.afterEach((to) => {
  const newLang = router.currentRoute.value.params.lang;
  console.log("newLang", newLang);
  console.log("localStorage.getItem(lang)", localStorage.getItem("lang"));
  // if (!newLang && localStorage.getItem("lang")) {
  //   return;
  // }
  const storedLanguage = localStorage.getItem("lang") || DEFAULT_LANGUAGE;
  console.log("newLang", newLang);
  console.log("storedLanguage", storedLanguage);
  // if (newLang !== storedLanguage) {
  //   console.log("here1");

  // }
  i18n.global.locale = newLang || storedLanguage;
  localStorage.setItem("lang", i18n.global.locale);
});

export default i18n;
