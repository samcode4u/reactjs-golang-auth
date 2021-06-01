import React from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import { AddIcCallOutlined, Call, CallEnd, Person, PersonPinCircleOutlined, SupervisedUserCircleOutlined } from '@material-ui/icons';
import { Avatar, Fab, ListItemAvatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
    maxWidth: '400px',
    backgroundColor: theme.palette.background.paper,
  },  
}));

export default function Contacts() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemAvatar>
          <Avatar>
            <Person />
          </Avatar>
        </ListItemAvatar>
            <ListItemText id={labelId} primary={`Contact Number ${value + 1}`} />
            <ListItemSecondaryAction>
              <Fab size="small" color="primary" aria-label="add">
                <Call/>
                </Fab>
              <IconButton edge="end" aria-label="comments">
              <Fab size="small" color="secondary" aria-label="add">
                <CallEnd />
              </Fab>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
