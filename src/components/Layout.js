import React from 'react'
// import Header from './Header'
import HeaderNew from './HeaderNew'
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'

import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'




export default function Layout({children}) {
    return (
        <div>
           
                <HeaderNew/>
                <Container>
                    <div>{children}</div>
                </Container>
           
        </div>
        
    )
}
