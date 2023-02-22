import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div class='dash-container'>
      <div className='dash'>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <Card class='dashboard-tile' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              class='img'
              component="img"
              height="140"
              image={require("./dashboard.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dashboard
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
        <Link to="/submissions" style={{ textDecoration: 'none' }}>
        <Card class='submissions-tile' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              class='img'
              component="img"
              height="140"
              image={require("./submissions.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Submissions
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
        <Link to="https://leetcode.com/problems/two-sum/" style={{ textDecoration: 'none' }}>
        <Card class='problem-tile' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              class='img'
              component="img"
              height="140"
              image={require("./problem.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Problem of the Day
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
        <Card class='profile-tile' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              class='img'
              component="img"
              height="140"
              image={require("./profile.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Profile
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
        <Link to="https://leetcode.com/problemset/all/" style={{ textDecoration: 'none' }}>
        <Card class='leetcode-tile' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              class='img'
              component="img"
              height="140"
              image={require("./leetcode.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                LeetCode
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
        <Link to="/settings" style={{ textDecoration: 'none' }}>
        <Card class='settings-tile' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              class='img'
              component="img"
              height="140"
              image={require("./settings.png")}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Settings
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      </div>
    </div>
  );
}

export default Home;