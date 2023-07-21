import React, {useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';


// var myHeaders = new Headers();
// myHeaders.append("Authorization", `Client-ID ${clientId}`, `Client-Secret ${clientSecret}`);
// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow',
// };
// let getAlbumData = (callback) => {
//   fetch("https://api.imgur.com/3/account/dillodaypromotions/albums", requestOptions)
//     .then(response => response.text())
//     .then(result => {
//       return callback(JSON.parse(result))
//     })
//     .catch(error => console.log('error', error));
// }
// let getAlbumImages = (albumdata,callback) => {
//   let albumID = albumdata.id
//   fetch(`https://api.imgur.com/3/account/dillodaypromotions/album/${albumID}/images`, requestOptions)
//       .then(response => response.text())
//       .then(result => {
//         return callback(JSON.parse(result))
//       })
// }
// getAlbumData(albumdata => {
//   let temp = albumdata.data;
//   let albumArr = [];
//   temp.forEach(album => {     
//       let albumImages = getAlbumImages(album, callback => {
//         let image = callback.data
//         let imageArr = [];
//         image.forEach(e => {
//           imageArr.push(e.link)
//         })
//         console.log(imageArr)
//         console.log(albumArr)
//         return imageArr;   
//       })
//     albumArr.push(albumImages) 
//   });
//   total = albumArr;
// })

const useStyles = makeStyles((theme) => ({ 
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        width: "100%",
      },
      gridList: {
        width: "90%",
        [theme.breakpoints.down('sm')]: {
          width: "100%" ,
        },
        display: 'flex',
        justifyContent: 'center',
      },
      media: {
        [theme.breakpoints.down('sm')]: {
          height: "auto" ,
          width: '100%',
        },
        [theme.breakpoints.up('md')]: {
          height: "300px!important" ,
          width: "auto!important" ,
        },
        [theme.breakpoints.up('lg')]: {
          height: "400px!important" ,
          width: "auto!important" ,
        },

      },
      mediaVideo: {
        width: "auto" ,
        [theme.breakpoints.down('sm')]: {
          height: "auto" ,
          width: '100%',
        },
        [theme.breakpoints.up('md')]: {
          height: "450px!important" ,
        },
        [theme.breakpoints.up('lg')]: {
          height: "800px!important" ,
        },
      },
      imageTile: {
        display: 'flex!important',
        justifyContent: 'center!important',
        maxWidth: '100%',
      },
      imageWrapper: {
        width: '100%',
        height: 'auto', 
        display: 'flex!important',
        justifyContent: 'center!important',
        maxWidth: '100%',
      },
      videoTile: {
        width: 'auto',
        height: '100%', 
        display: 'flex!important',
        justifyContent: 'center!important',
        maxWidth: '100%',
      }

}));

let Collage = props => {
    const cl = useStyles();
    let album = props.collage 
    const theme = useTheme();
    const ifSmall = useMediaQuery(theme.breakpoints.down('xs'));
    let gridCols = ifSmall ? 2 : 4;
    return (
        <div className={cl.root}>
          <GridList cellHeight={'auto'} className={cl.gridList} cols={gridCols} spacing = {6} >
            {album.map((tile) => 
              {
                if(tile.media === "image") {
                  return (
                  <GridListTile className = {cl.imageTile} key={tile.link} cols={ifSmall ? (tile.cols*1.8 < 1.2) ? (tile.cols * 1.8) : 2 : tile.cols} rows = {tile.rows}>
                    <div className = {cl.imageWrapper}>
                      <img className = {cl.media} src={tile.link} />
                    </div>
                  </GridListTile> )
                }
                else if(tile.media === "video") {
                  return (
                    <GridListTile key={tile.link} cols={tile.cols || 1} rows = {tile.rows || 1}>
                      <div className = {cl.videoTile}>
                        <video className = {cl.mediaVideo} controls> 
                          <source src={tile.link} type = "video/mp4" />
                        </video> 
                      </div>
                    </GridListTile> )
                }
              }
            )}
          </GridList>
          
      </div>)
}

export default Collage;
