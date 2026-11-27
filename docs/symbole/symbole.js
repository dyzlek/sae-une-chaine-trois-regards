// Symbole de « Terre commune » : le cristal-île (bible DA §5).
// Outil de dessin pour la planche (S48) : ce n'est pas le code de l'application.
// Une île low-poly d'un seul bloc, portée par sa racine sous-marine :
//   - au-dessus de l'eau, un relief continu sculpté par la graine et la part de terre,
//     d'une teinte unie selon l'émotion majoritaire des derniers messages ;
//   - sous l'eau, la racine : ce que la chaîne garde en mémoire, qui s'allonge avec n.
// Tout est déterministe : même état de chaîne -> même symbole.

(function (global) {
  'use strict';

  var C = {
    abysse: '#133C59', lagon: '#36B5BC', sable: '#E4CA94', prairie: '#56A85C',
    mousse: '#607A70', falaise: '#7A808A', neige: '#ECF2F8', magma: '#FF7626',
    brume: '#7B8798', encre: '#08111D', sel: '#F1F5F9',
    cyan: '#38BDF8', ambre: '#FBBF24', violet: '#A78BFA'
  };

  // Une seule couleur unie par émotion majoritaire (sculptée uniquement par la lumière et l'ombre)
  var EMO = { joie: C.prairie, calme: C.sable, tristesse: C.mousse, colere: C.magma };

  // Mulberry32, le même PRNG que l'œuvre (bible §6.1)
  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function hex2rgb(h) { return [1, 3, 5].map(function (i) { return parseInt(h.substr(i, 2), 16); }); }
  function rgb2hex(c) { return '#' + c.map(function (v) { v = Math.round(Math.max(0, Math.min(255, v))); return (v < 16 ? '0' : '') + v.toString(16); }).join('').toUpperCase(); }
  function mix(a, b, t) { var x = hex2rgb(a), y = hex2rgb(b); return rgb2hex(x.map(function (v, i) { return v + (y[i] - v) * t; })); }

  // Détermine l'émotion majoritaire parmi les derniers messages (en cas d'égalité, la plus récente gagne)
  function dominante(etat) {
    if (!etat.recents || !etat.recents.length || etat.n === 0) return null;
    var counts = { joie: 0, calme: 0, tristesse: 0, colere: 0 };
    var best = null, bestC = 0;
    for (var i = 0; i < etat.recents.length; i++) {
      var m = etat.recents[i];
      if (!m || m.masquer || !m.emotion || counts[m.emotion] === undefined) continue;
      counts[m.emotion]++;
      if (counts[m.emotion] >= bestC) { bestC = counts[m.emotion]; best = m.emotion; }
    }
    return best || 'calme';
  }

  function hasFlag(etat, key, val) {
    if (!etat.recents) return false;
    for (var i = 0; i < etat.recents.length; i++) {
      if (etat.recents[i] && etat.recents[i][key] === val) return true;
    }
    return false;
  }

  // etat = { n, terre, seed, recents:[{emotion, masquer, source}] }
  // opts = { taille, mode:'couleur'|'mono'|'mono-encre', fond:'#...' }
  function svg(etat, opts) {
    opts = opts || {};
    var mode = opts.mode || 'couleur';
    var taille = opts.taille || 64;
    var rnd = mulberry32((etat.seed || 0) >>> 0);

    var t = Math.min(1, (etat.terre || 0) / 0.45);
    var nRatio = Math.log(1 + (etat.n || 0)) / Math.log(301);
    var dom = dominante(etat);
    var baseColor = dom ? EMO[dom] : C.lagon;
    var isLocal = hasFlag(etat, 'source', 'local');
    var isMasked = hasFlag(etat, 'masquer', true);

    // Ligne de flottaison (y = 33) : une île large et posée, d'un seul tenant
    var y0 = 33;
    var w = 23 + 5 * Math.sqrt(t); // demi-largeur 23 à 28
    var s0 = [32 - w, y0];
    var s1 = [32 - w * (0.46 + (rnd() - 0.5) * 0.12), y0 + 2.4 + (rnd() - 0.5) * 0.8];
    var s2 = [32 + (rnd() - 0.5) * 4.5, y0 + 3.6 + (rnd() - 0.5) * 0.8];
    var s3 = [32 + w * (0.48 + (rnd() - 0.5) * 0.12), y0 + 2.0 + (rnd() - 0.5) * 0.8];
    var s4 = [32 + w, y0];

    // Relief continu au-dessus de l'eau : un sommet principal + une épaule reliée (une seule masse)
    var hPeak = etat.n > 0 ? (7 + 16 * Math.sqrt(t) + (rnd() - 0.5) * 2.0) : 1.2;
    var dir = rnd() > 0.5 ? 1 : -1; // asymétrie naturelle du massif
    var pPeak = [32 - dir * (3.5 + 3.0 * rnd()), y0 - hPeak];
    var pShoulder = [32 + dir * (w * 0.36 + 2.5 * rnd()), y0 - hPeak * (0.52 + 0.18 * rnd())];
    // Ordre gauche -> droite pour un maillage continu sans croisement
    var topL = pPeak[0] < pShoulder[0] ? pPeak : pShoulder;
    var topR = pPeak[0] < pShoulder[0] ? pShoulder : pPeak;

    // Racine sous-marine : quille cristalline large et asymétrique (pas un cône pointu)
    var dRoot = 8 + 14 * nRatio;
    var bL = [32 - w * (0.34 + 0.10 * rnd()), y0 + dRoot * (0.58 + 0.14 * rnd())];
    var bC = [32 + dir * (2.0 + 3.0 * rnd()), y0 + dRoot];
    var bR = [32 + w * (0.36 + 0.10 * rnd()), y0 + dRoot * (0.52 + 0.14 * rnd())];

    // Helpers de teinte (lumière venue d'en haut à gauche)
    function shade(base, lum) {
      if (mode === 'mono') return { fill: C.sel, op: 0.42 + 0.58 * lum };
      if (mode === 'mono-encre') return { fill: C.encre, op: 0.42 + 0.58 * lum };
      return { fill: mix(mix(base, C.abysse, 0.34), mix(base, C.neige, 0.24), lum), op: 1 };
    }
    function shadeEau(lum) {
      if (mode === 'mono') return { fill: C.sel, op: 0.12 + 0.30 * lum };
      if (mode === 'mono-encre') return { fill: C.encre, op: 0.12 + 0.30 * lum };
      return { fill: mix(C.abysse, C.lagon, 0.08 + 0.65 * lum), op: 1 };
    }

    var polys = [];
    function add(pts, style, wireframe) {
      polys.push({ pts: pts, fill: style.fill, op: style.op, wireframe: !!wireframe });
    }

    // 1. RACINE SOUS-MARINE (5 facettes continues formant une quille cristalline)
    add([s0, s1, bL], shadeEau(0.92));
    add([s1, s2, bL], shadeEau(0.68));
    add([s2, bC, bL], shadeEau(0.50));
    add([s2, s3, bR, bC], shadeEau(0.28));
    add([s3, s4, bR], shadeEau(0.10));

    // 2. ÎLE AU-DESSUS DE L'EAU (un seul massif facetté continu)
    if (etat.n === 0) {
      add([s0, topL, s2, s1], shadeEau(0.95));
      add([s2, topR, s4, s3], shadeEau(0.70));
      add([topL, topR, s2], shadeEau(0.84));
    } else {
      var colMain = isMasked ? C.brume : baseColor;
      // Versant gauche (éclairé)
      add([s0, topL, s1], shade(colMain, 0.96));
      add([s1, topL, s2], shade(colMain, 0.76));
      // Crête centrale reliant les deux hauteurs
      add([topL, topR, s2], shade(baseColor, 0.56));
      // Versant droit (ombré, ou filaire si en prévision locale)
      if (isLocal && mode === 'couleur') {
        add([s2, topR, s3], { fill: 'none', op: 1 }, true);
        add([topR, s4, s3], { fill: 'none', op: 1 }, true);
      } else {
        add([s2, topR, s3], shade(baseColor, 0.38));
        add([topR, s4, s3], shade(baseColor, 0.20));
      }
    }

    function fmt(pts) {
      return pts.map(function (p) { return p[0].toFixed(2) + ',' + p[1].toFixed(2); }).join(' ');
    }

    var out = [];
    out.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="' + taille + '" height="' + taille + '" role="img" aria-label="Terre commune">');
    if (opts.fond) out.push('<rect width="64" height="64" fill="' + opts.fond + '"/>');
    polys.forEach(function (p) {
      if (p.wireframe) {
        out.push('<polygon points="' + fmt(p.pts) + '" fill="none" stroke="' + C.abysse + '" stroke-opacity="0.7" stroke-width="0.75" stroke-linejoin="round" stroke-dasharray="1.6 1.2"/>');
      } else {
        out.push('<polygon points="' + fmt(p.pts) + '" fill="' + p.fill + '"' + (p.op < 1 ? ' fill-opacity="' + p.op.toFixed(2) + '"' : '') + ' stroke="' + p.fill + '" stroke-opacity="' + p.op.toFixed(2) + '" stroke-width="0.25" stroke-linejoin="round"/>');
      }
    });
    out.push('</svg>');
    return out.join('');
  }

  // Symbole de référence : graine et six messages fixés une fois pour toutes (majorité joie)
  var REFERENCE = { n: 120, terre: 0.38, seed: 0x20264F04,
    recents: ['tristesse', 'joie', 'calme', 'colere', 'joie', 'joie'].map(function (e) { return { emotion: e }; }) };

  global.Symbole = { reference: REFERENCE, svg: svg, couleurs: C, emotions: EMO, mulberry32: mulberry32 };
})(this);
