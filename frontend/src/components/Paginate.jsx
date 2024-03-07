import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  // Získejte rozsah stránek, které chcete zobrazit
  let startPage = page - 2 > 0 ? page - 2 : 1;
  let endPage = page + 2 <= pages ? page + 2 : pages;

  return (
    pages > 1 && (
      <Pagination>
        {/* Výpustky a první stránka, pokud je aktuální stránka daleko od začátku */}
        {startPage > 1 && (
          <>
            <LinkContainer to={getPageUrl(1, isAdmin, keyword)}>
              <Pagination.Item>1</Pagination.Item>
            </LinkContainer>
            {startPage > 2 && <Pagination.Ellipsis />}
          </>
        )}
        {[...Array((endPage + 1) - startPage).keys()].map(x => (
          <LinkContainer
            key={startPage + x}
            to={getPageUrl(startPage + x, isAdmin, keyword)}
          >
            <Pagination.Item active={startPage + x === page}>{startPage + x}</Pagination.Item>
          </LinkContainer>
        ))}
        {/* Výpustky a poslední stránka, pokud je aktuální stránka daleko od konce */}
        {endPage < pages && (
          <>
            {endPage < pages - 1 && <Pagination.Ellipsis />}
            <LinkContainer to={getPageUrl(pages, isAdmin, keyword)}>
              <Pagination.Item>{pages}</Pagination.Item>
            </LinkContainer>
          </>
        )}
      </Pagination>
    )
  );
};

const getPageUrl = (pageNum, isAdmin, keyword) => {
  if (!isAdmin) {
    return keyword ? `/search/${keyword}/page/${pageNum}` : `/page/${pageNum}`;
  }
  return `/admin/productlist/${pageNum}`;
};

export default Paginate;
