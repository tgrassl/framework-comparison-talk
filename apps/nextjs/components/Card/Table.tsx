'use client'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Image from 'next/image';
import type { WeatherResponse } from 'shared';

export interface TableProps {
  weatherData: WeatherResponse;
}

const columnHelper = createColumnHelper<WeatherResponse>();

const defaultWeather: WeatherResponse = {
  location: {
    name: 'Home',
    country: 'Germany',
    lat: 48.183232,
    lon: 11.594169,
  },
  current: {
    cloud: 5,
    condition: {
      text: 'Sunny',
    },
    feelslike_c: 20,
    gust_kph: 45,
    humidity: 50,
    is_day: 1,
    last_updated: 'right now',
    precip_mm: 0,
    pressure_mb: 1016,
    temp_c: 20,
    uv: 1,
    vis_km: 200,
    wind_dir: 'North-East',
    wind_kph: 30,
  },
};

const columns = [
  columnHelper.group({
    header: 'Location',
    footer: (props) => props.column.id,
    columns: [
      columnHelper.accessor('location.name', {
        header: 'City',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('location.country', {
        header: 'Country',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('location.lat', {
        header: 'Latitude',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('location.lon', {
        header: 'Longitude',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
    ],
  }),
  columnHelper.group({
    header: 'Current',
    footer: (props) => props.column.id,
    columns: [
      columnHelper.accessor('current.condition.icon', {
        header: '',
        cell: (info) => (
          <Image src={`https:${info.getValue()}`} width={50} height={50} alt={info.getValue()} />
        ),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('current.condition.text', {
        header: '',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('current.cloud', {
        header: 'Clouds',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('current.temp_c', {
        header: 'Temp.',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('current.feelslike_c', {
        header: 'Feels like',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('current.wind_dir', {
        header: 'Wind direction',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('current.wind_kph', {
        header: 'Wind speed',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('current.gust_kph', {
        header: 'Wind gusts',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('current.precip_mm', {
        header: 'Rain [mm]',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      columnHelper.accessor('current.humidity', {
        header: 'Humidity',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
    ],
  }),
];

export const Table = ({ weatherData = defaultWeather }: TableProps) => {
  const table = useReactTable<WeatherResponse>({
    data: [weatherData],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
