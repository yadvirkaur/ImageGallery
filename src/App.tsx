import { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import SortSelector from './components/SortSelector';
import NavBar from './components/NavBar';

function App() {
  const [sortOrder, setSortOrder] = useState('');

  return (
    <>
      <NavBar />
      <SortSelector
        sortOrder={sortOrder}
        onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
      />
      <ImageGrid sortOrder={sortOrder} />
    </>
  );
}

export default App;
