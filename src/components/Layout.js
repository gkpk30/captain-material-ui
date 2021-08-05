import React from 'react'
import Header from './Header'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import { Typography } from '@material-ui/core'

import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'



export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <Container>
                <div style={{color: 'red'}}>{children}</div>
            </Container>
        </div>
        
    )
}
