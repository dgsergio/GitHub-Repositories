import { render, screen } from '@testing-library/react';
import Card from './Card';
import { Github } from '../App.model';

describe('Card component', () => {
  const repoDummy: Github = {
    id: 1,
    name: 'My Proyect',
    description: 'This is a demo proyect',
    html_url: 'http://pixel40.com.ar',
    topics: ['react', 'nextjs', 'javascript'],
  };

  it('should render elements', () => {
    render(<Card repo={repoDummy} />);
    const imgs = screen.getAllByRole('img');
    const titleEl = screen.getByRole('heading', { level: 2 });
    const pEl = screen.getByText('This is a demo proyect');
    const btn = screen.getByRole('button');
    const span = screen.getByText('react, nextjs, javascript');

    expect(imgs).toHaveLength(2);
    expect(titleEl).toBeInTheDocument();
    expect(pEl).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(span).toBeInTheDocument();
  });
});
