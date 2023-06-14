'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
import RateForm from '@/components/RateForm';

const MainPage = () => {
  return (
    <Provider store={store}>
      <div>
        <RateForm />
      </div>
    </Provider>
  );
};

export default MainPage;
