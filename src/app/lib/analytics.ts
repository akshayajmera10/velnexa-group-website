const GA_ID = 'G-D954CL1J3R';

declare global {
  interface Window {
    dataLayer: unknown[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

export function initGA() {
  if (typeof window === 'undefined' || document.getElementById('ga-script')) return;

  window.dataLayer = window.dataLayer || [];
  // Use the arguments-based signature required by GA4
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function gtag() { window.dataLayer.push(arguments); };

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.onload = () => {
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  };
  document.head.appendChild(script);
}

export function trackPageView(path: string) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
  });
}

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', eventName, params);
}
