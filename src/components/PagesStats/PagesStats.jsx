import { Title, Table, TableData, NumberOfPages } from "./PagesStats.styled";
import { formatPagesDate, formatPagesTime } from "../../utils/formatPagesData";
import { useFetchUserDataQuery } from "../../redux/users/usersApi";

export default function PagesStats() {
  const { data } = useFetchUserDataQuery();
  const arrayOfPages = data?.user?.info?.progress;

  return (
    <>
      {arrayOfPages.length > 0 && (
        <Table>
          <Title>Statistics</Title>
          {arrayOfPages
            .slice(-5)
            .reverse()
            .map((item) => (
              <tbody key={item._id}>
                <tr>
                  <TableData date>
                    {formatPagesDate(item.trainingDate)}
                  </TableData>
                  <TableData>{formatPagesTime(item.trainingDate)}</TableData>
                  <TableData pages>
                    <NumberOfPages>{item.pagesAmount}</NumberOfPages> pages
                  </TableData>
                </tr>
              </tbody>
            ))}
        </Table>
      )}
    </>
  );
}
