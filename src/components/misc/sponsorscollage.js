import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around!important',
        overflow: 'hidden',
    },
    gridList: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    media: {
        height:'90%',
        width:'100%',
        verticalAlign: 'middle'
    },
    
    imageTile: {
        height:'100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center!important',
        alignItems: 'center'    
    },
    imageWrapper: {
        display: 'flex',
        justifyContent: 'center!important',
        alignItems: 'center',
        verticalAlign: 'middle',
        backgroundColor: "white",
        height: "70px"
    },

}));

let SponsorsCollage = props => {
    const cl = useStyles();
    let album = props.collage;
    console.log(album);
    const theme = useTheme();
    return (
        <div className={cl.root}>
            <GridList className={cl.gridList} cellHeight = "auto" cellWidth = {200} cols = {5}  spacing = {10}>
                {album.map((tile) => {
                    return (
                        <div className={cl.imageTile}>
                            <div className={cl.imageWrapper}>
                                <img className={cl.media} src={tile.link} />
                            </div>
                        </div>)
                }
                )}
            </GridList>
        </div>)
}

export default SponsorsCollage;
