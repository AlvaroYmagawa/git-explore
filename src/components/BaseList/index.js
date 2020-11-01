import React from 'react';
import PropTypes from 'prop-types';

// CUSTOM IMPORTS
import { Container, Scroll, List, LoaderList, Cell } from './styled';
import { isListValid } from '~/utils/validations';

function BaseList({
  className,
  data,
  renderCell,
  renderCellLoader,
  orientation,
  isLoaded,
  loaderListSize,
  cellStyle,
  emptyComponent,
  headerComponent,
  footerComponent,
  withScroll,
}) {
  function setLoaders() {
    const loaderArray = [];

    for (let i = 0; i < loaderListSize; i += 1) {
      loaderArray.push(i);
    }

    return loaderArray;
  }

  // FUNCTIONS
  const loaders = setLoaders();

  function renderList() {
    return (
      <Container className={className} orientation={orientation}>
        {headerComponent}

        {isLoaded ? (
          <List style={{ flexDirection: orientation }}>
            {isListValid(data)
              ? data.map((item, index) => (
                  <Cell key={item.id} style={cellStyle}>
                    {renderCell(item, index)}
                  </Cell>
                ))
              : emptyComponent}
          </List>
        ) : (
          <LoaderList style={{ flexDirection: orientation }}>
            {loaders.map((loader, index) => (
              <Cell key={loader} style={cellStyle}>
                {renderCellLoader(loader, index)}
              </Cell>
            ))}
          </LoaderList>
        )}

        {footerComponent}
      </Container>
    );
  }

  return withScroll ? <Scroll>{renderList()}</Scroll> : renderList();
}

BaseList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderCell: PropTypes.func.isRequired,
  orientation: PropTypes.string,
  loaderListSize: PropTypes.number,
  renderCellLoader: PropTypes.func,
  isLoaded: PropTypes.bool,
  cellStyle: PropTypes.object,
  emptyComponent: PropTypes.any,
  headerComponent: PropTypes.any,
  footerComponent: PropTypes.any,
};

BaseList.defaultProps = {
  className: null,
  orientation: 'row',
  loaderListSize: 3,
  renderCellLoader: () => {},
  isLoaded: false,
  cellStyle: {},
  emptyComponent: null,
  headerComponent: null,
  footerComponent: null,
};

export default BaseList;
