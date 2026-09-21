import React from 'react';
import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Navbar } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';
import { I18nProvider } from '../src/i18n/I18nProvider';
import { RouterProvider } from '../src/router/Router';

const renderShell = (node: React.ReactNode, path = '/') => renderToStaticMarkup(
  React.createElement(
    I18nProvider,
    null,
    React.createElement(RouterProvider, { initialPath: path, children: node }),
  ),
);

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
});
