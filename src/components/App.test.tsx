import { render, screen } from '@testing-library/react';
import githubDummy from '../mocks/github.json';
import { vi } from 'vitest';
import App from './App';

describe('App component', () => {
  it('should fetch a mock json and display img elements', async () => {
    window.fetch = vi.fn().mockResolvedValueOnce({
      json: async () => githubDummy,
      ok: true,
    });
    render(<App />);
    const imgEls = await screen.findAllByRole('img');
    expect(imgEls).toHaveLength(githubDummy.length * 2);
  });
});
