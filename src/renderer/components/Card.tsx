import { Card as BaseCard, CardContent } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import React, { FC, PropsWithChildren } from 'react';
import { Theme } from '../../shared/theme';

const useStyles = makeStyles((theme: Theme) => ({
  cardContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: '16px',
    offset: '0px, 1px',
  },
}));

const Card: FC = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  const classes = useStyles();
  return (
    <BaseCard className={classes.cardContainer}>
      <CardContent>{children}</CardContent>
    </BaseCard>
  );
};
export default Card;
