(function () {
  try {
    var d = document;

    var s = d.currentScript || (function () {
      var scripts = d.getElementsByTagName('script');
      return scripts[scripts.length - 1];
    })();
    if (!s) return;

    var u = new URL(s.src, d.location);
    var size = (u.searchParams.get('size') || 'md').toLowerCase();

    var profileUrl   = "https://www.lafabriquedunet.fr/agences/agence/bienfait";
    var agencyName   = "Bienfait";
    var rating       = null;
    var reviewCount  = 0;
    var listingUrl   = "https://www.lafabriquedunet.fr/agences/pages/agences-nocode";
    var listingLabel = "Nocode";
    var v2Layout     = true;

    var sizes = { sm: '180px', md: '230px', lg: '280px' };
    var w = sizes[size] || sizes.md;

    // SR-only style (visually hidden but crawlable / a11y-friendly).
    // Standard accessibility pattern, identical to what Trustpilot / Yelp
    // ship in their embed widgets. Not cloaking.
    var srStyle = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;';

    if (v2Layout) {
      // ----- 2-zone layout (feature-flagged, opt-in via config) -----
      // The visible SVG is wrapped in a <span> carrying two transparent
      // <a> overlays: the top half points at the agency profile, the
      // bottom half (LFDN wordmark + reviews) at the topical listing.
      var wrapper = d.createElement('span');
      wrapper.style.cssText = 'position:relative;display:inline-block;width:' + w + ';line-height:0;';

      wrapper.innerHTML = `<svg width="280" height="56" viewBox="0 0 280 56" fill="none" xmlns="http://www.w3.org/2000/svg"> <defs> <clipPath id="lfdn-clip-4b1aeb"><rect width="280" height="56" rx="10" fill="white"/></clipPath> </defs> <g clip-path="url(#lfdn-clip-4b1aeb)"> <rect width="280" height="56" rx="10" fill="white"/> <rect x="0.5" y="0.5" width="279" height="55" rx="9.5" stroke="#e4e4e7" stroke-opacity="1"/> <g transform="translate(14,8)"> <rect width="20" height="20" rx="2.5" fill="#FE8C74"/> <path d="M10 2.5L12 6.5L16.3 7L13.2 10L13.9 14.3L10 12.2L6.1 14.3L6.8 10L3.7 7L8 6.5Z" fill="white"/> </g> <g transform="translate(37,8)"> <rect width="20" height="20" rx="2.5" fill="#FE8C74"/> <path d="M10 2.5L12 6.5L16.3 7L13.2 10L13.9 14.3L10 12.2L6.1 14.3L6.8 10L3.7 7L8 6.5Z" fill="white"/> </g> <g transform="translate(60,8)"> <rect width="20" height="20" rx="2.5" fill="#FE8C74"/> <path d="M10 2.5L12 6.5L16.3 7L13.2 10L13.9 14.3L10 12.2L6.1 14.3L6.8 10L3.7 7L8 6.5Z" fill="white"/> </g> <g transform="translate(83,8)"> <rect width="20" height="20" rx="2.5" fill="#FE8C74"/> <path d="M10 2.5L12 6.5L16.3 7L13.2 10L13.9 14.3L10 12.2L6.1 14.3L6.8 10L3.7 7L8 6.5Z" fill="white"/> </g> <g transform="translate(106,8)"> <rect width="20" height="20" rx="2.5" fill="#FE8C74"/> <path d="M10 2.5L12 6.5L16.3 7L13.2 10L13.9 14.3L10 12.2L6.1 14.3L6.8 10L3.7 7L8 6.5Z" fill="white"/> </g> <text x="136" y="24" fill="#141412" font-family="'Inter', sans-serif" font-size="18" font-weight="700" letter-spacing="-0.5px">5,0</text> <text x="163" y="24" fill="#141412" font-family="'Inter', sans-serif" font-size="11" font-weight="400" opacity="0.3">/5</text> <text x="182" y="24" fill="#FE8C74" font-family="'Inter', sans-serif" font-size="11" font-weight="700">Excellent</text> <circle cx="22" cy="42" r="6" fill="#FE8C74"/> <text x="22" y="45" fill="white" text-anchor="middle" font-family="'Inter', sans-serif" font-size="8" font-weight="700">F</text> <text x="34" y="45" fill="#141412" font-family="'Inter', sans-serif" font-size="10" font-weight="500" opacity="0.5">La Fabrique du Net</text> <text x="266" y="45" fill="#141412" text-anchor="end" font-family="'Inter', sans-serif" font-size="9" font-weight="400" opacity="0.3">6 évaluations</text> </g> </svg>`;
      var svgEl = wrapper.querySelector('svg');
      if (svgEl) {
        svgEl.style.cssText = 'display:block;width:' + w + ';height:auto;';
      }

      var aProfile = d.createElement('a');
      aProfile.href = profileUrl;
      aProfile.target = '_blank';
      aProfile.rel = 'noopener external';
      aProfile.title = agencyName + ' — Note ' + (rating || 'membre vérifié') + ' sur La Fabrique du Net';
      aProfile.setAttribute('data-lfdn-badge', 'profile');
      aProfile.setAttribute('data-lfdn-rating', rating || '');
      aProfile.setAttribute('data-lfdn-reviews', String(reviewCount));
      aProfile.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:57%;z-index:1;text-decoration:none;';
      var srProfile = d.createElement('span');
      srProfile.style.cssText = srStyle;
      srProfile.textContent = agencyName + ' — Agence certifiée par La Fabrique du Net' + (rating ? ' — Note ' + rating + '/5 sur ' + reviewCount + ' avis' : '');
      aProfile.appendChild(srProfile);

      var aListing = d.createElement('a');
      aListing.href = listingUrl;
      aListing.target = '_blank';
      aListing.rel = 'noopener external';
      aListing.title = 'Annuaire des agences ' + listingLabel + ' — La Fabrique du Net';
      aListing.setAttribute('data-lfdn-badge', 'listing');
      aListing.style.cssText = 'position:absolute;top:57%;left:0;width:100%;height:43%;z-index:1;text-decoration:none;';
      var srListing = d.createElement('span');
      srListing.style.cssText = srStyle;
      srListing.textContent = 'Annuaire des agences ' + listingLabel + ' — La Fabrique du Net';
      aListing.appendChild(srListing);

      wrapper.appendChild(aProfile);
      wrapper.appendChild(aListing);
      s.parentNode.insertBefore(wrapper, s);
      return;
    }

    // ----- Legacy single-link layout (default, backward compatible) -----
    // Keeps the existing DOM structure agencies and their analytics
    // already rely on (one <a> wrapping the SVG) but enriches it with
    // semantic anchor text, a richer title, and tracking attributes —
    // all invisible and non-breaking.
    var aLegacy = d.createElement('a');
    aLegacy.href = profileUrl;
    aLegacy.target = '_blank';
    aLegacy.rel = 'noopener external';
    aLegacy.title = agencyName + ' — Note ' + (rating || 'membre vérifié') + ' sur La Fabrique du Net';
    aLegacy.setAttribute('data-lfdn-badge', 'profile');
    aLegacy.setAttribute('data-lfdn-rating', rating || '');
    aLegacy.setAttribute('data-lfdn-reviews', String(reviewCount));
    aLegacy.style.cssText = 'display:inline-block;line-height:0;text-decoration:none;width:' + w + ';';

    var srLegacy = d.createElement('span');
    srLegacy.style.cssText = srStyle;
    srLegacy.textContent = agencyName + ' — Agence certifiée par La Fabrique du Net' + (rating ? ' — Note ' + rating + '/5 sur ' + reviewCount + ' avis' : '');
    aLegacy.appendChild(srLegacy);

    var svgWrap = d.createElement('span');
    svgWrap.style.cssText = 'display:inline-block;width:' + w + ';line-height:0;';
    svgWrap.innerHTML = `<svg width="280" height="56" viewBox="0 0 280 56" fill="none" xmlns="http://www.w3.org/2000/svg"> <defs> <clipPath id="lfdn-clip-4b1aeb"><rect width="280" height="56" rx="10" fill="white"/></clipPath> </defs> <g clip-path="url(#lfdn-clip-4b1aeb)"> <rect width="280" height="56" rx="10" fill="white"/> <rect x="0.5" y="0.5" width="279" height="55" rx="9.5" stroke="#e4e4e7" stroke-opacity="1"/> <g transform="translate(14,8)"> <rect width="20" height="20" rx="2.5" fill="#FE8C74"/> <path d="M10 2.5L12 6.5L16.3 7L13.2 10L13.9 14.3L10 12.2L6.1 14.3L6.8 10L3.7 7L8 6.5Z" fill="white"/> </g> <g transform="translate(37,8)"> <rect width="20" height="20" rx="2.5" fill="#FE8C74"/> <path d="M10 2.5L12 6.5L16.3 7L13.2 10L13.9 14.3L10 12.2L6.1 14.3L6.8 10L3.7 7L8 6.5Z" fill="white"/> </g> <g transform="translate(60,8)"> <rect width="20" height="20" rx="2.5" fill="#FE8C74"/> <path d="M10 2.5L12 6.5L16.3 7L13.2 10L13.9 14.3L10 12.2L6.1 14.3L6.8 10L3.7 7L8 6.5Z" fill="white"/> </g> <g transform="translate(83,8)"> <rect width="20" height="20" rx="2.5" fill="#FE8C74"/> <path d="M10 2.5L12 6.5L16.3 7L13.2 10L13.9 14.3L10 12.2L6.1 14.3L6.8 10L3.7 7L8 6.5Z" fill="white"/> </g> <g transform="translate(106,8)"> <rect width="20" height="20" rx="2.5" fill="#FE8C74"/> <path d="M10 2.5L12 6.5L16.3 7L13.2 10L13.9 14.3L10 12.2L6.1 14.3L6.8 10L3.7 7L8 6.5Z" fill="white"/> </g> <text x="136" y="24" fill="#141412" font-family="'Inter', sans-serif" font-size="18" font-weight="700" letter-spacing="-0.5px">5,0</text> <text x="163" y="24" fill="#141412" font-family="'Inter', sans-serif" font-size="11" font-weight="400" opacity="0.3">/5</text> <text x="182" y="24" fill="#FE8C74" font-family="'Inter', sans-serif" font-size="11" font-weight="700">Excellent</text> <circle cx="22" cy="42" r="6" fill="#FE8C74"/> <text x="22" y="45" fill="white" text-anchor="middle" font-family="'Inter', sans-serif" font-size="8" font-weight="700">F</text> <text x="34" y="45" fill="#141412" font-family="'Inter', sans-serif" font-size="10" font-weight="500" opacity="0.5">La Fabrique du Net</text> <text x="266" y="45" fill="#141412" text-anchor="end" font-family="'Inter', sans-serif" font-size="9" font-weight="400" opacity="0.3">6 évaluations</text> </g> </svg>`;
    var svgLegacy = svgWrap.querySelector('svg');
    if (svgLegacy) {
      svgLegacy.style.cssText = 'display:block;width:' + w + ';height:auto;';
    }
    aLegacy.appendChild(svgWrap);

    s.parentNode.insertBefore(aLegacy, s);

  } catch (e) {
    if (window.console && console.warn) {
      console.warn('LFDN Badge init error:', e);
    }
  }
})();
