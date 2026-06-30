import { NextResponse } from 'next/server';
import { campaign } from '@/data/campaign';

// Force server-render on every request — prevents Next.js from
// pre-rendering this as a static file at build time.
export const dynamic = 'force-dynamic';

export async function GET() {
  const csvUrl = campaign.googleSheetsCsvUrl;

  if (!csvUrl) {
    return NextResponse.json({ ...campaign.progress, _source: 'static' });
  }

  try {
    // cache: 'no-store' ensures every invocation fetches a fresh CSV,
    // bypassing both Next.js fetch cache and CDN cache.
    const res = await fetch(csvUrl, { cache: 'no-store' });

    if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);

    const csv = await res.text();

    // Parsear CSV: fila 0 = encabezado (campo,valor), resto = datos
    // Las líneas tienen \r\n — trim() los elimina automáticamente.
    const map: Record<string, string> = {};
    csv.split('\n').slice(1).forEach((row) => {
      const parts = row.split(',');
      if (parts[0] && parts[1] !== undefined) {
        const key = parts[0].trim().replace(/"/g, '');
        const val = parts[1].trim().replace(/"/g, '');
        if (key) map[key] = val;
      }
    });

    const num = (k: string, fallback: number) => {
      if (map[k] === undefined) return fallback;
      const parsed = parseInt(map[k], 10);
      return isNaN(parsed) ? fallback : parsed;
    };

    return NextResponse.json({
      litersGoal:           campaign.progress.litersGoal,
      mattressesGoal:       campaign.progress.mattressesGoal,
      ironworkersNeeded:    campaign.progress.ironworkersNeeded,
      litersFinanced:       num('literas_fabricadas',    campaign.progress.litersFinanced),
      mattressesObtained:   num('colchones_conseguidos', campaign.progress.mattressesObtained),
      litersDelivered:      num('literas_entregadas',    campaign.progress.litersDelivered),
      sheltersServed:       num('refugios_atendidos',    campaign.progress.sheltersServed),
      ironworkersConfirmed: num('herreros_confirmados',  campaign.progress.ironworkersConfirmed),
      lastUpdated: map['ultima_actualizacion'] || campaign.progress.lastUpdated,
      _source: 'sheets',
    });
  } catch {
    return NextResponse.json({ ...campaign.progress, _source: 'fallback' });
  }
}
