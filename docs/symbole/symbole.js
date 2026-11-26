// Symbole de « Terre commune » : le cristal-île (bible DA §5).
// Outil de dessin pour la planche (S48) : ce n'est pas le code de l'application.
// Un cristal low-poly à deux pointes, coupé par la surface de la mer :
//   - au-dessus de l'eau, l'île : 6 facettes, une par message récent, couleur = emotion ;
//   - sous l'eau, la racine : ce que la chaîne garde en mémoire.
// Tout est déterministe : même état de chaîne -> même symbole.

(function (global) {
  'use strict';

  var C = {
    abysse: '#133C59', lagon: '#36B5BC', sable: '#E4CA94', prairie: '#56A85C',
    mousse: '#607A70', falaise: '#7A808A', neige: '#ECF2F8', magma: '#FF7626',
    brume: '#7B8798', encre: '#08111D', sel: '#F1F5F9',
    cyan: '#38BDF8', ambre: '#FBBF24', violet: '#A78BFA'
  };
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

  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function norm(a) { var l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }

  var TILT = 20 * Math.PI / 180;           // la caméra regarde un peu d'en haut, comme la caméra orbitale
  var VIEW = norm([0, Math.sin(TILT), Math.cos(TILT)]);
  var LIGHT = norm([-0.55, 0.75, 0.45]);    // lumière en haut à gauche, devant (DirectionalLight de la scène)
  var LIGHT_EAU = norm([-0.70, -0.10, 0.70]); // sous l'eau : lumière diffuse venue de face, à gauche

  // etat = { n, terre, seed, recents:[{emotion, masquer, source}] (6 au plus, du plus ancien au plus récent) }
  // opts = { taille, mode:'couleur'|'mono'|'mono-encre', horizon:bool, bouees:bool, fond:'#...' }
  // Un rivage de 7 points posé sur la mer (y = 0), un sommet au-dessus, une racine en dessous.
  // Ordre des tirages fixe : rivage (angle, rayon) x 7, puis sommet (x, z), puis racine (x, z).
  function geometrie(etat) {
    var rnd = mulberry32(etat.seed >>> 0);
    var R = 25, riv = [], k;
    for (k = 0; k < 7; k++) {
      var a = (k * 360 / 7 + 90 + (rnd() - 0.5) * 30) * Math.PI / 180;
      var r = R * (0.80 + 0.34 * rnd());
      riv.push([r * Math.cos(a), 0, r * Math.sin(a)]);
    }
    var t = Math.min(1, (etat.terre || 0) / 0.45);
    // l'île monte avec la part de terre ; à 0 message, le sommet reste sous l'eau (haut-fond)
    var H = etat.n > 0 ? R * (0.22 + 0.40 * Math.sqrt(t)) : -0.6;
    // la racine (ce que la chaîne garde) s'allonge avec le nombre de messages
    var D = R * (0.55 + 0.60 * Math.log(1 + etat.n) / Math.log(301));
    var top = [-0.10 * R + (rnd() - 0.5) * 0.30 * R, H, -0.05 * R + (rnd() - 0.5) * 0.20 * R];
    var bot = [0.10 * R + (rnd() - 0.5) * 0.30 * R, -D, (rnd() - 0.5) * 0.20 * R];
    var faces = [];
    for (k = 0; k < 7; k++) {
      faces.push({ v: [top, riv[(k + 1) % 7], riv[k]], haut: true });
      faces.push({ v: [bot, riv[k], riv[(k + 1) % 7]], haut: false });
    }
    return faces;
  }
  function projeter(p) {
    // x à droite, y en haut, z vers nous ; écran : y vers le bas
    var sy = -(p[1] * Math.cos(TILT)) + p[2] * Math.sin(TILT);
    return [p[0], sy, -p[1] * Math.sin(TILT) - p[2] * Math.cos(TILT)];
  }

  function couleurFacette(etat, k, mode) {
    var m = etat.recents && etat.recents.length ? etat.recents[k % etat.recents.length] : null;
    if (mode !== 'couleur') return { base: mode === 'mono' ? C.sel : C.encre, filaire: m && m.source === 'local' };
    if (!m || etat.n === 0) return { base: C.lagon };
    if (m.masquer) return { base: C.brume };
    return { base: EMO[m.emotion] || C.falaise, filaire: m.source === 'local' };
  }

  function svg(etat, opts) {
    opts = opts || {};
    var mode = opts.mode || 'couleur';
    var taille = opts.taille || 64;
    var faces = geometrie(etat);
    var poly = [];
    faces.forEach(function (f) {
      var n = norm(cross(sub(f.v[1], f.v[0]), sub(f.v[2], f.v[0])));
      if ((f.haut && n[1] < 0) || (!f.haut && n[1] > 0)) { f.v = [f.v[0], f.v[2], f.v[1]]; n = [-n[0], -n[1], -n[2]]; }
      // secteur : 6 parts égales autour de l'axe vertical, une par message récent
      var gx = (f.v[0][0] + f.v[1][0] + f.v[2][0]) / 3, gz = (f.v[0][2] + f.v[1][2] + f.v[2][2]) / 3;
      var sect = Math.floor(((Math.atan2(-gz, -gx) + Math.PI) / (2 * Math.PI)) * 6) % 6;
      // le plus récent (indice 5) est le secteur de face ; les plus anciens tournent vers l'arrière
      f.k = (6 - sect) % 6;
      if (dot(n, VIEW) <= 0.02) return;                       // face cachée
      var lum = Math.max(0, dot(n, LIGHT));
      var P = f.v.map(projeter);
      var z = (P[0][2] + P[1][2] + P[2][2]) / 3;
      var fill, stroke = null, op = 1;
      if (f.haut) {
        var cf = couleurFacette(etat, f.k, mode);
        if (mode === 'couleur') fill = mix(mix(cf.base, C.encre, 0.42), mix(cf.base, C.neige, 0.28), lum);
        else if (mode === 'mono') fill = C.sel, op = 0.45 + 0.55 * lum;
        else fill = C.encre, op = 0.45 + 0.55 * lum;
        if (cf.filaire && mode === 'couleur') { stroke = C.sel; op = 1; fill = 'none'; }
      } else {
        var lumE = Math.max(0, dot(n, LIGHT_EAU));
        if (mode === 'couleur') fill = mix(C.abysse, C.lagon, 0.06 + 0.50 * lumE);
        else if (mode === 'mono') fill = C.sel, op = 0.10 + 0.30 * lumE;
        else fill = C.encre, op = 0.10 + 0.30 * lumE;
      }
      poly.push({ z: z, d: P, fill: fill, op: op, stroke: stroke });
    });
    poly.sort(function (a, b) { return a.z - b.z; });

    // cadrage : la surface de la mer passe par le centre de la boîte 64 × 64
    var s = 0.95, cx = 32, cy = 32;
    function pt(p) { return (cx + p[0] * s).toFixed(2) + ',' + (cy + p[1] * s).toFixed(2); }
    var out = [];
    out.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="' + taille + '" height="' + taille + '" role="img" aria-label="Terre commune">');
    if (opts.fond) out.push('<rect width="64" height="64" fill="' + opts.fond + '"/>');
    var ligne = mode === 'couleur' ? C.lagon : (mode === 'mono' ? C.sel : C.encre);
    if (opts.horizon !== false) {
      out.push('<line x1="2" y1="' + cy + '" x2="62" y2="' + cy + '" stroke="' + ligne + '" stroke-width="1.1" stroke-linecap="round" opacity="' + (mode === 'couleur' ? 0.9 : 0.6) + '"/>');
    }
    poly.forEach(function (p) {
      var d = p.d.map(pt).join(' ');
      if (p.stroke) out.push('<polygon points="' + d + '" fill="none" stroke="' + p.stroke + '" stroke-width="0.7" stroke-linejoin="round" stroke-dasharray="1.6 1.2"/>');
      else out.push('<polygon points="' + d + '" fill="' + p.fill + '"' + (p.op < 1 ? ' fill-opacity="' + p.op.toFixed(2) + '"' : '') + ' stroke="' + p.fill + '" stroke-opacity="' + p.op.toFixed(2) + '" stroke-width="0.25" stroke-linejoin="round"/>');
    });
    out.push('</svg>');
    return out.join('');
  }

  // Symbole de référence : graine et six messages fixés une fois pour toutes (bible §5.3)
  var REFERENCE = { n: 120, terre: 0.38, seed: 0x20264F04,
    recents: ['tristesse', 'joie', 'calme', 'colere', 'calme', 'joie'].map(function (e) { return { emotion: e }; }) };

  global.Symbole = { reference: REFERENCE, svg: svg, couleurs: C, emotions: EMO, mulberry32: mulberry32 };
})(this);
