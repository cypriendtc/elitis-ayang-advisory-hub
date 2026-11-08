import { createContext, useContext, useEffect, useState, isValidElement, cloneElement, type ReactNode, type ReactElement } from 'react';
import translations from './translations.en.json';

type Language = 'fr' | 'en';
const dictionary: Record<string, string> = translations;
export function translate(text: string, language: Language) {
  if (language === 'fr') return text;
  const key = text.trim().replace(/\s+/g, ' ');
  const result = dictionary[key];
  return result ? text.replace(text.trim(), result) : text;
}
const LanguageContext = createContext({ language: 'fr' as Language, setLanguage: (_: Language) => {} });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');
  useEffect(() => {
    try { if (localStorage.getItem('elitis-language') === 'en') setLanguage('en'); } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem('elitis-language', language); } catch {}
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
export function usePageMetadata(metadata: {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}) {
  const { language } = useLanguage();
  const { title, description, ogTitle, ogDescription } = metadata;
  useEffect(() => {
    document.title = translate(title, language);
    const tags = [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', ogTitle],
      ['meta[property="og:description"]', ogDescription],
    ] as const;
    for (const [selector, content] of tags) {
      document.querySelectorAll<HTMLMetaElement>(selector).forEach((tag) => {
        tag.content = translate(content, language);
      });
    }
  }, [language, title, description, ogTitle, ogDescription]);
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  const t = (text: string) => translate(text, context.language);
  const tree = (node: ReactNode): ReactNode => {
    if (typeof node === 'string') return t(node);
    if (Array.isArray(node)) return node.map(tree);
    if (!isValidElement(node)) return node;
    const element = node as ReactElement<Record<string, unknown>>;
    const props: Record<string, unknown> = {};
    for (const key of ['alt', 'title', 'placeholder', 'aria-label', 'eyebrow']) {
      if (typeof element.props[key] === 'string') props[key] = t(element.props[key]);
    }
    if ('children' in element.props) props['children'] = tree(element.props['children'] as ReactNode);
    return cloneElement(element, props);
  };
  return { ...context, t, tree };
}