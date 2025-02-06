import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';

export const pageResolver: ResolveFn<Object> = (route, state) => {
  const pageId = route.paramMap.get('pageId');
  return of({
    pageId,
    name: 'Foo',
  });
};

// Resolver sorgen dafür, dass Daten bereits geladen sind, bevor eine Komponente erscheint.
// Sie verbessern die Performance und User Experience.
// Ideal für Seiten, die Daten aus einer API oder Datenbank benötigen.
// Kurz gesagt: Resolver = Vorausladen von Daten für bessere UX!
