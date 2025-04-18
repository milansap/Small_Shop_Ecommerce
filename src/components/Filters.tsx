import { Select, Row, Col } from "antd";

import { FilterType } from "../types/Types";

const { Option } = Select;

interface FiltersProps {
  onFilterChange: (filterType: FilterType, value: string | string[]) => void;
}

const Filters = ({ onFilterChange }: FiltersProps) => {
  return (
    <div className="p-4 bg-white shadow-sm">
      <Row gutter={[16, 16]} align="middle" justify={"end"}>
        <Col xs={24} sm={12} md={8}>
          Filters
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Select
            placeholder="Sort by"
            style={{ width: "100%" }}
            size="large"
            onChange={(value: string) => onFilterChange("sort", value)}
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
            style={{ width: "100%" }}
            size="large"
            mode="multiple"
            onChange={(value: string[]) => onFilterChange("category", value)}
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
