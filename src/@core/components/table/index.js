/* eslint-disable no-shadow */
import React, {Fragment} from 'react';
import {StyleSheet} from 'react-native';

// ** Custom Components
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableTitle,
  TableHeader,
  CardWrapper,
  SpaceBetweenWrapper,
} from '../../../Styles/infrustucture';
import {HomeLabel} from '../../../Styles/Pages';
import {theme as AppTheme} from '../../../infrustructure/theme';

// ** Loading UI
import {TableSkeleton} from '../../../Styles/skeletons';
import EmptyStates from '../Empty';

const styles = StyleSheet.create({
  cellProperties: ({theme, color}) => ({
    color: color ? color : 'white',
    fontSize: theme.WP(2.7),
    fontWeight: theme.fontWeights.medium,
    fontFamily: theme.fonts.PoppinsMedium,
    textAlign: 'right',
  }),
});

const TableElement = props => {
  const {rows, columns, title, tableBG, loading = false} = props;

  return (
    <CardWrapper>
      <Card color={tableBG}>
        {loading ? (
          <TableSkeleton />
        ) : (
          <Fragment>
            <SpaceBetweenWrapper style={{marginBottom: AppTheme.WP(3)}}>
              <HomeLabel>{title}</HomeLabel>
            </SpaceBetweenWrapper>
            <Table>
              <TableHeader bg={AppTheme.DefaultPalette().background.table}>
                {columns.map((col, index) => (
                  <TableTitle
                    key={index}
                    textStyle={[styles.cellProperties({theme: AppTheme})]}>
                    {col}
                  </TableTitle>
                ))}
              </TableHeader>

              {rows.length > 0 ? (
                rows.map((row, index) => (
                  <TableRow key={index} isLastRow={index === rows.length - 1}>
                    {Object.keys(row).map((key, obj_index) => (
                      <TableCell
                        key={obj_index}
                        textStyle={[
                          styles.cellProperties({
                            theme: AppTheme,
                            color:
                              AppTheme.DefaultPalette().primary.contrastText,
                          }),
                        ]}>
                        {row[key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <EmptyStates title={'No stats to display yet!'} />
              )}
            </Table>
          </Fragment>
        )}
      </Card>
    </CardWrapper>
  );
};

export default TableElement;
