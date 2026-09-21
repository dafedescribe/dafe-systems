import React from 'react';
import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Navbar } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';
import { I18nProvider } from '../src/i18n/I18nProvider';
import { RouterProvider } from '../src/router/Router';
import { HomePage } from '../src/pages/HomePage';
import { IndustryPage } from '../src/pages/IndustryPage';
import { AutomationPage } from '../src/pages/AutomationPage';
import { WorkPage } from '../src/pages/WorkPage';
import { TeachingPage } from '../src/pages/TeachingPage';
import { AboutPage } from '../src/pages/AboutPage';

const renderShell = (node: React.ReactNode, path = '/') => renderToStaticMarkup(
  React.createElement(
    I18nProvider,
    null,
    React.createElement(RouterProvider, { initialPath: path, children: node }),
  ),
);

const renderPage = renderShell;

describe('site-wide editorial system', () => {
  it('keeps primary navigation focused while Automation remains discoverable', () => {
    const nav = renderShell(React.createElement(Navbar));
    const footer = renderShell(React.createElement(Footer));

    expect(nav).not.toContain('href="/automation"');
    expect(nav).toContain('href="/industry"');
    expect(nav).toContain('href="/work"');
    expect(nav).toContain('href="/teaching"');
    expect(nav).toContain('href="/notes"');
    expect(nav).toContain('href="/about"');
    expect(footer).toContain('href="/automation"');
  });

  it('renders the five-part homepage path with exactly three featured systems', () => {
    const html = renderPage(React.createElement(HomePage));

    expect(html).toContain('id="home-selected-work"');
    expect(html).toContain('id="home-method"');
    expect(html).toContain('id="home-training"');
    expect(html).toContain('id="home-contact"');
    expect(html.match(/data-featured-system="true"/g)).toHaveLength(3);
  });

  it('removes repeated catalogue explanations from the homepage', () => {
    const html = renderPage(React.createElement(HomePage));

    expect(html).not.toContain('Start with the operational problem.');
    expect(html).not.toContain('The software follows the work—not the other way around.');
  });

  it('makes Industry the complete commercial services overview', () => {
    const html = renderPage(React.createElement(IndustryPage), '/industry');

    for (const route of ['/industry/rfq-automation', '/industry/tender-monitoring', '/industry/quotation-workflows', '/industry/commercial-reporting']) {
      expect(html).toContain(`href="${route}"`);
    }
    expect(html).not.toContain('rounded-xl');
    expect(html).not.toContain('shadow-sm');
  });

  it('keeps Automation concise and points to Industry and Work', () => {
    const html = renderPage(React.createElement(AutomationPage), '/automation');

    expect(html).toContain('href="/industry"');
    expect(html).toContain('href="/work"');
    expect(html).not.toContain('Candidate processes for automation');
  });

  it('expands three projects and keeps the remaining work compact', () => {
    const html = renderPage(React.createElement(WorkPage), '/work');

    expect(html.match(/data-featured-project="true"/g)).toHaveLength(3);
    expect(html.match(/data-project-directory-entry="true"/g)?.length).toBeGreaterThan(0);
    expect(html).not.toContain('rounded-xl');
  });

  it('limits Teaching to four representative modules without duplicate topic grids', () => {
    const html = renderPage(React.createElement(TeachingPage), '/teaching');

    expect(html.match(/data-teaching-module="true"/g)).toHaveLength(4);
    expect(html).not.toContain('Technical subjects covered');
    expect(html).not.toContain('rounded-xl');
  });

  it('uses the approved portrait quietly on About', () => {
    const html = renderPage(React.createElement(AboutPage), '/about');

    expect(html).toContain('replicate-image-style-precisely-20260919112129.jpeg');
    expect(html).toContain('id="about-identity"');
    expect(html).not.toContain('Active Inquiries Open');
    expect(html).not.toContain('rounded-xl');
  });
});
