import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const getItems = (panelStyle) => [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '5',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '6',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  }
];
const Dropdown = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: "white",
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  return (
    <Collapse
      bordered={false}
    //   defaultActiveKey={['1']}
      className='Collapse'
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: "transparent",
      }}
      expandIconPosition='end'
      items={getItems(panelStyle)}
    />
  );
};
export default Dropdown;