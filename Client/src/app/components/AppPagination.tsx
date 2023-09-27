import Box from "@mui/material/Box"
import Pagination from "@mui/material/Pagination"
import Typography from "@mui/material/Typography"
import { MetaData } from "~/app/models/pagination"

interface Props {
  metaData: MetaData
  onPageChange: (page: number) => void
}

function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, totalCount, totalPages, pageSize } = metaData

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>
        Displaying {(currentPage - 1) * pageSize + 1}-
        {currentPage * pageSize > totalCount 
          ? totalCount 
          : currentPage * pageSize} of {totalCount} items
      </Typography>
      <Pagination 
        color="secondary"
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(_e, page) => onPageChange(page)}
      />
    </Box>
  )
}

export default AppPagination