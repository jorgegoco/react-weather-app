import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import MainView from '../components/MainView';
import store from '../redux/store';
import Input from '../components/Input';

describe('Navbar-component renders', () => {
  test('It matchs the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Mainview-component renders', () => {
  test('It matchs the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <MainView />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Input-component renders', () => {
  test('It renders in the screen', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Input />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText(/CHANGE/)).toBeInTheDocument();
  });

  test('It matchs the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Input />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
