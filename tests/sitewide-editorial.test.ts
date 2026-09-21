import React from 'react';
import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Navbar } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';
import { I18nProvider } from '../src/i18n/I18nProvider';
import { RouterProvider } from '../src/router/Router';
import { HomePage } from '../src/pages/HomePage';

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
});
