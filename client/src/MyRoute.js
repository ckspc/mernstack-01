import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import FromComponent from './components/FormComponent';
const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/create" exact component={FromComponent} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
