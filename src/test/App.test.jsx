import Home from '../pages/Home';

import { renderToStaticMarkup } from 'react-dom/server';

import { describe, expect, it } from 'vitest';

describe('Home landing page', () => {
  it('renders the main Shantim hero content', () => {
    const html = renderToStaticMarkup(<Home />);

    expect(html).toContain('Experience Lakeside Living Like Never Before');
    expect(html).toContain('Download Brochure');
    expect(html).toContain('Why Smart Investors Choose Goa');
  });
});
