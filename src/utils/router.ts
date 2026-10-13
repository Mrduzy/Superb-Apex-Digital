import { useState, useEffect, useCallback } from 'react';

export type AppRoute =
  | 'home'
  | 'services'
  | 'discord'
  | 'twitch'
  | 'youtube'
  | 'social-media'
  | 'community-management'
  | 'branding-design'
  | 'team'
  | 'about'
  | 'process'
  | 'case-studies'
  | 'pricing'
  | 'security'
  | 'faq'
  | 'quote'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'refunds'
  | '404';

export function getRouteFromHash(): { route: AppRoute; param?: string } {
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  if (!hash) return { route: 'home' };

  const parts = hash.split('/').filter(Boolean);
  const mainPart = parts[0]?.toLowerCase() || 'home';
  const param = parts[1];

  const validRoutes: Record<string, AppRoute> = {
    '': 'home',
    home: 'home',
    services: 'services',
    discord: 'discord',
    twitch: 'twitch',
    youtube: 'youtube',
    'social-media': 'social-media',
    'community-management': 'community-management',
    'branding-design': 'branding-design',
    team: 'team',
    about: 'about',
    process: 'process',
    'case-studies': 'case-studies',
    pricing: 'pricing',
    security: 'security',
    faq: 'faq',
    quote: 'quote',
    contact: 'contact',
    privacy: 'privacy',
    terms: 'terms',
    refunds: 'refunds',
  };

  if (validRoutes[mainPart]) {
    return { route: validRoutes[mainPart], param };
  }

  return { route: '404' };
}

export function useAppRouter() {
  const [routeState, setRouteState] = useState(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setRouteState(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((target: AppRoute | string, param?: string) => {
    let cleanTarget = target.startsWith('#/') ? target.replace('#/', '') : target.startsWith('/') ? target.slice(1) : target;
    if (param) cleanTarget += `/${param}`;
    if (cleanTarget === 'home' || cleanTarget === '') {
      window.location.hash = '';
      setRouteState({ route: 'home' });
    } else {
      window.location.hash = `#/${cleanTarget}`;
      setRouteState({ route: (cleanTarget.split('/')[0] as AppRoute) || 'home', param });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return {
    currentRoute: routeState.route,
    routeParam: routeState.param,
    navigate,
  };
}
