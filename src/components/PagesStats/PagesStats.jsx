import { Title, Table, TableData, NumberOfPages } from "./PagesStats.styled";

export default function PagesStats() {
  return (
    <Table>
      <Title>Statistics</Title>
      <tbody>
        <tr>
          <TableData date>10.10.2019</TableData>
          <TableData>08:10:23</TableData>
          <TableData pages>
            <NumberOfPages>32</NumberOfPages> pages
          </TableData>
        </tr>
        <tr>
          <TableData date>10.10.2019</TableData>
          <TableData>08:10:23</TableData>
          <TableData pages>
            <NumberOfPages>164</NumberOfPages> pages
          </TableData>
        </tr>
        <tr>
          <TableData date>10.10.2019</TableData>
          <TableData>08:10:23</TableData>
          <TableData pages>
            <NumberOfPages>75</NumberOfPages> pages
          </TableData>
        </tr>
      </tbody>
    </Table>
  );
}
