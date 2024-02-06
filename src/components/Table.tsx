import React from 'react';

const defaultHeaders: string[] = ['id', 'name', 'age'];

interface DataObject {
  [key: string]: number | string;
}

interface DynamicTableProps {
  data: DataObject[];
}

const Table: React.FC<DynamicTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          {defaultHeaders.map((header, index) => (
            <th className='text-white' key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr className='text-white' key={rowIndex}>
            {defaultHeaders.map((header, columnIndex) => (
              <td key={columnIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;