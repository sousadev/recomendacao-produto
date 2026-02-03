import { useState } from "react";
import { Dropdown, Select, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';


export const Selector = ({ items, label = 'Selecione uma opção', onSelect, selected }) => {
    const options = [
        {
            key: '1',
            label: label,
            disabled: true,
        },
        {
            type: 'divider',
        },
        ...items.map((o) => ({
            key: o,
            label: o,
            value: o,
        })),
    ]

    return (
        <Select
    style={{ width: 400 }}
    onChange={onSelect}
    options={[
      {
        label: <span>{label}</span>,
        title: {label},
        options: [
         ...items.map((o) => ({
            label: o,
            value: o,
        }))
        ],
    }
    ]}
  />
    );
}
