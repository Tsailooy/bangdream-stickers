import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Info({ open, handleClose, config }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">关于</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="h6" component="h3">
              这个生成器的原作者：
            </Typography>
            <List>
              <ListItem
                button
                onClick={() =>
                  (window.location.href = "https://github.com/theoriginalayaka")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Ayaka"
                    src="https://avatars.githubusercontent.com/theoriginalayaka"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Ayaka"
                  secondary="原计划"
                />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  (window.location.href = "https://github.com/modder4869")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Modder4869"
                    src="https://avatars.githubusercontent.com/modder4869"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Modder4869"
                  secondary="代码援助"
                />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  (window.location.href =
                    "https://www.reddit.com/r/ProjectSekai/comments/x1h4v1/after_an_ungodly_amount_of_time_i_finally_made/")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="u/SherenPlaysGames"
                    src="https://styles.redditmedia.com/t5_mygft/styles/profileIcon_n1kman41j5891.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="u/SherenPlaysGames"
                  secondary="for the original stamps"
                />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/TheOriginalAyaka/sekai-stickers/graphs/contributors")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Contributors"
                    src="https://avatars.githubusercontent.com/u/583231"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Contributors"
                  secondary="代码援助"
                />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/xiao-zheng233")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="xiao_zheng"
                    src="https://avatars.githubusercontent.com/xiao-zheng233"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="xiao_zheng"
                  secondary="汉化"
                />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/tsailooy")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Tsailooy"
                    src="https://avatars.githubusercontent.com/tsailooy"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Tsailooy"
                  secondary="bangdream表情素材"
                />
              </ListItem>
            </List>
            <Typography variant="h6" component="h3">
              你可以在这里找到源代码:
            </Typography>
            <List>
              <ListItem
                button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/TheOriginalAyaka/sekai-stickers")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="GitHub"
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="GitHub" secondary="原版" />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/xiao-zheng233/seiki-sekai-stickers")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="GitHub"
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="GitHub" secondary="汉化版" />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Tsailooy/bangdream-stickers")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="GitHub"
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="GitHub" secondary="bangdream版" />
              </ListItem>
            </List>
            <Typography variant="h6" component="h3">
              Discord 机器人：
            </Typography>
            <List>
              <ListItem
                button
                onClick={() =>
                  (window.location.href =
                    "http://link.ayaka.one/stbot")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Discord"
                    src="https://cdn.discordapp.com/embed/avatars/0.png"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Sekai Stickers"
                  secondary="Add more fun to your server."
                />
              </ListItem>
            </List>
            {/* <Typography variant="h6" component="h3">
              Total stickers made using the app:
              <br />
              {config?.global
                ? config?.global.toLocaleString() + " Sticker"
                : "not available"}
            </Typography> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            关闭
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
