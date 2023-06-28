import { render, screen } from '@testing-library/react';
import { UnitTests } from './UnitTests';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Unit Tests', () => {
  test('loads and displays header with result', async () => {
    // ARRANGE //==given
    const { container } = render(<UnitTests />);
    container.getElementsByClassName('result-value');
    container.getElementsByClassName('test-span');

    // ACT //==when
    await act(async () => {
      await userEvent.click(screen.getByText('Click'));
    });
    // ASSERT //==then
    expect(container.getElementsByTagName('p')[0]).toHaveTextContent('Clicked');

    expect(container.getElementsByTagName('span')[0]).toHaveTextContent(
      'to jest testowy span'
    );

    expect(container.getElementsByTagName('span')[1]).toHaveTextContent(
      'to jest drugi testowy span'
    );

    expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Unit tests'); //będzie błąd, bo powinna być array, musi byc z []
    // expect(screen.getByRole('heading')).toHaveTextContent('Unit tests'); // nie zadziałą

    expect(screen.getByRole('result-value')).toHaveTextContent('result: 25.32');
    // expect(div[0].toHaveTextContent('result: 25.32'));
  });
});
