import { Select, Input, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FilterType } from '../types/Types';

const { Option } = Select;
const { Search } = Input;

interface FiltersProps {
  onFilterChange: (filterType: FilterType, value: string | string[]) => void;
  onSearch: (searchTerm: string) => void;
}

const Filters = ({ onFilterChange, onSearch }: FiltersProps) => {
  return (
    <div className="p-4 bg-white shadow-sm">
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={12} md={8}>
          <Search
            placeholder="Search products..."
            allowClear
            enterButton={<SearchOutlined />}
            size="large"
            onSearch={onSearch}
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Select
            placeholder="Sort by"
            style={{ width: '100%' }}
            size="large"
            onChange={(value: string) => onFilterChange('sort', value)}
          >
            <Option value="price_asc">Price: Low to High</Option>
            <Option value="price_desc">Price: High to Low</Option>
            <Option value="name_asc">Name: A-Z</Option>
            <Option value="name_desc">Name: Z-A</Option>
          </Select>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Select
            placeholder="Filter by category"
            style={{ width: '100%' }}
            size="large"
            mode="multiple"
            onChange={(value: string[]) => onFilterChange('category', value)}
          >
            <Option value="clothing">Clothing</Option>
            <Option value="electronics">Electronics</Option>
            <Option value="handicraft">Handicraft</Option>
            <Option value="food">Food</Option>
          </Select>
        </Col>
      </Row>
    </div>
  );
};

export default Filters;