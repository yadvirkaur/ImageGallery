import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useImageQueryStore from '../store';

const SortSelector = () => {
  const searchText = useImageQueryStore((s) => s.imageQuery.searchText);
  const sortPhotosOrders = [
    { value: '', label: 'latest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'popular', label: 'Popularity' },
  ];
  const sortSearchOrders = [
    { value: '', label: 'Relevant' },
    { value: 'latest', label: 'Latest' },
  ];
  const sortOrders = searchText ? sortSearchOrders : sortPhotosOrders;

  const sortOrder = useImageQueryStore((s) => s.imageQuery.sortOrder);
  const setSortOrder = useImageQueryStore((s) => s.setSortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:
        {searchText
          ? currentSortOrder?.label || 'Relevant'
          : currentSortOrder?.label || 'Latest'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => setSortOrder(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
